import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category';
import { FormGroup , FormControl ,Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  
  category!:Category[];
  categoryId!:any;
  token!:any;
  flag:boolean = false;
  activeForm:boolean=false;
  activeAddbutton:boolean = false;
  activeupdatebutton:boolean = false;


  addCategory:FormGroup = new FormGroup({
    'fullname' :new FormControl(null , [Validators.required]),

  })


  constructor(private categoryservice: CategoryService , private authService:AuthService) { }

  
  ngOnInit() {
    this.categoryservice.getcategories().subscribe((res: any) => {
      this.category = res.data.categories
      console.log(res.data.categories);
    });

    this.authService.currentUsers.subscribe((data:any)=>{
      if (data !=null) {
        this.token=data.token
      }
    })
  

  }

  add(addCategory:any , token:any)
  {
    if (this.activeAddbutton) {
      if (this.addCategory.valid) {;
        const data = this.addCategory.value
        console.log(this.token);
        
        // Send the formData to the server using HttpClient
        this.categoryservice.createCategory(data , token).subscribe((data:any)=>{ 
              if (data.status === 'success') {     
                this.activeForm = false;
                this.activeAddbutton = false
                alert("success")
              }
              else{
                this.flag = true       
              }}) 
      }

    } else if(this.activeupdatebutton){
      if (this.addCategory.valid) {
      const data = this.addCategory.value
      this.categoryservice.updateCategory(data , token , this.categoryId).subscribe((data:any)=>{ 
        console.log(data);
        
        if (data.status === 'success') {  
          this.activeForm = false;
          this.activeupdatebutton = false
          alert("Updated")
        }
        else{
          this.flag = true       
        }})
      }
    }
  }



  deletecategory(_id: number,token:any) {
    this.category = this.category.filter((elem:any)=>(elem._id)!=_id)
    this.categoryservice.deletecategory(_id,token).subscribe((res:any) => {
      if (res.success) {
        this.categoryservice.getcategories();
      }
    });
  }

  addform(){
    this.activeForm = true;
    this.activeAddbutton = true;
    this.activeupdatebutton = false;
  }
  updateform(id:number){
    this.categoryId=id;
    this.activeForm = true;
    this.activeupdatebutton = true;
    this.activeAddbutton = false;
  }

  
  

}
