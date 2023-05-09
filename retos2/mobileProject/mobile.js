"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    ////////////////////// CONSTRUCTOR  /////////////////////
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    /////////////////////   METODS  ///////////////////////////
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    ;
    Mobile.prototype.getName = function () {
        return this.name;
    };
    ;
    Mobile.prototype.setTrademark = function (setTrademark) {
        this.trademark = setTrademark;
    };
    ;
    Mobile.prototype.getTrademarkt = function () {
        return this.trademark;
    };
    ;
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    ;
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    ;
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    ;
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    ;
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    ;
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    ;
    Mobile.prototype.toPrint = function (_a) {
        return "The characteristics of the mobile ".concat(this.name, " are:").concat("\n").concat("\n", "\u2022 Name:          ").concat(this.name).concat("\n", "\u2022 Trademark:     ").concat(this.trademark).concat("\n", "\u2022 model:         ").concat(this.model).concat("\n", "\u2022 Color:         ").concat(this.color).concat("\n", "\u2022 Price:         ").concat(this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
