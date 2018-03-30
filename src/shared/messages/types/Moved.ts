import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType';
import JsonFormat from 'megadata/classes/JsonSerializationFormat'
import Move from 'shared/messages/types/Move';
import BinaryFormat, { Int32 } from 'megadata/classes/BinarySerializationFormat'

@Type(TypeIds.Moved, BinaryFormat)
export default class Moved extends MessageType {

  @Int32
  public x: number

  @Int32
  public y: number

  @Int32
  public playerId: number

}
