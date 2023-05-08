///////////////////////////////////////////  RETO 2  /////////////////////////////////////////////
var nums = [25, 57, 33, 24];
var hasEven = function (myNums) {
    var i = 0;
    var encontrado = false;
    while (i < myNums.length && !encontrado) {
        encontrado = (myNums[i] % 2 == 0);
        i++;
    }
    ;
    if (encontrado) {
        return encontrado;
    }
    else
        (!encontrado);
    {
        return false;
    }
};
console.log(hasEven(nums));
///////////////////////////////////////////   RETO 3 //////////////////////////////////////////////
var names = ["Maria", "Mirta", "Miguel"];
var startWithM = function (mynames) {
    var i = 0;
    while (i < mynames.length) {
        if (mynames[i].startsWith("M") == false) {
            return false;
        }
        i++;
    }
    return true;
};
console.log(startWithM(names));
