import Globals from 'shared/Globals'
import GameClient from './GameClient'
import AbstractGameClient from './AbstractGameClient'
import HeadlessGameClient from './HeadlessGameClient'
import NetworkStats from 'shared/NetworkStats';

export default class ClientManager {

    static readonly SOCKET_URL = 'ws://localhost:8001/'

    private gameClient: GameClient
    private clients = new Array<AbstractGameClient>()
    private trafficTable = document.getElementById('trafficTable') as HTMLTableElement
    private trafficRows = new Array<HTMLTableRowElement>()
    private trafficRowsClientMap = new Map<AbstractGameClient, HTMLTableRowElement>()

    constructor() {

        const spawnButton = document.getElementById('spawnButton') as HTMLButtonElement
        spawnButton.onclick = () => this.spawnHeadlessClient(`Headless #${this.clients.length}`)

        const removeHeadlessButton = document.getElementById('clearHeadlessClientsButton') as HTMLButtonElement
        removeHeadlessButton.onclick = () => this.resetHeadlessClients()

        const toggleMovementButton = document.getElementById('toggleMovementButton') as HTMLButtonElement
        toggleMovementButton.onclick = () => this.toggleClientMovements()

        this.createTrafficRows()
        this.updateStats()
    }

    setupGuiClient(name: string) {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        canvas.setAttribute('width', `${Globals.CANVAS_WIDTH}`)
        canvas.setAttribute('height', `${Globals.CANVAS_HEIGHT}`)
        this.gameClient = this.spawnClient(GameClient, name)
    }

    spawnHeadlessClient(name: string) {
        this.spawnClient(HeadlessGameClient, name)
    }

    resetHeadlessClients() {
        for (let i = this.clients.length - 1; i > 0; i--) {
            const client = this.clients[i]
            this.removeClient(client)
            client.dispose()
        }
    }

    toggleClientMovements() {
        this.clients.forEach((client) => {
            client.toggleMovement()
        })
    }

    private spawnClient<T extends AbstractGameClient>(type: { new(name: string, connection: WebSocket): T }, name: string) {
        const socket = this.createClientSocket()
        const client = new type(name, socket)

        socket.onclose = () => {
           this.removeClient(client)
        }

        this.clients.push(client)
        return client
    }

    private removeClient(client: AbstractGameClient) {
        const index = this.clients.indexOf(client)
        if (index !== -1) {
            this.clients.splice(index, 1)
            
            const takenRow = this.trafficRowsClientMap.get(client)
            if (takenRow) {
                this.updateTrafficRow(null, takenRow)
                takenRow.setAttribute('free', 'true')
                this.trafficRowsClientMap.delete(client)
            }
        }
    }

    private createClientSocket() {
        const socket = new WebSocket(ClientManager.SOCKET_URL)
        socket.binaryType = 'arraybuffer'
        return socket
    }

    private readonly trafficElements = ['who', 'received', 'sent', 'receivedS', 'sentS']
    private createTrafficRows() {
        const rows = 18
        for (let i = 0; i < rows; i++) {

            const row = this.trafficTable.insertRow()
            row.setAttribute('id', `trafficRow${i}`)

            this.trafficRows.push(row)
            row.setAttribute('free', i > 0 ? 'true' : 'false')

            for (let j = 0; j < this.trafficElements.length; j++) {
                const cell = row.insertCell()
                cell.setAttribute('height', '18')
                cell.setAttribute('id', `trafficCell${this.trafficElements[j]}`)
            }
        }
    }

    private updateStats() {
        setTimeout(() => {

            // Server takes the first row
            this.updateServerTrafficRow()

            this.clients.forEach((client) => {

                const row = this.getTrafficRow(client)
                if (row) {
                    this.updateTrafficRow( { name: client.nickname, networkStats: client.networkStat }, row)
                }

            })
            this.updateStats()
        }, 100)
    }

    private updateServerTrafficRow() {
        const networkStats = this.gameClient.serverNetworkStats
        const name = 'Server'
        const row = this.trafficRows[0]

        this.updateTrafficRow({ name, networkStats }, row)

    }

    private updateTrafficRow(traffic: { name: string, networkStats: NetworkStats} | null, row: HTMLTableRowElement) {
        for (let i = 0; i < row.cells.length; i++) {
            const cell = row.cells[i]
            const trafficElement = this.trafficElements[i]

            switch (trafficElement) {

                case 'who': {
                    cell.textContent = traffic ? traffic.name : ''
                    break
                }
                case 'received': {
                    cell.textContent = traffic ? `${traffic.networkStats.received}` : ''
                    break
                }
                case 'sent': {
                    cell.textContent = traffic ? `${traffic.networkStats.sent}` : ''
                    break
                }
                case 'receivedS': {
                    //cell.textContent = `${traffic.networkStat.received}`
                    break
                }
                case 'sentS': {
                    //cell.textContent = `${traffic.networkStat.sent}`
                    break
                }
            }
        }
    }

    private getTrafficRow(client: AbstractGameClient) {
        let row = this.trafficRowsClientMap.get(client)

        if (!row) {
            // Need to iterate over the array for the first free row
            for (let i = 0; i < this.trafficRows.length; i++) {
                let maybeRow = this.trafficRows[i]
                if (maybeRow.getAttribute('free') === 'true') {
                    row = maybeRow
                    row.setAttribute('free', 'false')

                    this.trafficRowsClientMap.set(client, row)
                    break
                }
            }
        }

        return row
    }

}