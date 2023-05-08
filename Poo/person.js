



class Person{


    constructor(name,surname,height,weight)
    {
        this.name = name;
        this.surname = surname;
        this.height = height;
        this.weight = weight;
        this.yearOfTheBirth ;
        this.hobbies = [];

    }

    calImc(height,weight){
        return this.weight/(this.height*this.height)
    }

    calAge(currentYear){
        return  currentYear - this.yearOfTheBirth 
    }

    printAll(){
        console.log(`name - ${this.name},${"\n"}surname - ${this.surname},${"\n"}height - ${this.height},${"\n"}weight - ${this.weight},${"\n"}year of birth - ${this.yearOfTheBirth}`);
               
    }

    printHobbies(){
        console.log(this.hobbies);
    }


};

let person1 = new Person("Paco", "Perez", 1.70, 70);
person1.yearOfTheBirth = 2004;
person1.hobbies= ["tennis", "football", "eat"];
// console.log(person1.calImc());
person1.printAll();
// console.log(person1.calAge(2023));
person1.printHobbies();

module.exports = {Person}
