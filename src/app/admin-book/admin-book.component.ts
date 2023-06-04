import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';
import { FormGroup , FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { CategoryService } from '../services/category.service';

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
  selectedFile!: File | null;
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
     private router:Router , private authorService:AuthorsService , private categoryService:CategoryService){}

  ngOnInit(){
   this.bookservice.getbooks().subscribe((res:any)=>this.book=res.data.books);
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
      if(addBook.valid == true){
        this.bookservice.addBook(addBook.value , token).subscribe((data)=>{ 
          if (data === 'success') {     
            alert("success")
            this.activeForm = false;
            this.activeAddbutton = false
          }
          else{
            this.flag = true       
          }
        })
      } else{
        this.flag = true
      }
    } else if(this.activeupdatebutton){
      if(addBook.valid == true){
        this.bookservice.updataBook(addBook.value , token , this.bookId).subscribe((data)=>{ 
          if (data === 'success') {     
            alert("success")
            this.activeForm = false;
            this.activeupdatebutton = false
          }
          else{
            this.flag = true       
          }
        })
      } else{
        this.flag = true
      }
    }

    
    
  }

nextPage(){
  this.page ++
  this.bookservice.getBook(this.page).subscribe((res:any)=>{
      if((res.data.books.length==0)){
        this.page --               
      } else {
        this.book = res.data.books
      }           
  })
  
  
}
prevPage(){
  this.page --
  this.bookservice.getBook(this.page).subscribe((res:any)=>{
      if((this.page==0)){
        this.page ++ 
      } else {
        this.book = res.data.books
      }           
  })
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
  this.activeForm = true;
  this.activeupdatebutton = true;
  this.activeAddbutton = false;
}
}
