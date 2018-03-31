import { Type, TypeIds } from '../'
import BinaryFormat, { Int32 } from 'megadata/classes/BinarySerializationFormat'
import Join from './Join'

@Type(TypeIds.Left, BinaryFormat)
export default class Left extends Join {
  
  @Int32
  public id: number

}
