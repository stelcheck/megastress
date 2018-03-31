import AbstractGameClient from '../classes/AbstractGameClient'
import Left from 'shared/messages/types/Left'
import PlayerData from 'shared/PlayerData';

export default function (client: AbstractGameClient) {

  client.on(Left, (message) => {

    client.onClientLeft(message.id)

  })

}
