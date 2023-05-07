import { add } from "./buclesFor";
import { functionIsEven } from "./condicionales";


let arr1:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let arr3:string[] = ["Venezuela", "Veneno", "Voltaje"];

let array4:string[] = [...arr1,...arr2,...arr3]



let array5 = add(array4)
console.log(functionIsEven(array5));
