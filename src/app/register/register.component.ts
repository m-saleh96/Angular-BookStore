import { Component } from '@angular/core';
import { FormGroup , FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup = new FormGroup({
    'fullname' :new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    'email' :new FormControl(null , [Validators.required , Validators.email , Validators.minLength(3) , Validators.maxLength(30)]),
    'password' :new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(30)])
  })

  constructor(private authService:AuthService , private router:Router){}
  flag:boolean = false;

  getRegisterInfo(registerForm:any)
  {
    if(registerForm.valid == true){
      this.authService.register(registerForm.value).subscribe((data)=>{
        if (data.status == 'success') {
          console.log(data);
        }
        else{
          this.flag = true
          console.log(data);
          
        }

      })
    } else{
      this.flag = true
    }
    
  }

}
