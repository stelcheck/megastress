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
var Join = /** @class */ (function (_super) {
    __extends(Join, _super);
    function Join() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Join = __decorate([
        _1.Type(_1.TypeIds.Join, JsonSerializationFormat_1.default)
    ], Join);
    return Join;
}(MessageType_1.default));
exports.default = Join;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQW1DO0FBQ25DLDREQUFzRDtBQUN0RCxvRkFBaUU7QUFLakU7SUFBa0Msd0JBQVc7SUFBN0M7O0lBR0EsQ0FBQztJQUhvQixJQUFJO1FBRHhCLE9BQUksQ0FBQyxVQUFPLENBQUMsSUFBSSxFQUFFLGlDQUFVLENBQUM7T0FDVixJQUFJLENBR3hCO0lBQUQsV0FBQztDQUFBLEFBSEQsQ0FBa0MscUJBQVcsR0FHNUM7a0JBSG9CLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlLCBUeXBlSWRzIH0gZnJvbSAnLi4vJ1xuaW1wb3J0IE1lc3NhZ2VUeXBlIGZyb20gJ21lZ2FkYXRhL2NsYXNzZXMvTWVzc2FnZVR5cGUnXG5pbXBvcnQgSnNvbkZvcm1hdCBmcm9tICdtZWdhZGF0YS9jbGFzc2VzL0pzb25TZXJpYWxpemF0aW9uRm9ybWF0J1xuXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3NoYXJlZC9lbnVtcydcblxuQFR5cGUoVHlwZUlkcy5Kb2luLCBKc29uRm9ybWF0KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9pbiBleHRlbmRzIE1lc3NhZ2VUeXBlIHtcbiAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmdcbiAgcHVibGljIGNvbG9yOiBDb2xvclxufVxuIl19