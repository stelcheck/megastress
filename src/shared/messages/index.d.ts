import { TypeDecorator } from 'megadata';
import { Uint8 } from 'megadata/classes/BinarySerializationFormat';
export declare enum TypeIds {
    Join = 0,
    ConnectionRefused = 1,
    GameInfo = 2,
    Joined = 3,
    Left = 4,
    Move = 5,
    Moved = 6,
}
export declare const Type: TypeDecorator<TypeIds>;
export declare const PlayerId: typeof Uint8;
