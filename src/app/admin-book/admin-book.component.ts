import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';
import { FormGroup , FormControl ,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { CategoryService } from '../services/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {
  
 
  book!:any[];
  author!:any[];
  category!:any[];
  page:number =1;
  token!:any;
  flag:boolean = false;
  activeForm:boolean=false;
  activeAddbutton:boolean = false;
  activeupdatebutton:boolean = false;
  bookId!:number;
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addBook:FormGroup = new FormGroup({
    'name' :new FormControl(null , [Validators.required]),
    'title' :new FormControl(null , [Validators.required ]),
    'desc' :new FormControl(null , [Validators.required ]),
    'author' :new FormControl(null , [Validators.required ]),
    'category' :new FormControl(null , [Validators.required ]),
    'photo' :new FormControl(null , [Validators.required ]),
  })
 
  constructor(private bookservice:BooksService , private authService:AuthService ,
     private router:Router , private authorService:AuthorsService , private categoryService:CategoryService , private formBuilder:FormBuilder , private http:HttpClient){}

  ngOnInit(){
   this.bookservice.getAllbooks().subscribe((res:any)=>this.book=res.data.books);
   this.authorService.getAuthors().subscribe((data:any)=>this.author=data.data.authors);
   this.categoryService.getcategories().subscribe((data:any)=>this.category=data.data.categories);
   this.authService.currentUsers.subscribe((data:any)=>{
    if (data !=null) {
      this.token=data.token
    }
  })
   
}

add(addBook:any , token:any)
  {
    if (this.activeAddbutton) {
      if (this.addBook.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('name', this.addBook.get('name')!.value);
        formData.append('title', this.addBook.get('title')!.value);
        formData.append('desc', this.addBook.get('desc')!.value);
        formData.append('author', this.addBook.get('author')!.value);
        formData.append('category', this.addBook.get('category')!.value);
        formData.append('photo', this.selectedFile);
  
        // Send the formData to the server using HttpClient
        this.bookservice.addBook(formData , token).subscribe((data:any)=>{ 
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
      if (this.addBook.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('name', this.addBook.get('name')!.value);
        formData.append('title', this.addBook.get('title')!.value);
        formData.append('desc', this.addBook.get('desc')!.value);
        formData.append('author', this.addBook.get('author')!.value);
        formData.append('category', this.addBook.get('category')!.value);
        formData.append('photo', this.selectedFile);

      this.bookservice.updataBook(formData , token , this.bookId).subscribe((data:any)=>{ 
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



deletebook(_id: number ,token:any) {
  this.book = this.book.filter((elem:any)=>(elem._id)!=_id)
  this.bookservice.deletebook(_id , token).subscribe((res:any) => {
    if (res.success) {
      this.bookservice.getbooks();
    }
  });

}

addform(){
  this.activeForm = true;
  this.activeAddbutton = true;
  this.activeupdatebutton = false;
}
updateform(id:number){
  this.bookId=id;
  console.log(this.bookId);
  
  this.activeForm = true;
  this.activeupdatebutton = true;
  this.activeAddbutton = false;
}
}
