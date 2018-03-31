import Globals from 'shared/Globals'
import GameClient from './GameClient';
import AbstractGameClient from './AbstractGameClient';
import HeadlessGameClient from './HeadlessGameClient';

export default class ClientManager {

    private clients = new Array<AbstractGameClient>()

    constructor() {

        const spawnButton = document.getElementById('spawnButton') as HTMLButtonElement
        spawnButton.onclick = () => this.spawnHeadlessClient(`Headless #${this.clients.length}`)

        const removeHeadlessButton = document.getElementById('clearHeadlessClientsButton') as HTMLButtonElement
        removeHeadlessButton.onclick = () => this.removeHeadlessClients()

    }

    setupGuiClient(name: string) {

        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        canvas.setAttribute('width', `${Globals.CANVAS_WIDTH}`)
        canvas.setAttribute('height', `${Globals.CANVAS_HEIGHT}`)
        
        this.spawnClient(GameClient, name)
    }

    spawnHeadlessClient(name: string) {
        this.spawnClient(HeadlessGameClient, name)
    }

    removeHeadlessClients() {

        this.clients.filter((client) => {

            return (client instanceof HeadlessGameClient)

        }).forEach((client) => {

            this.removeClientFromArray(client)
            client.dispose()

        })
    }

    private spawnClient<T extends AbstractGameClient>(type: { new(name: string, connection: WebSocket): T }, name: string) {
        const socket = this.createClientSocket()
        const client = new type(name, socket)

        socket.onclose = () => {
           this.removeClientFromArray(client)
        }

        this.clients.push(client)
    }

    private removeClientFromArray(client: AbstractGameClient) {
        const index = this.clients.indexOf(client)
        if (index !== 0) {
            this.clients.splice(index, 1)
        }
    }
    private createClientSocket() {
        const socket = new WebSocket('ws://localhost:8001/')
        socket.binaryType = 'arraybuffer'
        return socket
    }

}