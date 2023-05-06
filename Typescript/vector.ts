
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

public print():number[]{
    return this.elements
}

public add(v1:number[]):number[]{
    let suma :number[]= [];
   
        for (let i = 0; i < v1.length; i++){
            suma[i]= v1[i] + this.elements[i];
        } 
    return suma;
};

public subs(v1:number[]):number[]{
    let resta:number[] = [];
    for (let i=0; i<v1.length; i++){
        resta[i]= v1[i]- this.elements[i];
    }
    return resta;
};

public mult(v1:number[]):number[]{
    let mult:number[] = [];
    for (let i=0; i<v1.length; i++){
        mult[i]= v1[i]* this.elements[i];
    }
    return mult;
};

public multNumber(n:number):number[]{
    let multNumber:number[]= [];
    for (let i=0; i<this.elements.length; i++){
        multNumber.push(n*this.elements[i]);
    }
    return multNumber;
};

}








// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n