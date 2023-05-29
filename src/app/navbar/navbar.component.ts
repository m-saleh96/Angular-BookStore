import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean = false;
  isAdmin:boolean = false;
  constructor(private authService:AuthService){

    authService.currentUsers.subscribe((data)=>{
      if (data !=null) {
        this.isLogin = true; 
      } else {
        this.isLogin = false;
      }
      if (data == true){
        this.isAdmin = true;
      }
    })


    
  }


  logOut(){
    this.authService.logOut();
  }


}
