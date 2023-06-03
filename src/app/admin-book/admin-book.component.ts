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
   this.authService.currentUsers.subscribe((data:any)=>this.token=data.token);
   this.authorService.getAuthors().subscribe((data:any)=>this.author=data.data.authors);
   this.categoryService.getcategories().subscribe((data:any)=>this.category=data.data.categories);
}

add(addBook:any , token:any)
  {
    if(addBook.valid == true){
      this.bookservice.addBook(addBook.value , token).subscribe((data)=>{
        if (data === 'success') {     
          this.router.navigate(['/login'])
        }
        else{
          this.flag = true       
        }
      })
    } else{
      this.flag = true
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
}
