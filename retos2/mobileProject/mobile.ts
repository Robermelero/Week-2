

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

  public setName( name:string ):string{
    return  this.name = name
  };
  
  public getName():string {
      return this.name
  };

  public setTrademark(trademark:string):string{
    return  this.trademark = trademark
  };
  
  public getTrademarkt():string {
      return this.trademark
  };

  public setModel(model:string):string{
    return  this.model = model
  };
  
  public getModel():string {
      return this.model
  };

  public setColor(color:string):string{
    return  this.color = color
  };
  
  public getColor():string {
      return this.color
  };

  public setPrice(price:number):number{
    return  this.price = price
  };
  
  public getPrice():number {
      return this.price
  };


}