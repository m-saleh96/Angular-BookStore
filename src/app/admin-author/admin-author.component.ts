import { Component } from '@angular/core';
import { Author } from '../interfaces/author';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-author',
  templateUrl: './admin-author.component.html',
  styleUrls: ['./admin-author.component.css']
})
export class AdminAuthorComponent {
   author!:Author[];
  token!:any
  constructor(private authorservice: AuthService) { }
  ngOnInit() {
    this.authorservice.getauthors().subscribe((res: any) => {
      this.author = res.data.authors
      console.log(res.data.authors);

    });
  }
  deleteAuthor(_id: string, token: any) {
    this.authorservice.deleteAuthor(_id, token).subscribe((res:any) => {
      if (res.success) {
        this.authorservice.getauthors();
      }
    });
  }

}

