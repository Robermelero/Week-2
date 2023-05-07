  
  ////////////////////////////////////////////////  RETO 2 //////////////////////////////////////////////////////
  
  const zodiac = (day:number, month:string):string => {
   let zodiacs:string = ""
    if (((day >= 23 && month == "July")&&(day <= 31 && month == "July"))||((day <= 22 && month == "August")&&(day > 0 && month == "August"))) {return zodiacs = "Leo"}
    else if (((day >= 23 && month == "August")&&(day <= 31 && month == "August"))||((day <= 22 && month == "September")&&(day > 0 && month == "September"))) {return zodiacs = "Virgo"}
    else if (((day >= 23 && month == "September")&&(day <= 30 && month == "September"))||((day <= 22 && month == "October")&&(day > 0 && month == "October"))) {return zodiacs = "Libra"}
    else if (((day >= 23 && month == "October")&&(day <= 31 && month == "October"))||((day <= 21 && month == "November")&&(day > 0 && month == "November"))) {return zodiacs = "Scorpio"}
    else if (((day >= 22 && month == "November")&&(day <= 30 && month == "November"))||((day <= 21 && month == "December")&&(day > 0 && month == "December"))) {return zodiacs = "Sagittarius"}
    else if (((day >= 22 && month == "December")&&(day <= 31 && month == "December"))||((day <= 19 && month == "January")&&(day > 0 && month == "January"))) {return zodiacs = "Capricorn"}
    else if (((day >= 20 && month == "January")&&(day <= 31 && month == "January"))||((day <= 18 && month == "February")&&(day > 0 && month == "February"))) {return zodiacs = "Aquarius"}
    else if (((day >= 19 && month == "February")&&(day <= 29 && month == "February"))||((day <= 20 && month == "March")&&(day > 0 && month == "March"))) {return zodiacs = "Pisces"}
    else if (((day >= 21 && month == "March")&&(day <= 31 && month == "March"))||((day <= 19 && month == "April")&&(day > 0 && month == "April"))) {return zodiacs = "Aries"}
    else if (((day >= 20 && month == "April")&&(day <= 30 && month == "April"))||((day <= 20 && month == "May")&&(day > 0 && month == "May"))) {return zodiacs = "Taurus"}
    else if (((day >= 21 && month == "May")&&(day <= 31 && month == "May"))||((day <= 20 && month == "June")&&(day > 0 && month == "June"))) {return zodiacs = "Gemini"}
    else if (((day >= 21 && month == "June")&&(day <= 30 && month == "June"))||((day <= 22 && month == "July")&&(day > 0 && month == "July"))) {return zodiacs = "Cancer"}
    else return "Wrong date entered";
    
};console.log(zodiac(28,"February"));


////////////////////////////////////////////////// RETO 3 ////////////////////////////////////////////////////////////

const continent = (country: string) => {
    if ((country == "Spain")||(country== "France")||(country == "Italy")||(country == "Germany")||(country == "Greece"))
    {console.log("You are in Europe")}
    else if ((country == "China")||(country== "Vietnam")||(country == "Thailand")||(country == "Japan")||(country == "Singapour"))
    {console.log("You are in Asia")}
    else if ((country == "Morocco")||(country== "Sudan")||(country == "Mongolia")||(country == "Egypt")||(country == "Nigeria"))
    {console.log("You are in Africa")}
    else if ((country == "United States")||(country== "Canada")||(country == "Argentina")||(country == "Chile")||(country == "Brazil"))
    {console.log("You are in America")}
    else if ((country == "Australia")||(country== "New Zeland")||(country == "Fiji")||(country == "Micronesia")||(country == "Salomon Islands"))
    {console.log("You are in Oceania")}
    else {console. log("You are lost")};

};
continent("Papua");

/////////////////////////////////////////////// RETO 4  /////////////////////////////////////////////////////////////////////


const functionIsEven =( number:number): string => {
    let n:string = ""
    if (number % 2 == 0){return n= "El numero es par"}
    else {return n= "El numero es impar"};
};
console.log(functionIsEven(25));