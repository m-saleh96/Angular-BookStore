import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books:any[]=[]
  constructor(private http:HttpClient , private bookService:BooksService){}
  ngOnInit(){
    this.bookService.getBook().subscribe((res:any)=>{
      console.log(res);
      this.books = res
      console.log(this.books);
      
      
    })
  }
}
