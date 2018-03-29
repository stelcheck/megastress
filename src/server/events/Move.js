"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../classes/Player");
const Move_1 = require("shared/messages/types/Move");
const Moved_1 = require("shared/messages/types/Moved");
function default_1(player) {
    const { game } = Player_1.default;
    const moved = {
        playerId: player.id,
        x: 0,
        y: 0
    };
    player.on(Move_1.default, (move) => {
        player.position = move;
        Object.assign(moved, move);
        game.broadcast(Moved_1.default, moved, player);
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBc0M7QUFFdEMscURBQTZDO0FBQzdDLHVEQUErQztBQUUvQyxtQkFBeUIsTUFBYztJQUNyQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQTtJQUN2QixNQUFNLEtBQUssR0FBRztRQUNaLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO0tBQ0wsQ0FBQTtJQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBSSxFQUFFLENBQUMsSUFBVSxFQUFFLEVBQUU7UUFDN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWJELDRCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuLi9jbGFzc2VzL1BsYXllcidcblxuaW1wb3J0IE1vdmUgZnJvbSAnc2hhcmVkL21lc3NhZ2VzL3R5cGVzL01vdmUnXG5pbXBvcnQgTW92ZWQgZnJvbSAnc2hhcmVkL21lc3NhZ2VzL3R5cGVzL01vdmVkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxheWVyOiBQbGF5ZXIpIHtcbiAgY29uc3QgeyBnYW1lIH0gPSBQbGF5ZXJcbiAgY29uc3QgbW92ZWQgPSB7XG4gICAgcGxheWVySWQ6IHBsYXllci5pZCxcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfVxuXG4gIHBsYXllci5vbihNb3ZlLCAobW92ZTogTW92ZSkgPT4ge1xuICAgIHBsYXllci5wb3NpdGlvbiA9IG1vdmVcbiAgICBPYmplY3QuYXNzaWduKG1vdmVkLCBtb3ZlKVxuICAgIGdhbWUuYnJvYWRjYXN0KE1vdmVkLCBtb3ZlZCwgcGxheWVyKVxuICB9KVxufVxuIl19