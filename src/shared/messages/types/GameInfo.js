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
var _1 = require("../");
var MessageType_1 = require("megadata/classes/MessageType");
var JsonSerializationFormat_1 = require("megadata/classes/JsonSerializationFormat");
var GameInfo = /** @class */ (function (_super) {
    __extends(GameInfo, _super);
    function GameInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameInfo = __decorate([
        _1.Type(_1.TypeIds.GameInfo, JsonSerializationFormat_1.default)
    ], GameInfo);
    return GameInfo;
}(MessageType_1.default));
exports.default = GameInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYW1lSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBbUM7QUFDbkMsNERBQXNEO0FBQ3RELG9GQUFpRTtBQWVqRTtJQUFzQyw0QkFBVztJQUFqRDs7SUFFQSxDQUFDO0lBRm9CLFFBQVE7UUFENUIsT0FBSSxDQUFDLFVBQU8sQ0FBQyxRQUFRLEVBQUUsaUNBQVUsQ0FBQztPQUNkLFFBQVEsQ0FFNUI7SUFBRCxlQUFDO0NBQUEsQUFGRCxDQUFzQyxxQkFBVyxHQUVoRDtrQkFGb0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIFR5cGVJZHMgfSBmcm9tICcuLi8nXG5pbXBvcnQgTWVzc2FnZVR5cGUgZnJvbSAnbWVnYWRhdGEvY2xhc3Nlcy9NZXNzYWdlVHlwZSdcbmltcG9ydCBKc29uRm9ybWF0IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvSnNvblNlcmlhbGl6YXRpb25Gb3JtYXQnXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnc2hhcmVkL2VudW1zJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElQbGF5ZXIge1xuICBpZDogbnVtYmVyXG4gIG5pY2tuYW1lOiBzdHJpbmdcbiAgY29sb3I6IENvbG9yXG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH1cbn1cblxuQFR5cGUoVHlwZUlkcy5HYW1lSW5mbywgSnNvbkZvcm1hdClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbmZvIGV4dGVuZHMgTWVzc2FnZVR5cGUge1xuICBwdWJsaWMgcGxheWVyczogSVBsYXllcltdXG59XG4iXX0=