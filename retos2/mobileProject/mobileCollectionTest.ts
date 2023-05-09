import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobile1:Mobile = new Mobile("Iphone", "Apple", "Iphone13", "spacial grey", 1200 );
let mobile2:Mobile = new Mobile("Note", "Mi", "Readme", "green", 720);
let mobile3:Mobile = new Mobile("Samsung", "Samsung", "s21", "blue", 1050);
let mobile4:Mobile = new Mobile("Nokia", "Nokia", "3300", "white", 299);
let mobile5:Mobile = new Mobile("Iphone", "Apple", "IphoneX", "white", 1100 );
let myMobile = [mobile1, mobile2, mobile3, mobile4];
let myCollection = new MobileCollection (myMobile);
console.log(mobile1.getPrice())
// console.log(myMobile)