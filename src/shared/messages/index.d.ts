import { TypeDecorator } from 'megadata';
import { Uint8 } from 'megadata/classes/BinarySerializationFormat';
export declare enum TypeIds {
    Join = 0,
    GameInfo = 1,
    Joined = 2,
    Left = 3,
    ChangeColor = 4,
    ChangedColor = 5,
    Move = 6,
    Moved = 7,
}
export declare const Type: TypeDecorator<TypeIds>;
export declare const PlayerId: typeof Uint8;
