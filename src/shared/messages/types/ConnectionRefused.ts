import { Type, TypeIds } from '../'
import MessageType from 'megadata/classes/MessageType'
import JsonFormat from 'megadata/classes/JsonSerializationFormat'

@Type(TypeIds.ConnectionRefused, JsonFormat)
export default class ConnectionRefused extends MessageType {
  public reason: string
}
