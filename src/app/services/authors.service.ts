import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private _HttpClient:HttpClient) { }

  getAuthors() {
    return this._HttpClient.get('http://localhost:5000/author');
  }
  getAuthorById(id:string) {
    return this._HttpClient.get('http://localhost:5000/author/'+id);
  }
  Newauthor(author:any){
    console.log(author)
    return this._HttpClient.post('http://localhost:5000/author',author).subscribe((res:any)=>console.log(res))

  }
  deletauthor(id:string){
    return this._HttpClient.delete('http://localhost:5000/author/'+id);
  }
  updateauthor(author: any, id: any) {
    console.log(author);
    return this._HttpClient.put('http://localhost:5000/author/' + id, author);
  }
}
