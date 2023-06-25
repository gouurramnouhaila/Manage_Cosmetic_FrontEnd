import { Component } from '@angular/core';
import {CategoryService} from "../../service/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: number = 0;
  category: any = {};
  isSaved: boolean = false;
  categories: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCategory(this.id);

  }

  getCategory(id: number) {
    this.categoryService.getCategory(id)
      .subscribe(
        async (response: any) => {
          this.category = response;
          },
        error => {
          console.log(error);
        }
      );
  }

  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(
        response => {
          console.log(response);
          this.isSaved = true;
          alert('The category is modified with success.');
          this.router.navigate(['/categories']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
