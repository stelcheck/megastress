"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../classes/Player");
const Join_1 = require("shared/messages/types/Join");
const GameInfo_1 = require("shared/messages/types/GameInfo");
let nextId = 0;
function default_1(player) {
    const { game } = Player_1.default;
    const gameInfo = {
        players: Array.from(game.players.values())
    };
    player.once(Join_1.default, (message) => {
        nextId += 1;
        player.nickname = message.nickname;
        player.color = message.color;
        player.id = nextId;
        game.join(player);
        gameInfo.players = Array.from(game.players.values());
        player.send(GameInfo_1.default, gameInfo);
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBc0M7QUFFdEMscURBQTZDO0FBQzdDLDZEQUFxRDtBQUVyRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUE7QUFFZCxtQkFBeUIsTUFBYztJQUNyQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQTtJQUV2QixNQUFNLFFBQVEsR0FBRztRQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDM0MsQ0FBQTtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDNUIsTUFBTSxJQUFJLENBQUMsQ0FBQTtRQUVYLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtRQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDNUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVqQixRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFuQkQsNEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuLi9jbGFzc2VzL1BsYXllcidcblxuaW1wb3J0IEpvaW4gZnJvbSAnc2hhcmVkL21lc3NhZ2VzL3R5cGVzL0pvaW4nXG5pbXBvcnQgR2FtZUluZm8gZnJvbSAnc2hhcmVkL21lc3NhZ2VzL3R5cGVzL0dhbWVJbmZvJ1xuXG5sZXQgbmV4dElkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxheWVyOiBQbGF5ZXIpIHtcbiAgY29uc3QgeyBnYW1lIH0gPSBQbGF5ZXJcblxuICBjb25zdCBnYW1lSW5mbyA9IHtcbiAgICBwbGF5ZXJzOiBBcnJheS5mcm9tKGdhbWUucGxheWVycy52YWx1ZXMoKSlcbiAgfVxuXG4gIHBsYXllci5vbmNlKEpvaW4sIChtZXNzYWdlKSA9PiB7XG4gICAgbmV4dElkICs9IDFcblxuICAgIHBsYXllci5uaWNrbmFtZSA9IG1lc3NhZ2Uubmlja25hbWVcbiAgICBwbGF5ZXIuY29sb3IgPSBtZXNzYWdlLmNvbG9yXG4gICAgcGxheWVyLmlkID0gbmV4dElkXG5cbiAgICBnYW1lLmpvaW4ocGxheWVyKVxuXG4gICAgZ2FtZUluZm8ucGxheWVycyA9IEFycmF5LmZyb20oZ2FtZS5wbGF5ZXJzLnZhbHVlcygpKVxuICAgIHBsYXllci5zZW5kKEdhbWVJbmZvLCBnYW1lSW5mbylcbiAgfSlcbn1cbiJdfQ==