import MessageType from 'megadata/classes/MessageType';
import { Color } from 'shared/enums';
export default class Join extends MessageType {
    nickname: string;
    color: Color;
}
