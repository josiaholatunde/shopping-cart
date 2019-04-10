import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { SubCategory } from '../models/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = `${environment.apiUrl}/categories`;
  constructor(private http: HttpClient) {
  }
  getCategory(id: number) {
    return this.http.get<Category>(`${this.baseUrl}/${id}`).pipe();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe();
  }
  getSubCategories(catId: number): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${this.baseUrl}/${catId}/subCategories`).pipe();
  }
  getThirdSubCategories(subCatId: number, catId: number): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${this.baseUrl}/${catId}/${subCatId}/thirdSubCategory`).pipe();
  }
  createCategory(categoryToCreate: any): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, categoryToCreate).pipe();
  }
  createSubCategory(categoryToCreate: any) {
    return this.http.post(`${this.baseUrl}/sub`, categoryToCreate).pipe();
  }

}
