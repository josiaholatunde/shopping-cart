import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl = `${environment.apiUrl}/brands`;
  private shouldShowBrandModal = new Subject<boolean>();
  private shouldShowProductModal = new Subject<boolean>();
  private shouldShowCategoryModal = new Subject<boolean>();
  private shouldShowMerchantModal = new Subject<boolean>();
  private shouldShowStoreModal = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  updateMerchantModalValue(value: boolean) {
    this.shouldShowMerchantModal.next(value);
  }
  updateBrandModalValue(value: boolean) {
    this.shouldShowBrandModal.next(value);
  }
  updateProductModalValue(value: boolean) {
    this.shouldShowProductModal.next(value);
  }
  updateCategoryModalValue(value: boolean) {
    this.shouldShowCategoryModal.next(value);
  }
  updateStoreModalValue(value: boolean) {
    this.shouldShowStoreModal.next(value);
  }

  currentBrandModalObservable() {
    return this.shouldShowBrandModal.asObservable();
  }
  currentProductModalObservable() {
    return this.shouldShowProductModal.asObservable();
  }
  currentMerchantModalObservable() {
    return this.shouldShowMerchantModal.asObservable();
  }
  currentCategoryModalObservable() {
    return this.shouldShowCategoryModal.asObservable();
  }
  currentStoreModalObservable() {
    return this.shouldShowStoreModal.asObservable();
  }

  getBrands(catId?: number): Observable<Brand[]> {
    let params = new HttpParams();
    if (catId) {
      params = params.append('categoryId', catId.toString());
    }
    return this.http.get<Brand[]>(this.baseUrl, {params}).pipe();
  }
  createBrand(brandToCreateDto: Brand) {
    return this.http.post<Brand>(this.baseUrl, brandToCreateDto).pipe();
  }
}
