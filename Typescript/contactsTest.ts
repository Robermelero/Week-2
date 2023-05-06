import { Contacts } from "./contacts";
import { Person } from "./person";


 let agenda= new Contacts();
let miguel = new Person("Miguel", 45, "calle Miguel Hernandez");
let patri = new Person("Patricia", 35, "calle Hermosilla");
let dani = new Person("Daniel", 32, "calle Desengaño");
let leo = new Person("Leonardo", 25, "calle Taboada");
 agenda.people = [leo,miguel,patri,dani];
 console.log(agenda.printCalendar());

