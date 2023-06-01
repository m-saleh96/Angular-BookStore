import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoryComponent } from './category/category.component';
<<<<<<< HEAD
import {AuthorsComponent} from './authors/authors.component';
import {AuthorDetailsComponent} from './author-details/author-details.component';
import{ AuthorComponent}from './admin/author/author.component';
import{HomeComponent}from './admin/home/home.component';
import{AuthorUpdateComponent}from './admin/author-update/author-update.component';
import{AuthorAddComponent}from './admin/author-add/author-add.component';

=======
import { CategorybooksComponent } from './categorybooks/categorybooks.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAuthorComponent } from './admin-author/admin-author.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
>>>>>>> 9818b44705813e00c47ed7701c76e1c14591f0c9


const routes: Routes = [
  {
    path:'',
    component: BookListComponent
  },
  {
    path:'home',
    component: BookListComponent
  },
  {
    path:'book-detail/:id',
    component: BookDetailsComponent
  },
  {
    path:'author-detail/:id',
    component: AuthorDetailsComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
<<<<<<< HEAD
    path:'authors',
    component: AuthorsComponent
=======
    path:'category/:id',
    component: CategorybooksComponent
  },
  {
    path:'admin',
    canActivate:[AuthGuard],
    component: AdminPanelComponent
>>>>>>> 9818b44705813e00c47ed7701c76e1c14591f0c9
  },
//  {
//    path:'admin',
//    canActivate:[AuthGuard],
//    component: AdminPanelComponent
//  },
//  {
//    path:'**',
//    component: NotfoundComponent
//  },
  {
<<<<<<< HEAD
    path: 'admin',
    canActivate:[AuthGuard],
    component:AuthorComponent,
    children:[

      {
        path: 'author',
        canActivate:[AuthGuard],
        component: AuthorComponent,

      },
      {
        path: 'author/update/:id',
        component:AuthorUpdateComponent,
      },
      {
        path: 'author/add',
        component:AuthorAddComponent,
      },

    ]

=======
    path:'admin/admincategory',
    component: AdminCategoryComponent
  },
  {
    path:'admin/adminauthor',
    component: AdminAuthorComponent
  },
  {
    path:'admin/adminbook',
    component: AdminBookComponent
  },
  {
    path:'**',
    component: NotfoundComponent
>>>>>>> 9818b44705813e00c47ed7701c76e1c14591f0c9
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
