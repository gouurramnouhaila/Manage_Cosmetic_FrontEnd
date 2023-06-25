import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (response: any) => {
        this.categories = response._embedded.categories;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
