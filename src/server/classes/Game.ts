import MessageType, { MessageTypeData, IMessageType } from 'megadata/classes/MessageType'

import Player from './Player'
import PlayerData from 'shared/PlayerData';

import Globals from 'shared/Globals'
import NetworkStats from 'shared/NetworkStats';
import GameInfo from 'shared/messages/types/GameInfo'
import Joined from 'shared/messages/types/Joined'
import Left from 'shared/messages/types/Left'
import StatsResponse from 'shared/messages/types/StatsResponse'

export default class Game {
  public players: Map<number, Player> = new Map()

  private nextPlayerId = 0

  public networkStats = new NetworkStats()
  private sendNetworkStatsTo = new Array<number>()

  public join(player: Player, nickname: string) {
    
    const { playerData } = player
    const gameInfo = {
      players: new Array<PlayerData>(),
      clientId: 0
    }

    playerData.nickname = nickname
    playerData.id = this.getNextPlayerId()
    playerData.position = this.calculateInitialPosition()
    playerData.color = this.getRandomColor()

    this.players.set(playerData.id, player)

    gameInfo.clientId = playerData.id
    gameInfo.players = Array.from(this.players.values()).map((p) => p.playerData)

    // Send GameInfo to player
    console.log(`Player '${nickname}' joins the server.`)
    player.send(GameInfo, gameInfo)

    // Send new PlayerData to all other players
    this.broadcast(Joined, playerData, playerData.id)
  }

  public leave(player: Player) {
    const { id } = player.playerData
    this.players.delete(id)

    const index = this.sendNetworkStatsTo.indexOf(id)
    if (index !== -1) {
      this.sendNetworkStatsTo.splice(index, 1)
    }

    this.broadcast(Left, { id }, id)
  }

  public broadcast<T extends MessageType>(type: IMessageType<T>, data: MessageTypeData<T>, skipId?: number) {
    this.players.forEach((player, id) => {
      if (skipId && skipId === id) {
        return
      }

      player.send(type, data)
    })
  }

  public registerClientForNetworkStats(player: Player) {
    const { id } = player.playerData
    if (this.sendNetworkStatsTo.indexOf(id) === -1) {
      this.sendNetworkStatsTo.push(id)

      if (this.sendNetworkStatsTo.length === 1) {
        this.reportNetworkStats()
      }
    }
  }

  private _lastReportedStats = new NetworkStats()
  private reportNetworkStats() {

    setTimeout(() => {
      let { sent, received } = this.networkStats
      const changed = this._lastReportedStats.sent !== sent || this._lastReportedStats.received !== received

      if (changed) {
        this.sendNetworkStatsTo.forEach((id) => {
          const client = this.players.get(id)
          if (client) {
            client.send(StatsResponse, this.networkStats)
            sent += 1
          }
        })

        this._lastReportedStats = { sent , received }
      }

      this.reportNetworkStats()
    }, 200)

  }

  private getNextPlayerId() {
    this.nextPlayerId += 1
    return this.nextPlayerId
  }

  public playerCanJoin(nickname: string) {
    return this.nicknameTaken(nickname)
  }

  private nicknameTaken(nickname: string) {
    for (let name of this.players.values()) {
      if (name.playerData.nickname === nickname) {
        return false
      }
    }

    return true
  }

  private calculateInitialPosition() {

    let x = Math.floor(Math.random() * (Globals.CANVAS_WIDTH - 24))
    let y = Math.floor(Math.random() * (Globals.CANVAS_HEIGHT- 24))  
    
    return { x, y }
  }

  private getRandomColor() {
      let letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
  }

}
