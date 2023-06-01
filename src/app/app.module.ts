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
import { CategorybooksComponent } from './categorybooks/categorybooks.component';
import { FooterComponent } from './footer/footer.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';


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
    CategorybooksComponent,
    FooterComponent,
    AdminCategoryComponent
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
