import { Component, Input } from '@angular/core';
import { Category } from '../interfaces/category';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardcategory',
  templateUrl: './cardcategory.component.html',
  styleUrls: ['./cardcategory.component.css']
})
export class CardcategoryComponent {
  constructor(private _Router : Router)
  {

  }
  @Input()category!:Category;


show(){
  console.log(this.category._id)
}
}
