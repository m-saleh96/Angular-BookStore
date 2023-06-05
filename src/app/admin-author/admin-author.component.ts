import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorsService } from 'src/app/services/authors.service';
import { FormGroup , FormControl ,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-author',
  templateUrl: './admin-author.component.html',
  styleUrls: ['./admin-author.component.css']
})
export class AdminAuthorComponent {
  author!:any[];
  token!:any;
  flag:boolean = false;
  activeForm:boolean=false;
  activeAddbutton:boolean = false;
  activeupdatebutton:boolean = false;
  authorID!:number;
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addAuthor:FormGroup = new FormGroup({
    'firstName' :new FormControl(null , [Validators.required]),
    'lastName' :new FormControl(null , [Validators.required ]),
    'photo' :new FormControl(null , [Validators.required ]),
    'dob' :new FormControl(null , [Validators.required ]),
    'brief' :new FormControl(null , [Validators.required ]),
  })


  constructor(private authService:AuthService , private router:Router , private authorService:AuthorsService , private formBuilder:FormBuilder , private http:HttpClient){}

  ngOnInit() {
    this.authorService.getAuthors().subscribe((res: any) => {
      this.author = res.data.authors
    });

   this.authService.currentUsers.subscribe((data:any)=>{
    if (data !=null) {
      this.token=data.token
    }
  })

  }



  
add(addAuthor:any , token:any)
{
  console.log(this.addAuthor.value);
  if (this.activeAddbutton) {
    if (this.addAuthor.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('firstName', this.addAuthor.get('firstName')!.value);
      formData.append('lastName', this.addAuthor.get('lastName')!.value);
      formData.append('photo', this.selectedFile);
      formData.append('dob', this.addAuthor.get('dob')!.value);
      formData.append('brief', this.addAuthor.get('brief')!.value);
      
      
      // Send the formData to the server using HttpClient
      this.authorService.Newauthor(formData , this.token).subscribe((data:any)=>{ 
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
    if (this.addAuthor.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('firstName', this.addAuthor.get('firstName')!.value);
      formData.append('lastName', this.addAuthor.get('lastName')!.value);
      formData.append('photo', this.selectedFile);
      formData.append('dob', this.addAuthor.get('dob')!.value);
      formData.append('brief', this.addAuthor.get('brief')!.value);

    this.authorService.updateauthor(formData , token , this.authorID).subscribe((data:any)=>{ 
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







    deleteAuthor(_id: string) {
        this.author = this.author.filter((elem:any)=>(elem._id)!=_id)  
      this.authorService.deleteAuthor(_id, this.token).subscribe((res:any) => {
        if (res.success) {
          this.authorService.getAuthors();
        }
      });
    }

    addform(){
      this.activeForm = true;
      this.activeAddbutton = true;
      this.activeupdatebutton = false;
    }
    updateform(id:number){
      this.authorID=id;
      console.log(this.authorID);
      
      this.activeForm = true;
      this.activeupdatebutton = true;
      this.activeAddbutton = false;
    }

  }

