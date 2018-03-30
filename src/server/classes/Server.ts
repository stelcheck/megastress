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
          `${player.playerData.nickname} received message of type ${message.constructor.name}`,
          `but no listeners are set for it`
        ))

        ws.on('message', player.createMessageParser())
        ws.on('close', () => player.destroy())
      })

      if (callback) {
        callback()
      }
    })
  }
}
