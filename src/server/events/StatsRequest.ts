import Player from '../classes/Player'

import StatsRequest from 'shared/messages/types/StatsRequest'

export default function (player: Player) {
    const { game } = Player

    player.on(StatsRequest, (request: StatsRequest) => {
        // Periodically send NetworkStats to the client
        game.registerClientForNetworkStats(player)
    })
}
