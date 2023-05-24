import { Component  } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books:any[]=[]
  constructor(private bookService:BooksService){}
  ngOnInit(){
    this.bookService.getBook().subscribe((res:any)=>this.books = res)
  }
}
