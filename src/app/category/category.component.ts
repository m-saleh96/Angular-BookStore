import { Component } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories!: Category[];
  constructor(private categoryservice: CategoryService) { }
  ngOnInit(){
    return this.categoryservice.getcategory().subscribe((res:any)=>(this.categories=res.data.categories))

   }
 
  


}
