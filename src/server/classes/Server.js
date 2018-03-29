"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uws_1 = require("uws");
const Player_1 = require("./Player");
/**
 * Server class
 *
 * The server class is in charge of maintaining connectivity
 */
class Server extends uws_1.Server {
    constructor(options, callback) {
        super(options, () => {
            this.on('connection', (ws) => {
                const player = new Player_1.default({ send: (buffer) => ws.send(buffer) });
                console.log("MOO");
                player.on("ignored" /* Ignored */, (message) => console.warn(`received message of type ${message.constructor.name}`, `but no listeners are set for it`));
                ws.on('message', player.createMessageParser());
                ws.on('close', () => player.destroy());
            });
            if (callback) {
                callback();
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStEO0FBRy9ELHFDQUE2QjtBQWdCN0I7Ozs7R0FJRztBQUNILFlBQTRCLFNBQVEsWUFBZTtJQUNqRCxZQUFZLE9BQXVCLEVBQUUsUUFBcUI7UUFDeEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFFaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbEIsTUFBTSxDQUFDLEVBQUUsMEJBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoRCw0QkFBNEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFDdEQsaUNBQWlDLENBQ2xDLENBQUMsQ0FBQTtnQkFFRixFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO2dCQUM5QyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUN4QyxDQUFDLENBQUMsQ0FBQTtZQUVGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLENBQUE7WUFDWixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFyQkQseUJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIGFzIFdlYlNvY2tldFNlcnZlciwgSVNlcnZlck9wdGlvbnMgfSBmcm9tICd1d3MnXG5pbXBvcnQgTWVzc2FnZUVtaXR0ZXIsIHsgRXZlbnQsIElFbWl0dGVyQ29uZmlnIH0gZnJvbSAnbWVnYWRhdGEvY2xhc3Nlcy9NZXNzYWdlRW1pdHRlcidcblxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcidcblxuLyoqXG4gKiBQbGF5ZXIgY2xhc3MgaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVBsYXllckNsYXNzIHtcbiAgbmV3KGNvbmZpZzogSUVtaXR0ZXJDb25maWcpOiBJUGxheWVyXG59XG5cbi8qKlxuICogUGxheWVyIGluc3RhbmNlIGludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQbGF5ZXIgZXh0ZW5kcyBNZXNzYWdlRW1pdHRlciB7XG4gIGRlc3Ryb3koKTogdm9pZFxufVxuXG4vKipcbiAqIFNlcnZlciBjbGFzc1xuICpcbiAqIFRoZSBzZXJ2ZXIgY2xhc3MgaXMgaW4gY2hhcmdlIG9mIG1haW50YWluaW5nIGNvbm5lY3Rpdml0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIgZXh0ZW5kcyBXZWJTb2NrZXRTZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJU2VydmVyT3B0aW9ucywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIob3B0aW9ucywgKCkgPT4ge1xuICAgICAgdGhpcy5vbignY29ubmVjdGlvbicsICh3cykgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHsgc2VuZDogKGJ1ZmZlcikgPT4gd3Muc2VuZChidWZmZXIpIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJNT09cIilcbiAgICAgICAgcGxheWVyLm9uKEV2ZW50Lklnbm9yZWQsIChtZXNzYWdlKSA9PiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYHJlY2VpdmVkIG1lc3NhZ2Ugb2YgdHlwZSAke21lc3NhZ2UuY29uc3RydWN0b3IubmFtZX1gLFxuICAgICAgICAgIGBidXQgbm8gbGlzdGVuZXJzIGFyZSBzZXQgZm9yIGl0YFxuICAgICAgICApKVxuXG4gICAgICAgIHdzLm9uKCdtZXNzYWdlJywgcGxheWVyLmNyZWF0ZU1lc3NhZ2VQYXJzZXIoKSlcbiAgICAgICAgd3Mub24oJ2Nsb3NlJywgKCkgPT4gcGxheWVyLmRlc3Ryb3koKSlcbiAgICAgIH0pXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19