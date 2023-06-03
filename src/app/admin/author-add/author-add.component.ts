import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent {


  Auther!: any
  rigester: FormGroup
  public hasChanges = false;

  constructor(private fb: FormBuilder, private author: AuthorsService , private activeRouter: ActivatedRoute, private router: Router, private location: Location) {
    this.rigester = fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      LastName: [null, [Validators.required, Validators.minLength(3)]],
      birthDate: [null, [Validators.required]],
      image: [null, [Validators.required]],
    })
  }

  get firstName() { return this.rigester.get('firstName'); }
  get lastName() { return this.rigester.get('LastName') }
  get biarth_date() { return this.rigester.get('birthDate') }
  get image() { return this.rigester.get('image') }
  ngOnInit() {

  }



  submitlogin(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    this.author.Newauthor(fd);
    this.location.back();

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

