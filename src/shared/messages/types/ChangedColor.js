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
        _1.Type(_1.TypeIds.ChangedColor, BinarySerializationFormat_1["default"])
    ], ChangeColor);
    return ChangeColor;
}(MessageType_1["default"]));
exports["default"] = ChangeColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlZENvbG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhbmdlZENvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUFtQztBQUNuQyw0REFBc0Q7QUFDdEQsd0ZBQXFFO0FBS3JFO0lBQXlDLCtCQUFXO0lBQXBEOztJQUVBLENBQUM7SUFGb0IsV0FBVztRQUQvQixPQUFJLENBQUMsVUFBTyxDQUFDLFlBQVksRUFBRSxzQ0FBWSxDQUFDO09BQ3BCLFdBQVcsQ0FFL0I7SUFBRCxrQkFBQztDQUFBLEFBRkQsQ0FBeUMsd0JBQVcsR0FFbkQ7cUJBRm9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlLCBUeXBlSWRzIH0gZnJvbSAnLi4vJ1xuaW1wb3J0IE1lc3NhZ2VUeXBlIGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvTWVzc2FnZVR5cGUnXG5pbXBvcnQgQmluYXJ5Rm9ybWF0IGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvQmluYXJ5U2VyaWFsaXphdGlvbkZvcm1hdCdcblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdzaGFyZWQvZW51bXMnXG5cbkBUeXBlKFR5cGVJZHMuQ2hhbmdlZENvbG9yLCBCaW5hcnlGb3JtYXQpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VDb2xvciBleHRlbmRzIE1lc3NhZ2VUeXBlIHtcbiAgcHVibGljIGNvbG9yOiBDb2xvclxufVxuIl19