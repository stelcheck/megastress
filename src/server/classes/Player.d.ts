import MessageEmitter from 'megadata/classes/MessageEmitter';
import Game from './Game';
import { Color } from 'shared/enums';
export default class Player extends MessageEmitter {
    static game: Game;
    id: number;
    nickname: string;
    color: Color;
    position: {
        x: number;
        y: number;
    };
    destroy(): void;
}
