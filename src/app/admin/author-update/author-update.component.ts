import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent {

  Author: any;
  rigester: FormGroup;
  public hasChanges = false;


  constructor(private fb: FormBuilder, private author: AuthorsService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) {
    this.rigester = fb.group({
      firstName: [null, [Validators.required, Validators.minLength(4)]],
      LastName: [null, [Validators.required, Validators.minLength(4)]],
      dob: [null, [Validators.required]],
      photo: [null, [Validators.required]],
      brief:[null,[Validators.required]]
    });
  }

  get firstName() {
    return this.rigester.get('firstName');
  }

  get lastName() {
    return this.rigester.get('LastName');
  }

  get birth_date() {
    return this.rigester.get('birthDate');
  }

  get photo() {
    return this.rigester.get('photo');
  }

  ngOnInit() {
    let id: string= this.activeRouter.snapshot.params['id'];
    this.author.getAuthorById(id).subscribe((res) => {
      console.log(res);
      this.Author = res;
      this.rigester.patchValue({
        firstName: this.Author.firstName,
        LastName: this.Author.LastName,
        birthDate: this.Author.birthDate,
      });
    });
  }

  submitlogin(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    if (this.rigester.value.image == null) {
      this.rigester.value.image = this.Author.image;
    }
    let id: number = this.activeRouter.snapshot.params['id'];
    this.author.updateauthor(fd, id).subscribe((res: any) => {
      this.Author = res; // Update the Auther object with the updated data
      this.rigester.patchValue({
        firstName: this.Author.firstName,
        LastName: this.Author.LastName,
        birthDate: this.Author.birthDate,
      });
      this.router.navigate(['admin/author']); // Navigate to a different route after successful update
    });
  }

  cancel() {
    if (this.hasChanges) {
      const confirmDiscardChanges = confirm('Are you sure you want to discard your changes?');
      if (!confirmDiscardChanges) {
        return;
      }
    }
    this.location.back();
  }
}
