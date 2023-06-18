import { Component } from '@angular/core';
import {ProductService} from "../service/product/product.service";
import {CategoryService} from "../service/category/category.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    categoryId: 0,
    provider: ''
  };

  submitted = false;
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (response: any) => {
        this.categories = response._embedded.categories;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      quantity: this.product.quantity,
      categoryId: this.product.categoryId,
      provider: this.product.provider
    };

    this.productService.createProduct(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      categoryId: 0,
      provider: ''
    };
  }
}

