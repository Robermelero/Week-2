import { Mobile } from "./mobile";

let mobile1:Mobile = new Mobile("Iphone", "Apple", "Iphone13", "spacial grey", 1200 );
console.log(mobile1);
mobile1.setName("Samsung");
mobile1.setTrademark("Samsung");
mobile1.setModel("S20");
mobile1.setColor("Black");
mobile1.setPrice(1100);
console.log(mobile1.getName());
console.log(mobile1.getTrademarkt());
console.log(mobile1.getModel());
console.log(mobile1.getColor());
console.log(mobile1.getPrice());