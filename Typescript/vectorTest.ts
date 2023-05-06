import { Vector } from "./vector";

let vector = new Vector(5,5);
let vector2 = [15, 25, 37, 28, 7];

console.log(vector.print());
console.log(vector.add(vector2));
console.log(vector.subs(vector2));
console.log(vector.mult(vector2));
console.log(vector.multNumber(3));