import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {
 
  book!:Book[];
 
  constructor(private bookservice:BooksService){}
  ngOnInit(){
   this.bookservice.getbooks().subscribe((res:any)=>{this.book=res.data.books
  console.log(res.data.books);
});

}


deleteitem(i:number){
  this.book.splice(i,1);

}
}
