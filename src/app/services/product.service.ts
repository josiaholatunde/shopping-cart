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
  cartItems: Product[];
  constructor(private http: HttpClient) {
    this.cartItems = [];
  }


  getProducts(categoryId: number, brandCodes?: string, price?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (categoryId) {
      params = params.append('categoryId', categoryId.toString());
    }
    if (price) {
      params = params.append('price', price);
    }
    if (brandCodes) {
      params = params.append('brandIds', brandCodes);
    }
    return this.http.get<Product[]>(this.baseUrl, { observe: 'body', params}).pipe();
  }
  getProductById(productCode: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productCode}`).pipe();
  }
  addToCart(item: Product ) {
    this.cartItems.push(item);
  }
  cartItemExists(name: string) {
    const cartitem = this.cartItems.find(item => item.name === name);
    return !!cartitem;
  }
  getCartItems(): Product[] {
    return this.cartItems;
  }
  createProduct(productToCreate: any): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, productToCreate).pipe();
  }

}
