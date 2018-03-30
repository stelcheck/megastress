/// <reference types="uws" />
import { Server as WebSocketServer, IServerOptions } from 'uws';
export default class Server extends WebSocketServer {
    constructor(options: IServerOptions, callback?: () => void);
}
