import Game from './Game'
import PlayerData from 'shared/PlayerData';

import * as WebSocket from 'uws';
import MessageEmitter, { AutoloadEvents } from 'megadata/classes/MessageEmitter'
import MessageType, { IMessageType, MessageTypeData } from 'megadata/classes/MessageType';

const events = require.context('../events/')

@AutoloadEvents(events)
export default class Player extends MessageEmitter {
  public static game: Game = new Game()

  public playerData = new PlayerData()

  constructor(private ws: WebSocket) {
    super({ send: (buffer) => ws.send(buffer) })
  }

  public id() {
    return this.playerData.id
  }

  public destroy() {
    Player.game.leave(this)
  }

  public dispose() {
    this.ws.close()
  }

  public debugName() {
    return `id:${this.id()}:${this.playerData.nickname}`
  }

  public send<T extends MessageType>(type: IMessageType<T>, data: MessageTypeData<T>)  {
    super.send(type, data)
    Player.game.networkStats.sent += 1
  }
}
