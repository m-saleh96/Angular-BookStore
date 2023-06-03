import { Component } from '@angular/core';
import { ShelfService } from '../services/shelf.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent {
  shelves!: any[];
  constructor(private shelfservice: ShelfService) { }
  ngOnInit(){
    return this.shelfservice.getshelf().subscribe((res:any)=>{
    console.log(res);
    
    } 
    )
 
    // (this.shelves=res.data.shelves)/

   }
   
}
