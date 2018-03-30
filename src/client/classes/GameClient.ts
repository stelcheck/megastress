import AbstractGameClient from "./AbstractGameClient";
import PlayerData from 'shared/PlayerData'
import Globals from 'shared/Globals'

export default class GameClient extends AbstractGameClient {

    private clientLog: HTMLTextAreaElement
    private context2D: CanvasRenderingContext2D

    constructor(public nickname: string, public connection?: WebSocket) {
        super(nickname, connection)

        this.clientLog = document.getElementById('clientLog') as HTMLTextAreaElement
        
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        this.context2D = canvas.getContext('2d') as CanvasRenderingContext2D

        this.tick()
    }

tick() {
    this.update()
    this.draw()

    window.requestAnimationFrame(() => this.tick());
}

draw() {
    this.drawRect(Globals.CANVAS_SIZE, { x: 0, y: 0 }, 'rgb(100, 100, 100)')

    if (this.players) {
        Array.from(this.players.values()).forEach((p: PlayerData, index) => {

            this.drawPlayer(p)

        })
    }
}

private drawPlayer(playerData: PlayerData) {
    const color = playerData.color

    // Draw border around the own player
    if (playerData.id === this.player.id) {
        this.drawRect(playerData.size, playerData.position, 'white')

        let innerPos = { x: playerData.position.x + 2, y: playerData.position.y + 2 }
        let innerSize = { width: playerData.size.width - 4, height: playerData.size.height - 4 }
        this.drawRect(innerSize, innerPos, color)

    } else {
        this.drawRect(playerData.size, playerData.position, color)
    }

    this.context2D.font = "11px Arial";
    this.context2D.fillStyle = 'rgb(0, 0, 0)'
    this.context2D.fillText(`${playerData.id}`, playerData.position.x + 4, playerData.position.y + 15);
}

private drawRect(size: { width: number, height: number }, pos: { x: number, y: number }, color: string) {
    this.context2D.fillStyle = color
    this.context2D.fillRect(pos.x, pos.y, size.width, size.height)
}

log(message?: any) {
    let text
    if (typeof message == 'object') {
        text = (JSON && JSON.stringify ? JSON.stringify(message) : message)
    } else {
        text = message
    }

    this.clientLog.innerHTML += `[${new Date(Date.now()).toLocaleString()} ${this.nickname}] ${text}\n`
}

}