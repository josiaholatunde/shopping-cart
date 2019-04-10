import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `${environment.apiUrl}/products`;
  cartItems: Product[];
  private productsOnClient = new BehaviorSubject<Product[]>([]);
  products: Product[];
  constructor(private http: HttpClient) {
    this.cartItems = [];
  }


  updateProducts(products: Product[]) {
    this.productsOnClient.next(products);
  }
  productsObservable() {
    return this.productsOnClient.asObservable();
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
    const {
      name,
      quantityAvailable,
      categoryId,
      brandId,
      merchantId,
      price,
      storeId,
      pickUpAvailable,
      features,
      image
    } = productToCreate;

    const productFormToCreate = new FormData();

    productFormToCreate.append('name', name);
    productFormToCreate.append('quantityAvailable', quantityAvailable);
    productFormToCreate.append('categoryId', categoryId);
    productFormToCreate.append('brandId', brandId);
    productFormToCreate.append('merchantId', merchantId);
    productFormToCreate.append('price', price);
    productFormToCreate.append('storeId', storeId);
    productFormToCreate.append('pickUpAvailable', pickUpAvailable);
    productFormToCreate.append('features', features);
    productFormToCreate.append('image', <File>image, name);

    return this.http.post<Product>(this.baseUrl, productFormToCreate).pipe(
      map(res => {
       const products = [...this.productsOnClient.getValue(), res];
       this.updateProducts(products);
        return res;
      })
    );
  }
  editProduct(productToEdit: any) {
    const {
      id,
      code,
      name,
      quantityAvailable,
      categoryId,
      brandId,
      merchantId,
      price,
      storeId,
      pickUpAvailable,
      features,
      image
    } = productToEdit;

    let productFormToEdit: FormData | Product;

    if (typeof(image) === 'object') {
      productFormToEdit = new FormData();

      productFormToEdit.append('id', id);
      productFormToEdit.append('code', code);
      productFormToEdit.append('name', name);
      productFormToEdit.append('quantityAvailable', quantityAvailable);
      productFormToEdit.append('categoryId', categoryId);
      productFormToEdit.append('brandId', brandId);
      productFormToEdit.append('merchantId', merchantId);
      productFormToEdit.append('price', price);
      productFormToEdit.append('storeId', storeId);
      productFormToEdit.append('pickUpAvailable', pickUpAvailable);
      productFormToEdit.append('features', features);
      productFormToEdit.append('image', <File>image, name);

      return this.http.put(`${this.baseUrl}/${code}/Image`, productFormToEdit).pipe();
    } else {
      productFormToEdit = {...productToEdit};
      return this.http.put(`${this.baseUrl}/${code}`, productFormToEdit).pipe();
    }
  }
  assignBrandCategory(categoryId: number, brandId: number) {
    return this.http.post<{message: string}>(`${this.baseUrl}/categories/${categoryId}/brands/${brandId}`, {}).pipe();
  }

}
