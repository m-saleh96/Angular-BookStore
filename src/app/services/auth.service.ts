import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject } from 'rxjs';
import { userData } from '../userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUsers = new BehaviorSubject(null);

  constructor(private http:HttpClient , private router:Router) {

    if (localStorage.getItem('userData') != null) {
      let x:any
      x = localStorage.getItem('userData')
      x=JSON.parse(x)
      this.currentUsers.next(x);
    }
  }



  register(registerFormValue:any):Observable<any>
  {
    return this.http.post('http://127.0.0.1:5000/auth/register' , registerFormValue)
  }

  login(loginFormValue:any):Observable<any>
  {
    return this.http.post('http://127.0.0.1:5000/auth/login' , loginFormValue)
  }

  saveCurrentUser(token:any)
  {
    let user = new userData(token);
    localStorage.setItem('userData' , JSON.stringify(token))
    this.currentUsers.next(token);
  }

  logOut(){
    this.currentUsers.next(null);
    localStorage.clear() ;
    this.router.navigate(['/login'])
  }
  getauthors() {
    return this.http.get('http://127.0.0.1:5000/author');
  }
  deleteAuthor(_id:string, token : any) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })
    return this.http.delete('http://127.0.0.1:5000/author/'+_id, {headers});
  }


  getProfile(id:number ,token:any){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })
    return this.http.get('http://127.0.0.1:5000/users/'+id, {headers})
  }


}
