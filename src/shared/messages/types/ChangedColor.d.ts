import MessageType from 'megadata/classes/MessageType';
import { Color } from 'shared/enums';
export default class ChangeColor extends MessageType {
    color: Color;
}
