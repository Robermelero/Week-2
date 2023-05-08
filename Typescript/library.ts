import { Book } from "./book";


export class Library
{
    //////////////////// ATTRIBUTES ////////////////////////

    private books : Book[];
    private address: string;
    private manager: string;

    /////////////////// CONSTRUCTOR ///////////////////////

    constructor(books:Book[] , address: string, manager:string){

    this.books = books;
    this.address = address;
    this.manager = manager;
    }

    /////////////////// METODS //////////////////////
   

    public setAddress(address: string){
     this.address = address
    };

    public getAddress(): string{
        return this.address
    };

    public setManager(manager: string){
     this.manager = manager
    };

    public getManager(): string{
        return this.manager
    };

    public toStringg() : string{
        let view : string = ""
        for(let i = 0; i < this.books.length; i++){
            view = view +"\n"+ "Book " +[i+1]+":\n" + this.books[i].toString()+ "\n";
        }return view;
    };

    public getNumberOfBooks() {
       return this.books.length;
    };

    public findByAuthor(author: string){
     let aut:Book[] =[]   
     for( let i=0; this.books.length; i++){
     if (this.books[i].getAuthor() == author){
     aut.push(this.books[i])}
    
        
    }return aut
}}
