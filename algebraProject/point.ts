export class Point{

    /////////////// ATTRIBUTES ////////////
    
    private x: number;
    private y: number;
    
    ////////////// CONSTRUCTOR  ////////////
    
    constructor (x:number, y: number){
    
    this.x = x;
    this.y = y;
    
    }
    ///////////// METODS ////////////
    
    public setX(newX:number){
    this.x = newX;
    }
    public getX():number{
        return this.x;
    }
    public setY(newY:number){
        this.y = newY;
    }
    public getY():number{
        return this.y;
    }
    public toString(x:number,y:number):string{
    return "(" + x.toString + ", " + y.toString + ")";
    }
    
    public distanceToOrigin():number{
        let x = this.x -0;
    let y = this.y - 0;
    
    return Math.sqrt(x*x + y*y);
    }
    
    
    public calculateDistance(anotherPoint:Point):number{
    
        let x = this.x -anotherPoint.x;
    let y = this.y - anotherPoint.y;
    
    return Math.sqrt(x*x + y*y)
    }
    
    public calculateQuadrant():number{
    let quadrant: number = 0
        if ( this.x == 0 || this.y ==0 ){quadrant = 0}
        else if ( this.x > 0 && this.y > 0){quadrant = 1}
        else if (this.x < 0 && this.y > 0){quadrant = 2}
        else if (this.x <0 && this.y < 0){quadrant = 3}
        else if (this.x >0 && this.y < 0) {quadrant = 4} ;
    
        return quadrant;
    }
    
    public calculateNearest(points : Point[]) : Point{
        let act: number = 0
    for ( let i = 0; i<points.length; i++){
    this.calculateDistance(points[i])
    if(this.calculateDistance(points[i])<act){
        act = i
        let final = points[act];
    
        
        return final}
    }
    
    }}
    
    
    