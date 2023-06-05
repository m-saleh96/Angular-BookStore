import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
userID !:number;
token!:any;
user!:any;
  constructor(private authService:AuthService ){}

  ngOnInit(){
    this.authService.currentUsers.subscribe((data:any)=>{
      if (data !=null) {
        this.token=data.token
        this.userID = data.id
      }
    })

    this.authService.getProfile(this.userID , this.token).subscribe((data:any)=>this.user=data.data.user)
  }

}
