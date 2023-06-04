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
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorComponent } from './admin/author/author.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthorUpdateComponent } from './admin/author-update/author-update.component';
import { AuthorAddComponent } from './admin/author-add/author-add.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { CategorybooksComponent } from './categorybooks/categorybooks.component';
import { AdminAuthorComponent } from './admin-author/admin-author.component';
import { ShelfComponent } from './shelf/shelf.component';

import{SearchComponent}from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'home',
    component: BookListComponent
  },
  {
    path: 'book-detail/:id',
    component: BookDetailsComponent
  },
  {
    path: 'author-detail/:id',
    component: AuthorDetailsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  // {
  //   path: 'shelf',
  //   component: ShelfComponent
  // },

  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },

  {
    path: 'admin/adminbook',
    component: AdminBookComponent
  }, 
  {
    path: 'admin/admincategory',
    component: AdminCategoryComponent
  },
  {
    path: 'admin/adminauthors',
    component: AdminAuthorComponent
  },


  {
    path: 'category/:id',
    component: CategorybooksComponent
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminPanelComponent
  },
  {
    path:'search',
    component: SearchComponent
  },


    //children: [

      {

        path: 'admin/adminauthor',
        //canActivate:[AuthGuard],
        component: AuthorComponent,

      },
      {
        path: 'update/:id',
        //canActivate:[AuthGuard],
        component:AuthorUpdateComponent,
      },
      {
        path: 'author/add',
        //canActivate:[AuthGuard],
        component:AuthorAddComponent,
      },
      {
        path: '**',
        component: NotfoundComponent
      },

    //]

  {
    path: '**',
    component: NotfoundComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
