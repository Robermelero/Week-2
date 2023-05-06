import { Library } from "./library";
import { Book } from "./book";


let book1: Book = new Book("Las tinieblas y el alba", "Ken Follet", "plaza & Janes");
book1.setIsbn("8401022878");
book1.setNpages(936);
let book2: Book = new Book("La cara norte del corazón", " Dolores Redondo", "Booket");
book2.setIsbn("8423362221");
book2.setNpages(688);
let book3: Book = new Book("La paciente silenciosa", "Alex Michaelides", "Alfaguara Negra");
book3.setIsbn("8420435503");
book2.setNpages(384);
let book4: Book = new Book("Nunca", "Ken Follet", "plaza & Janes");
book4.setIsbn("8401027055");
book4.setNpages(840);
let booksOnLibrary = [book1,book2,book3,book4];
 let library1 = new Library([book1,book2,book3,book4],"Calle Fernandez de los rios","Lluis Lopes");
 console.log(library1.toStringg());


