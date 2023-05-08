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

public setTitle( newTitle:string ){
    this.title = newTitle
  };
  
  public getTitle():string {
      return this.title
  };

  public setNpages(newNpages:number){
    this.nPages = newNpages
  };
  
  public getNpages():number {
      return this.nPages
  };

  public setIsbn(newIsbn:string){
    this.isbn = newIsbn
  };
  
  public getIsbn():string {
      return this.isbn
  };

  public setAuthor(newAuthor:string){
    this.author = newAuthor
  };
  
  public getAuthor():string {
      return this.author
  };

  public setEditorial(newEditorial:string){
    this.editorial = newEditorial
  };
  
  public getEditorial():string {
      return this.editorial
  };

  public toString(): string {
    return `${"\n"}Title - ${this.title}${"\n"}Number of Pages - ${this.nPages}${"\n"}ISBN - ${this.isbn}${"\n"}Author - ${this.author}${"\n"}Editorial - ${this.editorial}`;
  }

};


