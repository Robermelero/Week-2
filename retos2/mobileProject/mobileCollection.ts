import { Mobile } from "./mobile";

export class MobileCollection 
{
////////////////////////// ATTRIBUTES ///////////////////////////

mobile: Mobile[];
totalPrice: number;

////////////////////////  CONSTRUCTOR  /////////////////////////

constructor(mobile:Mobile[]){

    this.mobile ;
    this.totalPrice ; 
}
///////////////////////  METODS   //////////////////////////

public setMobile(mobile:Mobile){
    return  this.mobile 
  };
  
  public getMobile(){
      return this.mobile
  };

  public setTotalPrice(totalPrice:number):number{
    return this.totalPrice = totalPrice
    }

   public getTotalPrice():number {
      return this.totalPrice
  };
};

