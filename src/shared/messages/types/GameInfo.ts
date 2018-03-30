import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import JsonFormat from 'megadata/classes/JsonSerializationFormat'
import PlayerData from 'shared/PlayerData'

import { Color } from 'shared/enums'

@Type(TypeIds.GameInfo, JsonFormat)
export default class GameInfo extends MessageType {
  public clientId: number
  public players: PlayerData[]
}
