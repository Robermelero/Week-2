"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    /////////////// CONSTRUCTOR //////////
    function Triangle(vertex1, vertex2, vertex3) {
        vertex1 = vertex1;
        vertex2 = vertex2;
        vertex3 = vertex3;
    }
    ////////////////// METODS  //////////////
    Triangle.prototype.calculateLengthSide = function () {
        var disAb = this.vertex1.calculateDistance(this.vertex2);
        var disBc = this.vertex2.calculateDistance(this.vertex3);
        var disCa = this.vertex3.calculateDistance(this.vertex1);
        var disVx = [disAb, disBc, disCa];
        return disVx;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
