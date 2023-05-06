import { Book } from "./book";


export class Library
{
    //////////////////// ATTRIBUTES ////////////////////////

    private books : object[];
    private address: string;
    private manager: string;

    /////////////////// CONSTRUCTOR ///////////////////////

    constructor(){

    this.books = [];
    this.address ;
    this.manager ;
    }

    /////////////////// METODS //////////////////////

    public setAddress(address: string): string{
        return this.address = address
    };

    public getAddress(): string{
        return this.address
    };

    public setManager(manager: string): string{
        return this.manager = manager
    };

    public getManager(): string{
        return this.manager
    };

    public toString () {
        for (let i=0; i<this.books.length; i++)
        
        return `${this.books[i]}:${"\n"}` + Book.toString()
    };

    public getNumberOfBooks(){
        let suma = 0
        for (let i=0; i<Book.length; i++)
        return  suma += Book[i]
    };

    // public findByAuthor(author: string): Book[]{
        
    //     return this.books.filter(byAut => this.books=== author)
    // }

};
