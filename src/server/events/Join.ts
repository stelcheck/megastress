import Player from '../classes/Player'
import PlayerData from 'shared/PlayerData';
import ConnectionRefused from 'shared/messages/types/ConnectionRefused'
import Join from 'shared/messages/types/Join'

export default function (player: Player) {
  const { game } = Player


  player.once(Join, (message) => {

    const { nickname } = message
    if (game.playerCanJoin(nickname)) {
      
      game.join(player, nickname)

    } else {

      const connectionRefused = { reason: `Name '${nickname}' is already taken.`}
      console.log(`Refusing client, because '${connectionRefused.reason}'.`)
      player.send(ConnectionRefused, connectionRefused)
      player.dispose()
    }

  })
}
