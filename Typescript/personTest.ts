
import {Person} from "./person";

let tere = new Person("Teresa", 26, "calle santo angel");
console.log(tere);
console.log(tere.printName());
console.log(tere.yearOfBirth(2023));
console.log(tere.getAddress());
tere.setAddress("calle bacalao");
console.log(tere.getAddress());

