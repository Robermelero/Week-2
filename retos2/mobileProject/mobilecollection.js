"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    ////////////////////////  CONSTRUCTOR  /////////////////////////
    function MobileCollection(mobile) {
        this.mobile = mobile;
        this.totalPrice = this.getTotalPrice();
    }
    ///////////////////////  METODS   //////////////////////////
    MobileCollection.prototype.setMobile = function (newMobile) {
        this.mobile = newMobile;
    };
    ;
    MobileCollection.prototype.getMobile = function () {
        return this.mobile;
    };
    ;
    MobileCollection.prototype.setTotalPrice = function (newtotalPrice) {
        this.totalPrice = newtotalPrice;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    ;
    MobileCollection.prototype.totalPriceCalculation = function () {
        var sumTotal = 0;
        for (var i = 0; i < this.mobile.length; i++) {
            sumTotal = sumTotal + this.mobile[i].getPrice();
        }
        return sumTotal;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
;
