import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBook(num:any){
    return this.http.get(`http://127.0.0.1:5000/book?pageNumber=${num}`)
  }
  
  addBook(data:any){
    return this.http.post(`http://127.0.0.1:5000/book` , data)
  }

  getBookDetails(id:number){
    return this.http.get('http://127.0.0.1:5000/book/'+id)

  }
  
  getbooksbycategory(id:string): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:5000/category/'+id);
  }
  getbooks() {
    return this.http.get('http://127.0.0.1:5000/book'); 
  }

  deletebook(_id:number , token:any) {
    const headers = new HttpHeaders({
      'Authorization' : token
    })
    return this.http.delete(('http://127.0.0.1:5000/book/'+_id) , {headers}); 
  }
 

}
