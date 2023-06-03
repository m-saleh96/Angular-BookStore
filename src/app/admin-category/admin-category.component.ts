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
  token!:any;
  flag:boolean = false;
  constructor(private categoryservice: CategoryService) { }
  ngOnInit() {
    this.categoryservice.getcategories().subscribe((res: any) => {
      this.category = res.data.categories
      console.log(res.data.categories);
    });

  

  }
  deletecategory(_id: number,token:any) {
    this.category = this.category.filter((elem:any)=>(elem._id)!=_id)
    this.categoryservice.deletecategory(_id,token).subscribe((res:any) => {
      if (res.success) {
        this.categoryservice.getcategories();
      }
    });
  }

  
  

}
