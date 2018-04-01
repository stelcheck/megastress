import megadata, { TypeDecorator } from 'megadata'
import { Uint8 } from 'megadata/classes/BinarySerializationFormat'

const types = require.context('./types/')

export enum TypeIds {
  Join,
  ConnectionRefused,
  GameInfo,
  Joined,
  Left,
  Move,
  Moved,
  StatsRequest,
  StatsResponse
}

export const Type: TypeDecorator<TypeIds> = megadata(module, types)