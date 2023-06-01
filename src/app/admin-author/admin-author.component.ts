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

  constructor(private authorservice: AuthService) { }
  ngOnInit() {
    this.authorservice.getauthors().subscribe((res: any) => {
      this.author = res.data.authors
      console.log(res.data.authors);

    });
  }

}
