import MessageType from 'megadata/classes/MessageType';
import { Color } from 'shared/enums';
export interface IPlayer {
    id: number;
    nickname: string;
    color: Color;
    position: {
        x: number;
        y: number;
    };
}
export default class GameInfo extends MessageType {
    players: IPlayer[];
}
