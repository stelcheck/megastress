/// <reference types="uws" />
import * as WebSocket from 'uws';
import MessageEmitter from 'megadata/classes/MessageEmitter';
import Game from './Game';
import PlayerData from 'shared/PlayerData';
export default class Player extends MessageEmitter {
    private ws;
    static game: Game;
    playerData: PlayerData;
    constructor(ws: WebSocket);
    id(): number;
    destroy(): void;
    dispose(): void;
    debugName(): string;
}
