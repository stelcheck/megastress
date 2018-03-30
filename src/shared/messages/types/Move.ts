import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import BinaryFormat, { Int32 } from 'megadata/classes/BinarySerializationFormat'
import JsonFormat from 'megadata/classes/JsonSerializationFormat'

@Type(TypeIds.Move, BinaryFormat)
export default class Move extends MessageType {

  @Int32
  public x: number
  @Int32
  public y: number

}
