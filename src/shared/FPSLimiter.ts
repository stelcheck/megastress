import Globals from 'shared/Globals'

export default class FPSLimiter {

    private fpsInterval = 1000 / Globals.FPS
    private last = Date.now()

    nextFrame() {

        const now = Date.now()
        const elapsed = now - this.last

        if (elapsed > this.fpsInterval) {
            this.last = now - (elapsed % this.fpsInterval)
            return true
        }

        return false
    }

}