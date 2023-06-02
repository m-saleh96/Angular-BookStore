import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  
  category!:Category[];
  constructor(private categoryservice: CategoryService) { }
  ngOnInit() {
    this.categoryservice.getcategories().subscribe((res: any) => {
      this.category = res.data.categories
      console.log(res.data.categories);
    });

  

  }
  deletecategory(_id: number) {
    this.categoryservice.deletecategory(_id).subscribe((res:any) => {
      if (res.success) {
        this.categoryservice.getcategories();
      }
    });
  }
  

}
