import AbstractGameClient from '../classes/AbstractGameClient'
import GameClient from '../classes/GameClient'
import StatsResponse from 'shared/messages/types/StatsResponse'

export default function (client: AbstractGameClient) {

  client.on(StatsResponse, (message) => {

    const { sent, received } = message
    const gameClient = client as GameClient
    gameClient.serverNetworkStats = { sent, received }

  })

}

