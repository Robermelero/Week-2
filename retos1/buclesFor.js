"use strict";
//////////////////////////////////// Reto 2 //////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var functionEvenNumber = function (number) {
    var n = [];
    for (var i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            n.push(i);
        }
    }
    ;
    return n;
};
console.log(functionEvenNumber(15));
/////////////////////////////////// RETO 3  //////////////////////////////////////////
var arr32 = [10, 55, 15, 66];
var myRevert = function (myArr) {
    var m = [];
    for (var i = 0; i < myArr.length - 1; i--) {
        m.push(i);
    }
    return m;
};
console.log(myRevert(arr32));
/////////////////////////////////// RETO 4 //////////////////////////////////////////////
var isRainbow = function (colors) {
    var color = [];
    for (var i = 0; i < colors.length; i++) {
        if ((colors[i] == "red") || (colors[i] == "orange") || (colors[i] == "yellow") || (colors[i] == "green") || (colors[i] == "blue") || (colors[i] == "indigo")
            || (colors[i] == "violet")) {
            color.push(colors[i] + ": This color is on rainbow");
        }
        else {
            color.push(colors[i] + ": This color is not on rainbow");
        }
    }
    return color;
};
console.log(isRainbow(["red", "Purple", "violet", "black"]));
////////////////////////////////////////// RETO 5 ///////////////////////////////////
// let arr1:string[] = ["red","Purple","violet","black"];
var add = function (myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    ;
    return suma;
};
exports.add = add;
// };console.log(add(arr1));
