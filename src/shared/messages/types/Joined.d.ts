import MessageType from 'megadata/classes/MessageType';
import PlayerData from 'shared/PlayerData';
export default class Joined extends MessageType implements PlayerData {
    id: number;
    nickname: string;
    color: string;
    speed: number;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
}
