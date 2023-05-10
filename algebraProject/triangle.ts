import { Point } from "./point";

export class Triangle{

    /////////////// ATTRIBUTES ////////////

    vertex1 : Point;
    vertex2 : Point;
    vertex3 : Point;

    /////////////// CONSTRUCTOR //////////

    constructor (vertex1: Point, vertex2: Point, vertex3: Point){

        vertex1 = vertex1;
        vertex2 = vertex2;
        vertex3 = vertex3;
    }

    ////////////////// METODS  //////////////

public calculateLengthSide():number[]{
    let disAb: number = this.vertex1.calculateDistance(this.vertex2)
    let disBc: number = this.vertex2.calculateDistance(this.vertex3)
    let disCa: number = this.vertex3.calculateDistance(this.vertex1)
    let disVx:number[]=[disAb,disBc,disCa]
    return disVx;
    }
           
        
    
}