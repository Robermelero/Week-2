
///////////////////////////////////////////  RETO 2  /////////////////////////////////////////////


let nums:number[]= [25, 57, 33, 24];
const hasEven = (myNums:number[]) => {

let i:number = 0
let encontrado:boolean = false
while (i<myNums.length && !encontrado){
     encontrado = (myNums[i] %2 == 0)

     i++
     
};if (encontrado){return encontrado}
else (!encontrado); {return false }}

console.log(hasEven(nums));


///////////////////////////////////////////   RETO 3 //////////////////////////////////////////////

let names:string[] = ["Maria","Mirta","Miguel"]

const startWithM = (mynames: string[]) => {
    let i:number = 0;
    while(i<mynames.length){
     if(mynames[i].startsWith("M")==false) {return false}
     i++
    } return true
};console.log(startWithM(names));

