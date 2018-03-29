"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var megadata_1 = require("megadata");
var BinarySerializationFormat_1 = require("megadata/classes/BinarySerializationFormat");
var types = require.context('./types/');
var TypeIds;
(function (TypeIds) {
    TypeIds[TypeIds["Join"] = 0] = "Join";
    TypeIds[TypeIds["GameInfo"] = 1] = "GameInfo";
    TypeIds[TypeIds["Joined"] = 2] = "Joined";
    TypeIds[TypeIds["Left"] = 3] = "Left";
    TypeIds[TypeIds["ChangeColor"] = 4] = "ChangeColor";
    TypeIds[TypeIds["ChangedColor"] = 5] = "ChangedColor";
    TypeIds[TypeIds["Move"] = 6] = "Move";
    TypeIds[TypeIds["Moved"] = 7] = "Moved";
})(TypeIds = exports.TypeIds || (exports.TypeIds = {}));
exports.Type = megadata_1.default(module, types);
exports.PlayerId = BinarySerializationFormat_1.Uint8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRDtBQUNsRCx3RkFBa0U7QUFFbEUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUV6QyxJQUFZLE9BU1g7QUFURCxXQUFZLE9BQU87SUFDakIscUNBQUksQ0FBQTtJQUNKLDZDQUFRLENBQUE7SUFDUix5Q0FBTSxDQUFBO0lBQ04scUNBQUksQ0FBQTtJQUNKLG1EQUFXLENBQUE7SUFDWCxxREFBWSxDQUFBO0lBQ1oscUNBQUksQ0FBQTtJQUNKLHVDQUFLLENBQUE7QUFDUCxDQUFDLEVBVFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBU2xCO0FBRVksUUFBQSxJQUFJLEdBQTJCLGtCQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBRXRELFFBQUEsUUFBUSxHQUFHLGlDQUFLLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVnYWRhdGEsIHsgVHlwZURlY29yYXRvciB9IGZyb20gJ21lZ2FkYXRhJ1xuaW1wb3J0IHsgVWludDggfSBmcm9tICdtZWdhZGF0YS9jbGFzc2VzL0JpbmFyeVNlcmlhbGl6YXRpb25Gb3JtYXQnXG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZS5jb250ZXh0KCcuL3R5cGVzLycpXG5cbmV4cG9ydCBlbnVtIFR5cGVJZHMge1xuICBKb2luLFxuICBHYW1lSW5mbyxcbiAgSm9pbmVkLFxuICBMZWZ0LFxuICBDaGFuZ2VDb2xvcixcbiAgQ2hhbmdlZENvbG9yLFxuICBNb3ZlLFxuICBNb3ZlZFxufVxuXG5leHBvcnQgY29uc3QgVHlwZTogVHlwZURlY29yYXRvcjxUeXBlSWRzPiA9IG1lZ2FkYXRhKG1vZHVsZSwgdHlwZXMpXG5cbmV4cG9ydCBjb25zdCBQbGF5ZXJJZCA9IFVpbnQ4XG4iXX0=