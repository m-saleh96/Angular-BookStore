import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
@Input() book!:any

constructor(private router:Router){}

redirectToBook(id:number){
  this.router.navigate(['book-detail' , id])
}

}
