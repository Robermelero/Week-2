let perTest = require(`./person`);




let person2 = new perTest.Person ("Teresa", "Lamarquesa", 1.60, 45);
person2.yearOfTheBirth = 2000;
person2.hobbies= ["drink", "dance", "eat"];
console.log(person2.calImc());
console.log(person2.printAll());
console.log(person2.calAge(2023));
console.log(person2.printHobbies());