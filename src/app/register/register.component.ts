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
    'email' :new FormControl(null , [Validators.required , Validators.email , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    'password' :new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(30)])
  })

  constructor(private authService:AuthService , private router:Router){}
  flag:boolean = false;

  getRegisterInfo(registerForm:any)
  {
    if(registerForm.valid == true){
      this.authService.register(registerForm.value).subscribe((data)=>{
        if (data.status === 'success') {     
          this.router.navigate(['/login'])
        }
        else{
          this.flag = true       
        }

      })
    } else{
      this.flag = true
    }
    
  }

}
