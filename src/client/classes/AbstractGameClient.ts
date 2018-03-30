import Player from './Player';
import PlayerData from '../../shared/PlayerData'
import GameInfo from 'shared/messages/types/GameInfo'
import Join from 'shared/messages/types/Join'
import { Color } from 'shared/enums'

import MessageEmitter, { AutoloadEvents, Event } from 'megadata/classes/MessageEmitter'

const events = require.context('../events/')
@AutoloadEvents(events)
export default abstract class AbstractGameClient extends MessageEmitter {
    players: Map<number, PlayerData>

    protected player: Player

    constructor(public nickname: string, public connection?: WebSocket) {
        super(connection ? { send: (buffer) => connection.send(buffer) } : undefined)
    
        if (this.connection) {

            this.connection.onopen = () => {
                this.log("Sent join request... ")

                const parse = this.createMessageParser()
                this.connection!.onmessage = async ({ data }) => parse(data)

                this.on(Event.Ignored, (message) => console.warn(
                    `received message of type ${message.constructor.name}`,
                    `but no listeners are set for it`
                ))

                this.send(Join, { nickname: this.nickname })
            }
    
            this.connection.onclose = () => {
                this.log("Connection to server closed.")
                this.dispose()
            }
    
            this.connection.onerror = (ev) => {
                this.log("Error opening websocket: ")
                this.log(ev)
            }
        }
    }

    public onJoinedServer(gameInfo: GameInfo) {
        this.players = new Map<number, PlayerData>()
        gameInfo.players.forEach(p => {
            this.players.set(p.id, p)
        })

        this.player = new Player(this.players.get(gameInfo.clientId)!)
    }

    public onNewClient(playerData: PlayerData) {
        this.players.set(playerData.id, playerData)
    }

    public update() {
        if (this.player && this.player.move()) {
          //  this.send(Move,)
        }
    }

    public dispose() {
        if (this.players) {
            this.players.clear()
        }

        if (this.connection) {
            this.connection.close()
        }
    }

    log(message?: any, ...optionalParams: any[]) {
        console.log(this.nickname + ": " + message, optionalParams)
    }

}