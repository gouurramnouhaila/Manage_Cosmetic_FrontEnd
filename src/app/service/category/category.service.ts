import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCategoryByProduct(url: string): Observable<any> {
    return this.http.get(url);
  }

  createCategory(product: any): Observable<any> {
    console.log(this.http.post(this.baseUrl, product));
    return this.http.post(this.baseUrl, product);
  }

  updateCategory(id: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
