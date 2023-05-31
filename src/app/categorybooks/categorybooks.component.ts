import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categorybooks',
  templateUrl: './categorybooks.component.html',
  styleUrls: ['./categorybooks.component.css']
})
export class CategorybooksComponent {
  books: any[] = [];
  category!: any;
  id: string = ""
  subscriptions: Subscription[] = [];
  error: any;

  constructor(private book: BooksService, private categoryservice: CategoryService, private activerouter: ActivatedRoute) { }
  ngOnInit(
  ) {
    this.id = this.activerouter.snapshot.params['id']
    this.subscriptions.push(this.book.getbooksbycategory(this.id).subscribe(data => { 
      this.books = data.data
      console.log(data);
    },errors=>{
      this.error="error"
      console.log(this.error);
    }
      

    )
    )

  

   }
  // this.category.getcategory().subscribe((res:any)=>console.log(res))
}


