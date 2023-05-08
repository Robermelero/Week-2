
export class Person
{

////////// ATTRIBUTES //////////

public name: string;
public age: number;
private address: string;

//////// CONSTRUCTOR /////////

constructor(name:string, age:number, adress:string)
{
this.name = name;
this.age = age;
this.address = adress;
}

///////////// METODS ////////////

public printName() {
console.log(this.name)
}

public  yearOfBirth(currentYear: number):number{
    return currentYear - this.age
}

public setAddress(newAdress:string){
  this.address = newAdress
}

public getAddress():string {
    return this.address
}
};