import { Console } from "console";
import { Point } from "./point";

let myPoint:Point = new Point(9,7);
let myPoint2:Point = new Point(7,7);
let myPoint3:Point = new Point(-7,13);
let myPoint4:Point = new Point(17,-9);
let myCoords:Point[] = [myPoint, myPoint2, myPoint3, myPoint4]
myPoint.setX(10);
myPoint.setY(15);
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString(7,9));
console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint.calculateQuadrant());
