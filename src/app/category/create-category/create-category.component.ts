import { Component } from '@angular/core';
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  category = {
    name: '',
    description: ''
  };

  submitted = false;

  constructor(
    private categoryService: CategoryService
  ) { }

  createCategories(): void {
    const data = {
      name: this.category.name,
      description: this.category.description
    };

    this.categoryService.createCategory(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      name: '',
      description: '',
    };
  }
}
