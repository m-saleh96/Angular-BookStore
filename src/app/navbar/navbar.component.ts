import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin!:boolean;
  isAdmin!:boolean ;
  constructor(private authService:AuthService){

    authService.currentUsers.subscribe((data:any)=>{
      if (data !=null) {
        this.isLogin = true; 
        this.isAdmin=data.isAdmin
      } else {
        this.isLogin = false;
      }
    })


    
  }


  logOut(){
    this.authService.logOut();
    this.isAdmin = false;
  }


}
