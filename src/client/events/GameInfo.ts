import AbstractGameClient from '../classes/AbstractGameClient'
import GameInfo from 'shared/messages/types/GameInfo'

export default function (client: AbstractGameClient) {

  client.once(GameInfo, (message) => {

    client.log(`Joined server.`)
    client.onJoinedServer(message)
  })

}
