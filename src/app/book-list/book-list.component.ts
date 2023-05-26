import { Component  } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books:any[]=[]
  page:number =1;
  constructor(private bookService:BooksService){}
  ngOnInit(){
    this.bookService.getBook(1).subscribe((res:any)=>this.books = res.data.books)
  }

  pageNumber(number:number){
    this.page = number
    this.bookService.getBook(number).subscribe((res:any)=>this.books = res.data.books) 
  }

  nextPage(){
      this.page ++
      this.bookService.getBook(this.page).subscribe((res:any)=>{
          if((res.data.books.length==0)){
            this.page --               
          } else {
            this.books = res.data.books
          }           
      })
      
      
  }
  prevPage(){
      this.page --
      this.bookService.getBook(this.page).subscribe((res:any)=>{
          if((this.page==0)){
            this.page ++ 
          } else {
            this.books = res.data.books
          }           
      })
  }




}
