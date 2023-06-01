import { Component } from '@angular/core';
import {AuthorsService} from '../services/authors.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  authorDetails:any;
  authorId : string = ''

  constructor(private _AuthorsService:AuthorsService , private router : Router ,
    private _ActivatedRoute:ActivatedRoute ){}
  ngOnInit(){
    this._ActivatedRoute.params.subscribe(() => {
      this.authorId = this._ActivatedRoute.snapshot.params['id'];
      this._AuthorsService.getAuthorById(this.authorId).subscribe((response:any)=>{
        this.authorDetails = response.data.author;
      })
    })

    this._AuthorsService.getAuthorById("").subscribe((response)=>{

    })
  }
}
