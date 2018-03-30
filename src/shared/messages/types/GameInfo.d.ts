import MessageType from 'megadata/classes/MessageType';
import PlayerData from 'shared/PlayerData';
export default class GameInfo extends MessageType {
    clientId: number;
    players: PlayerData[];
}
