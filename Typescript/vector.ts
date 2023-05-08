
export class Vector
{
///////////////// ATTRIBUTE /////////////////

private elements: number[];


///////////////  CONTRUCTOR /////////////////

constructor (n:number, k:number){

    this.elements = []
     for( let i=0; i<n; i++)  {
    this.elements.push(Math.floor(Math.random() * k));    
}}

//////////////// METODS ////////////////

public print(){
    console.log(this.elements)
}

public add(v1:Vector):Vector{
    let suma :Vector = new Vector (this.elements.length,0);
   
    for (let i = 0; i < this.elements.length; i++){
            suma.elements[i]= v1.elements[i] + this.elements[i];
        } 
    return suma;
};

public subs(v1:Vector):Vector{
    let resta:Vector = new Vector (this.elements.length,0);
    for (let i = 0; i < this.elements.length; i++){
        resta.elements[i]= v1.elements[i]- this.elements[i];
    }
    return resta;
};

public mult(v1:Vector):Vector{
    let mult:Vector = new Vector (this.elements.length,0);
    for (let i = 0; i<this.elements.length; i++){
        mult.elements[i]= v1.elements[i]* this.elements[i];
    }
    return mult;
};

public multNumber(n:number):Vector{
    let multNumber:Vector = new Vector (this.elements.length,0);
    for (let i = 0; i < this.elements.length; i++){
        multNumber.elements[i]= (n*this.elements[i]);
    }
    return multNumber;
};

}

