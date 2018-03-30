import Player from '../classes/Player'

import Move from 'shared/messages/types/Move'
import Moved from 'shared/messages/types/Moved'

export default function (player: Player) {
  const { game } = Player
  const moved = {
    playerId: player.playerData.id,
    x: 0,
    y: 0
  }

  player.on(Move, (move: Move) => {

    console.log(`${player.debugName()} sent move message.`)

    // TODO: server could validate the new position, etc.
    const { x, y } = move
    player.playerData.position = { x, y }

    // Notify all other clients
    game.broadcast(Moved, moved, moved.playerId)
  })
}
