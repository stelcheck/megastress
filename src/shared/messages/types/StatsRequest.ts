import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import BinaryFormat from 'megadata/classes/BinarySerializationFormat'

@Type(TypeIds.StatsRequest, BinaryFormat)
export default class StatsRequest extends MessageType {

}
