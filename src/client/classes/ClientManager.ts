import Globals from 'shared/Globals'
import GameClient from './GameClient'
import AbstractGameClient from './AbstractGameClient'
import HeadlessGameClient from './HeadlessGameClient'

export default class ClientManager {

    static readonly SOCKET_URL = 'ws://localhost:8001/'

    private clients = new Array<AbstractGameClient>()

    private clientStats = new Map<AbstractGameClient, HTMLLabelElement>()
    private headlessStatsParent = document.getElementById('headlessClientsStats') as HTMLDivElement
    private serverStats = document.getElementById('serverTraffic') as HTMLLabelElement

    constructor() {

        const spawnButton = document.getElementById('spawnButton') as HTMLButtonElement
        spawnButton.onclick = () => this.spawnHeadlessClient(`Headless #${this.clients.length}`)

        const removeHeadlessButton = document.getElementById('clearHeadlessClientsButton') as HTMLButtonElement
        removeHeadlessButton.onclick = () => this.resetHeadlessClients()

        const toggleMovementButton = document.getElementById('toggleMovementButton') as HTMLButtonElement
        toggleMovementButton.onclick = () => this.toggleClientMovements()

        this.updateStats()
    }

    setupGuiClient(name: string) {

        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        canvas.setAttribute('width', `${Globals.CANVAS_WIDTH}`)
        canvas.setAttribute('height', `${Globals.CANVAS_HEIGHT}`)
        
        const stats = document.getElementById('gameClientTraffic') as HTMLLabelElement
        const client = this.spawnClient(GameClient, name)
        this.clientStats.set(client, stats)
    }

    spawnHeadlessClient(name: string) {
        const client = this.spawnClient(HeadlessGameClient, name)
        this.createStatsLabel(client)
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
            const label = this.clientStats.get(client)

            if (client instanceof HeadlessGameClient) {
                this.headlessStatsParent.removeChild(label!)
            }
        }
    }

    private createClientSocket() {
        const socket = new WebSocket(ClientManager.SOCKET_URL)
        socket.binaryType = 'arraybuffer'
        return socket
    }

    private updateStats() {
        setTimeout(() => {
            this.clients.forEach((client) => {
                let label = this.clientStats.get(client)
                if (label) {
                    label.innerText = `Received: ${client.networkStat.received} Sent: ${client.networkStat.sent}`

                    if (client instanceof GameClient) {
                        this.serverStats.innerText = `Received: ${client.serverNetworkStats.received} Sent: ${client.serverNetworkStats.sent}`
                    }
                }
            })
            this.updateStats()
        }, 100)
    }

    private createStatsLabel(client: HeadlessGameClient) {
        const statsLabel = document.createElement(`headless${this.clients.length - 1}Stats`) as HTMLLabelElement
        this.headlessStatsParent.appendChild(statsLabel)

        this.clientStats.set(client, statsLabel)
    }

}