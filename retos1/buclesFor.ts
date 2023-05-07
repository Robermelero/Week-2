

//////////////////////////////////// Reto 3 //////////////////////////////////////////////

const functionEvenNumber = (number:number):number[] =>{
    let n:number[] = [];
    for( let i=0; i<=number; i++){
    if (i%2!==0){n.push(i)}
};return n
};
console.log(functionEvenNumber(15));

/////////////////////////////////// RETO 4 //////////////////////////////////////////////



const isRainbow = (colors:string[]) => {
   
    let color: string[] = [];
    for (let i=0; i<colors.length; i++){
    
        if ((colors[i] == "red")||(colors[i] == "orange")||(colors[i] == "yellow")||(colors[i] == "green")||(colors[i] == "blue")||(colors[i] == "indigo")
        ||(colors[i] == "violet")){ color.push(colors[i] + ": This color is on rainbow")}
        else {color.push(colors[i]+ ": This color is not on rainbow")}
       }return color
        
    };console.log(isRainbow(["red","Purple","violet","black"]));



    ////////////////////////////////////////// RETO 5 ///////////////////////////////////

    let arr1:string[] = ["red","Purple","violet","black"];

    const add = (myWords:string[]):number =>{
     
        let suma:number = 0
        for (let i=0; i<myWords.length; i++){
       suma += myWords[i].length
        };
        return suma;
    };console.log(add(arr1));