import AbstractGameClient from '../classes/AbstractGameClient'
import Moved from 'shared/messages/types/Moved'

export default function (client: AbstractGameClient) {

  client.on(Moved, (message) => {

    //client.log(`Received client position update.`)

    const { x, y } = message
    client.updatePlayerPosition(message.playerId, { x, y })

  })

}
