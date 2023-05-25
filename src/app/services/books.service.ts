import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBook(num:any){
    return this.http.get(`http://127.0.0.1:5000/books?pageNumber=${num}`)
  }

  getBookDetails(id:number){
    return this.http.get('http://127.0.0.1:5000/books/'+id)

  }

}
