import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getcategory() {
    return this.http.get(' http://127.0.0.1:5000/category');
  }
  //admin dashboard
  getcategories() {
    return this.http.get('http://127.0.0.1:5000/category');
  }


  createCategory(data:any , token:any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}` 
    })
    return this.http.post('http://127.0.0.1:5000/category' , data , {headers});
  }


  updateCategory(formData:any , token:any , id:any) {
      const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}` 
    })
    return this.http.put('http://127.0.0.1:5000/category/'+id , formData , {headers});
  }


  deletecategory(_id:number, token:any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })
    return this.http.delete(('http://127.0.0.1:5000/category/'+_id), {headers}); 
}

}