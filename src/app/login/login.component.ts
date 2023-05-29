import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null , [Validators.email , Validators.required]),
    'password':new FormControl(null , [Validators.required])
  });


  constructor(private authService:AuthService , private router:Router){}
  errorMessage:any;
  flag:boolean =false;

  getLoginInfo(loginForm:any)
  {
    if(loginForm.valid == true){
      this.authService.login(loginForm.value).subscribe((data)=>{
        if (data.status == 'success') {
          console.log(data.data.token);
          
          this.authService.saveCurrentUser(data.data.token)
          this.router.navigate(['/home'])
        }
        else{
          this.flag = true;
          this.errorMessage = data.message;
        }
      })
    }else{
      this.flag = true;
    }
    
  }

}
