import AbstractGameClient from '../classes/AbstractGameClient'
import ConnectionRefused from 'shared/messages/types/ConnectionRefused'

export default function (client: AbstractGameClient) {

  client.once(ConnectionRefused, (message) => {
    client.log(`Connection refused by server.`)
    client.dispose()
  })

}
