import { Type, TypeIds } from '../'
import JsonFormat from 'megadata/classes/JsonSerializationFormat'
import MessageType from 'megadata/classes/MessageType';

@Type(TypeIds.Left, JsonFormat)
export default class Left extends MessageType {
  
  public id: number

}
