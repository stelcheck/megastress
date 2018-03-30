import AbstractGameClient from '../classes/AbstractGameClient'
import Joined from 'shared/messages/types/Joined'
import PlayerData from 'shared/PlayerData';

export default function (client: AbstractGameClient) {

  client.on(Joined, (message) => {

    client.log(`Client ${message.id}:${message.nickname} joined the server.`)

    // The message is recycled by the object pool(?), 
    // thus create a copy of the player data
    client.onNewClient(makePlayerData(message))

  })

  const makePlayerData = (message: Joined) =>  {
    const reference = new PlayerData()
    for (let k in reference) {
      if (typeof k === 'object') {
        reference[k] = Object.assign({}, message[k])
      } else {
        reference[k] = message[k]
      }
    }

    return reference
  }

}
