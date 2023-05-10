import { Mobile } from "./mobile";

export class MobileCollection 
{
////////////////////////// ATTRIBUTES ///////////////////////////

mobile: Mobile[];
totalPrice: number;



////////////////////////  CONSTRUCTOR  /////////////////////////

constructor(mobile:Mobile[]){

    this.mobile = mobile;
    this.totalPrice = this.getTotalPrice();
     
}
///////////////////////  METODS   //////////////////////////

public setMobile(newMobile:Mobile[]){
     this.mobile =newMobile;
  };
  
  public getMobile(){
      return this.mobile
  };

  public setTotalPrice(newtotalPrice:number){
     this.totalPrice = newtotalPrice
    }

   public getTotalPrice():number {
      return this.totalPrice
  };
  private totalPriceCalculation() {
    let sumTotal:number = 0
    for( let i = 0; i<this.mobile.length; i++){
    sumTotal = sumTotal + this.mobile[i].getPrice()
    }
  return sumTotal;
  }

  public printCollection(){
    console.log(`${"\n"}This is all my mobiles:${"\n"}`);
    for(let i = 0; i < this.mobile.length; i++){
       console.log( this.mobile[i].toPrint(this.mobile))} 
       console.log(`Price overall  : ${this.totalPriceCalculation()}`)
    
    }}
