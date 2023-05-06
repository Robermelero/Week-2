import { Person } from "./person";
import { Contacts } from "./contacts";

export class Book
{
//////////////////// ATTRIBUTES ////////////////

private title: string;
private nPages: number;
private isbn: string;
private author: string;
private editorial: string;


//////////////////// CONSTRUCTOR //////////////

constructor (title:string, author :string, editorial: string){

    this.title = title;
    this.nPages ;
    this.isbn ;
    this.author = author;
    this.editorial = editorial;
}
////////////////// METODS /////////////////////

public setTitle( title:string ):string{
    return  this.title = title
  };
  
  public getTitle():string {
      return this.title
  };

  public setNpages(nPages:number):number{
    return  this.nPages = nPages
  };
  
  public getNpages():number {
      return this.nPages
  };

  public setIsbn(isbn:string):string{
    return  this.isbn = isbn
  };
  
  public getIsbn():string {
      return this.isbn
  };

  public setAuthor(author:string):string{
    return  this.author = author
  };
  
  public getAuthor():string {
      return this.author
  };

  public setEditorial(editorial:string):string{
    return  this.editorial = editorial
  };
  
  public getEditorial():string {
      return this.editorial
  };

  public toString(): string {
    return `Title - ${this.title}${"\n"}Number of Pages - ${this.nPages}${"\n"}ISBN - ${this.isbn}${"\n"}Author - ${this.author}${"\n"}Editorial - ${this.editorial}`;
  }

};


