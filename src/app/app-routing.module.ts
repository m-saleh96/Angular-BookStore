import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

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
    path:'admin',
    component: AdminPanelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
