import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `${environment.apiUrl}/products`;
  constructor(private http: HttpClient) {
  }


  getProducts(categoryId: number): Observable<Product[]> {
    let params = new HttpParams();
    if (categoryId) {
      params = params.append('categoryId', categoryId.toString());
    }
    return this.http.get<Product[]>(this.baseUrl, { observe: 'body', params}).pipe();
  }
  getProductById(productCode: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productCode}`).pipe();
  }
  addToCart(item: Product ) {
    return this.http.get<Product>(this.baseUrl).pipe();
  }
  getCartItems(): Product[] {
    return null;
  }

}
