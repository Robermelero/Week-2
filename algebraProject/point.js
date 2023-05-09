"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    ////////////// CONSTRUCTOR  ////////////
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ///////////// METODS ////////////
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function (x, y) {
        return "(" + x.toString + ", " + y.toString + ")";
    };
    Point.prototype.distanceToOrigin = function () {
        var x = this.x - 0;
        var y = this.y - 0;
        return Math.sqrt(x * x + y * y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var x = this.x - anotherPoint.x;
        var y = this.y - anotherPoint.y;
        return Math.sqrt(x * x + y * y);
    };
    Point.prototype.calculateQuadrant = function () {
        var quadrant = 0;
        if (this.x == 0 || this.y == 0) {
            quadrant = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            quadrant = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            quadrant = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            quadrant = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            quadrant = 4;
        }
        ;
        return quadrant;
    };
    return Point;
}());
exports.Point = Point;
