import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
books!:any[];
word!:string
  constructor(private book:BooksService) { }

  searchBooks(searchTerm: string){
    this.books = [];
    console.log(searchTerm);
    this.book.searchBooks(searchTerm).subscribe((books: any) => {
      this.books = books.data.respons;
      console.log (books.data.respons);
    });
  }
}
