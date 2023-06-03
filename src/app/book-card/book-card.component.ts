import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { RatingserviceService } from '../services/ratingservice.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
@Input() book!:any
rating!:any[];


constructor(private router:Router,private ratingservice:RatingserviceService){}

redirectToBook(id:number){
  this.router.navigate(['book-detail' , id])
}

 }




