
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

public printName():string {
return this.name
}

public  yearOfBirth(currentYear: number):number{
    return currentYear - this.age
}

public setAddress(adress:string):string{
  return  this.address = adress
}

public getAddress():string {
    return this.address
}
}