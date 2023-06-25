import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response._embedded.products;
        this.loadCategoriesForProducts();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  loadCategoriesForProducts() {
    this.products.forEach((product) => {
      this.productService.getCategoryForProduct(product._links.category.href).subscribe(
        (category: any) => {
          product.category = category;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.products = this.products.filter(product => product.id !== productId);
        },
        error => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
