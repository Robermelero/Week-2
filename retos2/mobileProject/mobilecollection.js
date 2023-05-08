"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    ////////////////////////  CONSTRUCTOR  /////////////////////////
    function MobileCollection(mobile) {
        this.mobile;
        this.totalPrice;
    }
    ///////////////////////  METODS   //////////////////////////
    MobileCollection.prototype.setMobile = function (mobile) {
        return this.mobile;
    };
    ;
    MobileCollection.prototype.getMobile = function () {
        return this.mobile;
    };
    ;
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        return this.totalPrice = totalPrice;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    ;
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
;
