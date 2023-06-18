import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from "../service/category/category.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = 0;
  product: any = {};
  isSaved: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id)
      .subscribe(
        async (response: any) => {
          this.product = response;
          const categoryResponse = await this.categoryService.getCategoryByProduct(this.product._links.category.href).toPromise();
          const category = categoryResponse as any;

          this.product.category = category;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(
        response => {
          console.log(response);
          this.isSaved = true;
          alert('Le produit a été modifié avec succès.');
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
