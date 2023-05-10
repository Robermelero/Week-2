import { Triangle } from "./triangle";
import { Point } from "./point";

7
let myPoint2:Point = new Point(7,7);
let myPoint3:Point = new Point(-7,13);
let myPoint4:Point = new Point(17,-9);
let triangle: Triangle= new Triangle(myPoint2, myPoint3,myPoint4);

console.log(triangle.calculateLengthSide());