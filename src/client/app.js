"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./classes/Game");
var client = new WebSocket('ws://localhost:8001/');
client.binaryType = 'arraybuffer';
client.onopen = function () {
    console.log("Helo");
    var game = new Game_1.default({ send: function (buffer) { return client.send(buffer); } });
    var parse = game.createMessageParser();
    game.on("ignored" /* Ignored */, function (message) { return console.warn("received message of type " + message.constructor.name, "but no listeners are set for it"); });
    client.onmessage = function (_a) {
        var data = _a.data;
        return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, parse(data)];
        }); });
    };
    client.onclose = function () { return location.reload(); };
    var nickname = null;
    while (nickname === null) {
        nickname = prompt('Nickname:');
    }
    game.join(nickname, 0 /* Red */);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQTZCQTs7QUE1QkEsdUNBQWlDO0FBRWpDLElBQU0sTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDcEQsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUE7QUFJakMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFFLENBQUMsQ0FBQTtJQUNoRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUV4QyxJQUFJLENBQUMsRUFBRSwwQkFBZ0IsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUM5Qyw4QkFBNEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFNLEVBQ3RELGlDQUFpQyxDQUNsQyxFQUhtQyxDQUduQyxDQUFDLENBQUE7SUFFRixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQU8sRUFBUTtZQUFOLGNBQUk7O1lBQU8sc0JBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztLQUFBLENBQUE7SUFDbEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFNLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFqQixDQUFpQixDQUFBO0lBRXhDLElBQUksUUFBUSxHQUFrQixJQUFJLENBQUE7SUFFbEMsT0FBTyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLGNBQVksQ0FBQTtBQUNoQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvTWVzc2FnZUVtaXR0ZXInXG5pbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvR2FtZSdcblxuY29uc3QgY2xpZW50ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODAwMS8nKVxuY2xpZW50LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vc2hhcmVkL2VudW1zJ1xuXG5jbGllbnQub25vcGVuID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlbG9cIilcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHsgc2VuZDogKGJ1ZmZlcikgPT4gY2xpZW50LnNlbmQoYnVmZmVyKSB9KVxuICBjb25zdCBwYXJzZSA9IGdhbWUuY3JlYXRlTWVzc2FnZVBhcnNlcigpXG5cbiAgZ2FtZS5vbihFdmVudC5JZ25vcmVkLCAobWVzc2FnZSkgPT4gY29uc29sZS53YXJuKFxuICAgIGByZWNlaXZlZCBtZXNzYWdlIG9mIHR5cGUgJHttZXNzYWdlLmNvbnN0cnVjdG9yLm5hbWV9YCxcbiAgICBgYnV0IG5vIGxpc3RlbmVycyBhcmUgc2V0IGZvciBpdGBcbiAgKSlcblxuICBjbGllbnQub25tZXNzYWdlID0gYXN5bmMgKHsgZGF0YSB9KSA9PiBwYXJzZShkYXRhKVxuICBjbGllbnQub25jbG9zZSA9ICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpXG5cbiAgbGV0IG5pY2tuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gIHdoaWxlIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICAgIG5pY2tuYW1lID0gcHJvbXB0KCdOaWNrbmFtZTonKVxuICB9XG5cbiAgZ2FtZS5qb2luKG5pY2tuYW1lLCBDb2xvci5SZWQpXG59XG4iXX0=