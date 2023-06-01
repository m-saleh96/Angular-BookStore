import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoryComponent } from './category/category.component';
import { CardcategoryComponent } from './cardcategory/cardcategory.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorComponent } from './admin/author/author.component';
import { AuthorAddComponent } from './admin/author-add/author-add.component';
import { AuthorUpdateComponent } from './admin/author-update/author-update.component';
import { HomeComponent } from './admin/home/home.component';
import { CategorybooksComponent } from './categorybooks/categorybooks.component';
import { FooterComponent } from './footer/footer.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAuthorComponent } from './admin-author/admin-author.component';
import { AdminBookComponent } from './admin-book/admin-book.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminPanelComponent,
    NotfoundComponent,
    CategoryComponent,
    CardcategoryComponent,
    AuthorsComponent,
    AuthorDetailsComponent,
    AuthorComponent,
    AuthorAddComponent,
    AuthorUpdateComponent,
    HomeComponent,
    CategorybooksComponent,
    FooterComponent,
    AdminCategoryComponent,
    //AdminAuthorComponent,
    AdminBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule , FormsModule ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
