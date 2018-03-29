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
var ChangeColor = /** @class */ (function (_super) {
    __extends(ChangeColor, _super);
    function ChangeColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeColor = __decorate([
        _1.Type(_1.TypeIds.ChangeColor, BinarySerializationFormat_1["default"])
    ], ChangeColor);
    return ChangeColor;
}(MessageType_1["default"]));
exports["default"] = ChangeColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlQ29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFuZ2VDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBbUM7QUFDbkMsNERBQXNEO0FBQ3RELHdGQUFxRTtBQUtyRTtJQUF5QywrQkFBVztJQUFwRDs7SUFFQSxDQUFDO0lBRm9CLFdBQVc7UUFEL0IsT0FBSSxDQUFDLFVBQU8sQ0FBQyxXQUFXLEVBQUUsc0NBQVksQ0FBQztPQUNuQixXQUFXLENBRS9CO0lBQUQsa0JBQUM7Q0FBQSxBQUZELENBQXlDLHdCQUFXLEdBRW5EO3FCQUZvQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSwgVHlwZUlkcyB9IGZyb20gJy4uLydcbmltcG9ydCBNZXNzYWdlVHlwZSBmcm9tICdtZWdhZGF0YS9jbGFzc2VzL01lc3NhZ2VUeXBlJ1xuaW1wb3J0IEJpbmFyeUZvcm1hdCBmcm9tICdtZWdhZGF0YS9jbGFzc2VzL0JpbmFyeVNlcmlhbGl6YXRpb25Gb3JtYXQnXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnc2hhcmVkL2VudW1zJ1xuXG5AVHlwZShUeXBlSWRzLkNoYW5nZUNvbG9yLCBCaW5hcnlGb3JtYXQpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VDb2xvciBleHRlbmRzIE1lc3NhZ2VUeXBlIHtcbiAgcHVibGljIGNvbG9yOiBDb2xvclxufVxuIl19