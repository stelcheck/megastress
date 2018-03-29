"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageEmitter_1 = require("megadata/classes/MessageEmitter");
const Game_1 = require("./Game");
const events = require.context('../events/');
let Player = Player_1 = class Player extends MessageEmitter_1.default {
    destroy() {
        Player_1.game.leave(this);
    }
};
Player.game = new Game_1.default();
Player = Player_1 = __decorate([
    MessageEmitter_1.AutoloadEvents(events)
], Player);
exports.default = Player;
var Player_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0VBQWdGO0FBQ2hGLGlDQUF5QjtBQUl6QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBRzVDLElBQXFCLE1BQU0sY0FBM0IsWUFBNEIsU0FBUSx3QkFBYztJQVd6QyxPQUFPO1FBQ1osUUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNGLENBQUE7QUFiZSxXQUFJLEdBQVMsSUFBSSxjQUFJLEVBQUUsQ0FBQTtBQURsQixNQUFNO0lBRDFCLCtCQUFjLENBQUMsTUFBTSxDQUFDO0dBQ0YsTUFBTSxDQWMxQjtrQkFkb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlRW1pdHRlciwgeyBBdXRvbG9hZEV2ZW50cyB9IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvTWVzc2FnZUVtaXR0ZXInXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnc2hhcmVkL2VudW1zJ1xuXG5jb25zdCBldmVudHMgPSByZXF1aXJlLmNvbnRleHQoJy4uL2V2ZW50cy8nKVxuXG5AQXV0b2xvYWRFdmVudHMoZXZlbnRzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgTWVzc2FnZUVtaXR0ZXIge1xuICBwdWJsaWMgc3RhdGljIGdhbWU6IEdhbWUgPSBuZXcgR2FtZSgpXG5cbiAgcHVibGljIGlkOiBudW1iZXJcbiAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmdcbiAgcHVibGljIGNvbG9yOiBDb2xvclxuICBwdWJsaWMgcG9zaXRpb246IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIFBsYXllci5nYW1lLmxlYXZlKHRoaXMpXG4gIH1cbn1cbiJdfQ==