
let perTest = require ("./person");
let myContact = require("./contacts");

let libreros = new myContact.Contact();
let juan = new perTest.Person("Juan","Rodriguez", 73, 185);
juan.
console.log(juan);
let ivan = new perTest.Person("Ivan","Patricio",60, 182);
let luis = new perTest.Person("Luis","Gris", 69, 155);

libreros.arrayPers =[[juan, ivan, luis]];
console.log(libreros.arrayPers);
console.log(juan.calImc());
console.log(juan.printAll());
console.log(juan.calAge(2023));
console.log(juan.printHobbies());