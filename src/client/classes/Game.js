"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageEmitter_1 = require("megadata/classes/MessageEmitter");
var Join_1 = require("../../shared/messages/types/Join");
var events = require.context('../events/');
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.join = function (nickname, color) {
        this.send(Join_1.default, { nickname: nickname, color: color });
    };
    Game = __decorate([
        MessageEmitter_1.AutoloadEvents(events)
    ], Game);
    return Game;
}(MessageEmitter_1.default));
exports.default = Game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQWdGO0FBR2hGLHlEQUFtRDtBQUVuRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBRzVDO0lBQWtDLHdCQUFjO0lBQWhEOztJQUlBLENBQUM7SUFIUSxtQkFBSSxHQUFYLFVBQVksUUFBZ0IsRUFBRSxLQUFZO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBSSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFIa0IsSUFBSTtRQUR4QiwrQkFBYyxDQUFDLE1BQU0sQ0FBQztPQUNGLElBQUksQ0FJeEI7SUFBRCxXQUFDO0NBQUEsQUFKRCxDQUFrQyx3QkFBYyxHQUkvQztrQkFKb0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlRW1pdHRlciwgeyBBdXRvbG9hZEV2ZW50cyB9IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvTWVzc2FnZUVtaXR0ZXInXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2VudW1zJ1xuaW1wb3J0IEpvaW4gZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzL3R5cGVzL0pvaW4nXG5cbmNvbnN0IGV2ZW50cyA9IHJlcXVpcmUuY29udGV4dCgnLi4vZXZlbnRzLycpXG5cbkBBdXRvbG9hZEV2ZW50cyhldmVudHMpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgTWVzc2FnZUVtaXR0ZXIge1xuICBwdWJsaWMgam9pbihuaWNrbmFtZTogc3RyaW5nLCBjb2xvcjogQ29sb3IpIHtcbiAgICB0aGlzLnNlbmQoSm9pbiwgeyBuaWNrbmFtZSwgY29sb3IgfSlcbiAgfVxufVxuIl19