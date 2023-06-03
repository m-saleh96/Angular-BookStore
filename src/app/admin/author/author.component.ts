import { Component } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  Author!:any
  token!:any
  constructor(private authorservice: AuthorsService) { }
  ngOnInit() {
    this.authorservice.getAuthors().subscribe((res: any) => {
      this.Author = res.data.authors
      console.log(res.data.authors);
    });}


    deleteAuthor(_id: string) {
      this.authorservice.deleteAuthor(_id,).subscribe((res:any) => {
        if (res.success) {
          this.authorservice.getAuthors();
        }
      });
    }
  }








//  constructor(private author:AuthorsService) { }

//  ngOnInit() {
//  this.author.getAuthors().subscribe(

//res=>{
//      console.log(res)
//      this.Author=res
//      // this.Auther=this.Auther[0]
//      // this.Auther=this.Auther[1]
//      // console.log(this.x.length)
//      console.log(typeof( this.Author))


// })


//  }

//  delete(id: string) {
//    this.author.deletauthor(id).subscribe(() => {
//      this.Author = this.Author.filter((author: any) => author._id !== id);
//    });
//  }


  // console.log(x)

//}
