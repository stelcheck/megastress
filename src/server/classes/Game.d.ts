import MessageType, { MessageTypeData, IMessageType } from 'megadata/classes/MessageType';
import Player from './Player';
export default class Game {
    players: Map<number, Player>;
    join(player: Player): void;
    leave(player: Player): void;
    broadcast<T extends MessageType>(type: IMessageType<T>, data: MessageTypeData<T>, skip?: Player): void;
}
