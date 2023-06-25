import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {ProductService} from "./service/product/product.service";
import { CreateProductComponent } from './product/create-product/create-product.component';
import {FormsModule} from "@angular/forms";
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ListCategoryComponent,
    NavbarComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
