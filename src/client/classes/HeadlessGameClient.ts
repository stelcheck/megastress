import AbstractGameClient from "./AbstractGameClient";
import GameInfo from "shared/messages/types/GameInfo";
import FPSLimiter from "shared/FPSLimiter";

export default class HeadlessGameClient extends AbstractGameClient {

    private fpsLimiter = new FPSLimiter()

    public onJoinedServer(gameInfo: GameInfo) {
        super.onJoinedServer(gameInfo)

        // Start update loop
        this.updateLoop()
    }

    private updateLoop() {
        setTimeout(() => this.updateLoop(), 1)

        if (this.fpsLimiter.nextFrame()) {
            this.update()
        }
    }

}