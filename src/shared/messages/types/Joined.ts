import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import JsonFormat from 'megadata/classes/JsonSerializationFormat'
import PlayerData from 'shared/PlayerData';

@Type(TypeIds.Joined, JsonFormat)
export default class Joined extends MessageType implements PlayerData {
  id: number
  nickname: string
  color: string
  speed: number
  position: { x: number; y: number; }
  size: { width: number; height: number; }
}
