import { Book } from "./book";

let book1:Book = new Book("Sol de media noche", "Stephanie Meyer", "Alphaguara");
console.log(book1);
console.log(book1.getTitle());
book1.setNpages(560);
console.log(book1.getNpages());
book1.setIsbn("alph65445");
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());
console.log(book1.toString());