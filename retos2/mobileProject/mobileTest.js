"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobile1 = new mobile_1.Mobile("Iphone", "Apple", "Iphone13", "spacial grey", 1200);
var mobile2 = new mobile_1.Mobile("Note", "Mi", "Readme", "green", 720);
var mobile3 = new mobile_1.Mobile("Samsung", "Samsung", "s21", "blue", 1050);
var mobile4 = new mobile_1.Mobile("Nokia", "Nokia", "3300", "white", 299);
// console.log(mobile1);
// mobile1.setName("Samsung");
// mobile1.setTrademark("Samsung");
// mobile1.setModel("S20");
// mobile1.setColor("Black");
// mobile1.setPrice(1100);
// console.log(mobile1.getName());
// console.log(mobile1.getTrademarkt());
// console.log(mobile1.getModel());
// console.log(mobile1.getColor());
// console.log(mobile1.getPrice());
var myMobile = [mobile1, mobile2, mobile3, mobile4];
for (var i = 0; i < myMobile.length; i++)
    ;
// console.log (myMobile[i].toPrint(myMobile))
