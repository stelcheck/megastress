import AbstractGameClient from '../classes/AbstractGameClient'
import Joined from 'shared/messages/types/Joined'

export default function (client: AbstractGameClient) {

  client.once(Joined, (message) => {

    client.log(`Client ${message.id}:${message.nickname} joined the server.`)

    client.onNewClient(message)

  })

}
