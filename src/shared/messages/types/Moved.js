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
var Move_1 = require("./Move");
var BinarySerializationFormat_1 = require("megadata/classes/BinarySerializationFormat");
var Moved = /** @class */ (function (_super) {
    __extends(Moved, _super);
    function Moved() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        _1.PlayerId
    ], Moved.prototype, "playerId");
    Moved = __decorate([
        _1.Type(_1.TypeIds.Moved, BinarySerializationFormat_1["default"])
    ], Moved);
    return Moved;
}(Move_1["default"]));
exports["default"] = Moved;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb3ZlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBNkM7QUFDN0MsK0JBQXlCO0FBQ3pCLHdGQUFxRTtBQUdyRTtJQUFtQyx5QkFBSTtJQUF2Qzs7SUFHQSxDQUFDO0lBREM7UUFEQyxXQUFRO21DQUNjO0lBRkosS0FBSztRQUR6QixPQUFJLENBQUMsVUFBTyxDQUFDLEtBQUssRUFBRSxzQ0FBWSxDQUFDO09BQ2IsS0FBSyxDQUd6QjtJQUFELFlBQUM7Q0FBQSxBQUhELENBQW1DLGlCQUFJLEdBR3RDO3FCQUhvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSwgVHlwZUlkcywgUGxheWVySWQgfSBmcm9tICcuLi8nXG5pbXBvcnQgTW92ZSBmcm9tICcuL01vdmUnXG5pbXBvcnQgQmluYXJ5Rm9ybWF0IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvQmluYXJ5U2VyaWFsaXphdGlvbkZvcm1hdCdcblxuQFR5cGUoVHlwZUlkcy5Nb3ZlZCwgQmluYXJ5Rm9ybWF0KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZWQgZXh0ZW5kcyBNb3ZlIHtcbiAgQFBsYXllcklkXG4gIHB1YmxpYyBwbGF5ZXJJZDogbnVtYmVyXG59XG4iXX0=