import MessageType, { MessageTypeData, IMessageType } from 'megadata/classes/MessageType';
import Player from './Player';
export default class Game {
    players: Map<number, Player>;
    private nextPlayerId;
    join(player: Player, nickname: string): void;
    leave(player: Player): void;
    broadcast<T extends MessageType>(type: IMessageType<T>, data: MessageTypeData<T>, skipId?: number): void;
    private getNextPlayerId();
    playerCanJoin(nickname: string): boolean;
    private nicknameTaken(nickname);
    private calculateInitialPosition();
    private getRandomColor();
}
