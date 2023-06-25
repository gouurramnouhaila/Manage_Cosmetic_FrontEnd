import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from "./product/list-product/list-product.component";
import { CreateProductComponent } from "./product/create-product/create-product.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";
import { HomeComponent } from "./home/home.component";
import { ListCategoryComponent } from "./category/list-category/list-category.component";
import { CreateCategoryComponent } from "./category/create-category/create-category.component";
import {UpdateCategoryComponent} from "./category/update-category/update-category.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'categories', component: ListCategoryComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
