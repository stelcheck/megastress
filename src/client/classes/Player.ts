import PlayerData from "shared/PlayerData";

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

    constructor(public playerData: PlayerData) { }
}