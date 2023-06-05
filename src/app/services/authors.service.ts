import { HttpClient , HttpHeaders  } from '@angular/common/http';
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
  Newauthor(author: any ,token:any) {
    console.log(author);
    const headers = { "Authorization": `Bearer ${token}` };
    return this._HttpClient.post('http://localhost:5000/author', author, { headers });
  }
  deleteAuthor(_id:string ,token:any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}` 
    })
    return this._HttpClient.delete('http://127.0.0.1:5000/author/'+_id , {headers});
  }

  updateauthor(author: any, token:any , id: any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}` 
    })
    return this._HttpClient.put('http://localhost:5000/author/' + id, author , {headers});
  }
}
