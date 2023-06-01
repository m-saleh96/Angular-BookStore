import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../interfaces/author';

@Component({
  selector: 'app-admin-author',
  templateUrl: './admin-author.component.html',
  styleUrls: ['./admin-author.component.css']
})
export class AdminAuthorComponent {
   author!:Author[];

  constructor(private authorservice: AuthorService) { }
  ngOnInit() {
    this.authorservice.getauthors().subscribe((res: any) => {
      this.author = res.data.authors
      console.log(res.data.authors);

    });
  }

}
