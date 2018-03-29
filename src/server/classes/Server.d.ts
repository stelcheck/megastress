/// <reference types="uws" />
import { Server as WebSocketServer, IServerOptions } from 'uws';
import MessageEmitter, { IEmitterConfig } from 'megadata/classes/MessageEmitter';
/**
 * Player class interface
 */
export interface IPlayerClass {
    new (config: IEmitterConfig): IPlayer;
}
/**
 * Player instance interface
 */
export interface IPlayer extends MessageEmitter {
    destroy(): void;
}
/**
 * Server class
 *
 * The server class is in charge of maintaining connectivity
 */
export default class Server extends WebSocketServer {
    constructor(options: IServerOptions, callback?: () => void);
}
