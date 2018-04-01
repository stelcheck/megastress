import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import BinaryFormat, { Int32 } from 'megadata/classes/BinarySerializationFormat'

@Type(TypeIds.StatsResponse, BinaryFormat)
export default class StatsResponse extends MessageType {

    @Int32
    public sent: number

    @Int32
    public received: number

}
