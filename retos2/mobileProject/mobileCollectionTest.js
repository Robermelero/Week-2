"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobileCollection_1 = require("./mobileCollection");
var mobile1 = new mobile_1.Mobile("Iphone", "Apple", "Iphone13", "spacial grey", 1200);
var mobile2 = new mobile_1.Mobile("Note", "Mi", "Readme", "green", 720);
var mobile3 = new mobile_1.Mobile("Samsung", "Samsung", "s21", "blue", 1050);
var mobile4 = new mobile_1.Mobile("Nokia", "Nokia", "3300", "white", 299);
var mobile5 = new mobile_1.Mobile("Iphone", "Apple", "IphoneX", "white", 1100);
var myMobile = [mobile1, mobile2, mobile3, mobile4];
var myCollection = new mobileCollection_1.MobileCollection(myMobile);
// console.log(mobile1.getPrice())
myCollection.printCollection();
