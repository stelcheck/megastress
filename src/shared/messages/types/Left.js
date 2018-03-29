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
exports.__esModule = true;
var _1 = require("../");
var BinarySerializationFormat_1 = require("megadata/classes/BinarySerializationFormat");
var Join_1 = require("./Join");
var Left = /** @class */ (function (_super) {
    __extends(Left, _super);
    function Left() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        _1.PlayerId
    ], Left.prototype, "id");
    Left = __decorate([
        _1.Type(_1.TypeIds.Left, BinarySerializationFormat_1["default"])
    ], Left);
    return Left;
}(Join_1["default"]));
exports["default"] = Left;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVmdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxlZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQTZDO0FBQzdDLHdGQUFxRTtBQUNyRSwrQkFBeUI7QUFHekI7SUFBa0Msd0JBQUk7SUFBdEM7O0lBR0EsQ0FBQztJQURDO1FBREMsV0FBUTs0QkFDUTtJQUZFLElBQUk7UUFEeEIsT0FBSSxDQUFDLFVBQU8sQ0FBQyxJQUFJLEVBQUUsc0NBQVksQ0FBQztPQUNaLElBQUksQ0FHeEI7SUFBRCxXQUFDO0NBQUEsQUFIRCxDQUFrQyxpQkFBSSxHQUdyQztxQkFIb0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIFR5cGVJZHMsIFBsYXllcklkIH0gZnJvbSAnLi4vJ1xuaW1wb3J0IEJpbmFyeUZvcm1hdCBmcm9tICdtZWdhZGF0YS9jbGFzc2VzL0JpbmFyeVNlcmlhbGl6YXRpb25Gb3JtYXQnXG5pbXBvcnQgSm9pbiBmcm9tICcuL0pvaW4nXG5cbkBUeXBlKFR5cGVJZHMuTGVmdCwgQmluYXJ5Rm9ybWF0KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdCBleHRlbmRzIEpvaW4ge1xuICBAUGxheWVySWRcbiAgcHVibGljIGlkOiBudW1iZXJcbn1cbiJdfQ==