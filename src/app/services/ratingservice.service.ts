import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingserviceService {

  constructor(private http:HttpClient) { }
  getrating(_id:number) {
    return this.http.get('http://localhost:5000/rating/'+_id); 
  }
}
