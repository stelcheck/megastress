import * as WebSocket from 'uws';

import MessageEmitter, { AutoloadEvents } from 'megadata/classes/MessageEmitter'
import Game from './Game'

import { Color } from 'shared/enums'
import PlayerData from 'shared/PlayerData';

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
    return `${this.id()}:${this.playerData.nickname}`
  }

}
