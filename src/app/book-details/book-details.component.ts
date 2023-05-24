import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  id!:number;
  book!:any;

  constructor(private route:ActivatedRoute , private bookService:BooksService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id = (params['id'])
    console.log(this.id);
    });

    this.bookService.getBookDetails(this.id).subscribe((res:any)=>this.book=res)
    
    
  }
  

  
}
