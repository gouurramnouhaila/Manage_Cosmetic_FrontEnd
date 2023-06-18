import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: 'products', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
