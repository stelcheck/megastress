import PlayerData from 'shared/PlayerData'
import Globals from 'shared/Globals'

export default class Player {

    public get id() {
        return this.playerData.id
    }

    public get name() {
        return this.playerData.nickname
    }

    public get position() {
        return this.playerData.position
    }

    public get size() {
        return this.playerData.size
    }

    private moving: boolean = true
    private direction: number = 0

    constructor(public playerData: PlayerData) { }

    public toggleMovement() {
        this.moving = !this.moving
    }

    public move() {

        // Moves the own player
        if (!this.moving) return false

        let { x, y } = this.position
        let yOffset = 0
        let turnOver = false

        if (this.direction === 0) {
            yOffset = -this.playerData.speed
            
            // Hit the ceiling
            turnOver = (y + yOffset) <= 0

        } else if (this.direction === 1) {
            yOffset = this.playerData.speed

            // Hit the floor
            turnOver = (y + yOffset) >= (Globals.CANVAS_HEIGHT - this.size.height)
        }

        y += yOffset
        y = Math.min(Math.max(y, 0), Globals.CANVAS_HEIGHT)

        const newPos = { x, y}

        this.playerData.position = newPos

        if (turnOver) {
            this.direction = this.direction == 0 ? 1 : 0
        }

        return true
    }
}