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
var MessageType_1 = require("megadata/classes/MessageType");
var BinarySerializationFormat_1 = require("megadata/classes/BinarySerializationFormat");
var Move = /** @class */ (function (_super) {
    __extends(Move, _super);
    function Move() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        BinarySerializationFormat_1.Float32
    ], Move.prototype, "x");
    __decorate([
        BinarySerializationFormat_1.Float32
    ], Move.prototype, "y");
    Move = __decorate([
        _1.Type(_1.TypeIds.Move, BinarySerializationFormat_1["default"])
    ], Move);
    return Move;
}(MessageType_1["default"]));
exports["default"] = Move;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQW1DO0FBQ25DLDREQUFzRDtBQUN0RCx3RkFBa0Y7QUFHbEY7SUFBa0Msd0JBQVc7SUFBN0M7O0lBTUEsQ0FBQztJQUpDO1FBREMsbUNBQU87MkJBQ1E7SUFHaEI7UUFEQyxtQ0FBTzsyQkFDUTtJQUxHLElBQUk7UUFEeEIsT0FBSSxDQUFDLFVBQU8sQ0FBQyxJQUFJLEVBQUUsc0NBQVksQ0FBQztPQUNaLElBQUksQ0FNeEI7SUFBRCxXQUFDO0NBQUEsQUFORCxDQUFrQyx3QkFBVyxHQU01QztxQkFOb0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIFR5cGVJZHMgfSBmcm9tICcuLi8nXG5pbXBvcnQgTWVzc2FnZVR5cGUgZnJvbSAnbWVnYWRhdGEvY2xhc3Nlcy9NZXNzYWdlVHlwZSdcbmltcG9ydCBCaW5hcnlGb3JtYXQsIHsgRmxvYXQzMiB9IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvQmluYXJ5U2VyaWFsaXphdGlvbkZvcm1hdCdcblxuQFR5cGUoVHlwZUlkcy5Nb3ZlLCBCaW5hcnlGb3JtYXQpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlIGV4dGVuZHMgTWVzc2FnZVR5cGUge1xuICBARmxvYXQzMlxuICBwdWJsaWMgeDogbnVtYmVyXG5cbiAgQEZsb2F0MzJcbiAgcHVibGljIHk6IG51bWJlclxufVxuIl19