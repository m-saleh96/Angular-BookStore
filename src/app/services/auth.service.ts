import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUsers = new BehaviorSubject(null);

  constructor(private http:HttpClient , private router:Router) { }

  register(registerFormValue:any):Observable<any>
  {
    return this.http.post('http://127.0.0.1:5000/auth/register' , registerFormValue)
  }

}
