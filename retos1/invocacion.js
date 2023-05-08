"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var buclesFor_1 = require("./buclesFor");
var condicionales_1 = require("./condicionales");
var arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var arr3 = ["Venezuela", "Veneno", "Voltaje"];
var array4 = __spreadArray(__spreadArray(__spreadArray([], arr1, true), arr2, true), arr3, true);
var array5 = (0, buclesFor_1.add)(array4);
console.log((0, condicionales_1.functionIsEven)(array5));
