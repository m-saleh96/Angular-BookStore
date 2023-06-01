import { Component } from '@angular/core';
import {AuthorsService} from '../services/authors.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  allAuthors : any[] =[];
constructor(private _AuthorsService:AuthorsService){}
  ngOnInit(){
    this._AuthorsService.getAuthors().subscribe((response:any)=>{
      this.allAuthors = response.data.authors;
      console.log(this.allAuthors);
    })
  }
  //redirectToAuthor(id:number){
  //  this.router.navigate(['author-detail' , id])
  //}


}
