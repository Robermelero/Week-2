//////////////////////////////////// Reto 3 //////////////////////////////////////////////
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
var arr1 = ["red", "Purple", "violet", "black"];
var add = function (myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    ;
    return suma;
};
console.log(add(arr1));
