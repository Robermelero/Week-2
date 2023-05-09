

export class Mobile
{
    ////////////////////// ATTRIBUTES /////////////////////
  name: string;
  trademark: string;
  model: string;
  color: string;
  price: number;

  ////////////////////// CONSTRUCTOR  /////////////////////

  constructor ( name:string, trademark: string, model: string, color: string, price: number){

  this.name = name;
  this.trademark = trademark;
  this.model = model;
  this.color = color;
  this.price = price;

  }

  /////////////////////   METODS  ///////////////////////////

  public setName( newName:string ){
    this.name = newName
  };
  
  public getName():string {
      return this.name
  };

  public setTrademark(setTrademark:string){
    this.trademark =setTrademark
  };
  
  public getTrademarkt():string {
      return this.trademark
  };

  public setModel(newModel:string){
   this.model = newModel
  };
  
  public getModel():string {
      return this.model
  };

  public setColor(newColor:string){
   this.color = newColor
  };
  
  public getColor():string {
      return this.color
  };

  public setPrice(newPrice:number){
    this.price = newPrice
  };
  
  public getPrice():number {
      return this.price
  };

  public toPrint([]):string {
    return `${"\n"}The characteristics of the mobile ${this.name} are:${"\n"}${"\n"}• Name:          ${this.name}${"\n"}• Trademark:     ${this.trademark}${"\n"}• model:         ${this.model}${"\n"}• Color:         ${this.color}${"\n"}• Price:         ${this.price}${"\n"}`;
  }


}