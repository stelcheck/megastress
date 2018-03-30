import { Server as WebSocketServer, IServerOptions } from 'uws'
import MessageEmitter, { Event, IEmitterConfig } from 'megadata/classes/MessageEmitter'
import Join from 'shared/messages/types/Join'
import Player from './Player'

export default class Server extends WebSocketServer {
  constructor(options: IServerOptions, callback?: () => void) {
    super(options, () => {
      this.on('connection', (ws) => {
        const player = new Player(ws)

        console.log("Incoming client connection.")

        player.on(Event.Ignored, (message) => console.warn(
          `${player.debugName()} received message of type ${message.constructor.name}`,
          `but no listeners are set for it`
        ))

        ws.on('message', player.createMessageParser())
        ws.on('close', () => {
          // TODO: add keep alive check
          player.destroy()
          if (player.playerData.id !== 0) {
            console.log(`${player.debugName()} left.`)
          }
        })

        if (callback) {
          callback()
        }
      })
    })
  }
}
