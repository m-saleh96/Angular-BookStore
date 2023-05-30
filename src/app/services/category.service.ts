import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getcategory() {
    return this.http.get(' http://127.0.0.1:5000/category');
  }
}
