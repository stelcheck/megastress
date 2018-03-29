import MessageEmitter from 'megadata/classes/MessageEmitter';
import { Color } from '../../shared/enums';
export default class Game extends MessageEmitter {
    join(nickname: string, color: Color): void;
}
