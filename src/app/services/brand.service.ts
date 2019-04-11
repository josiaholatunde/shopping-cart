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
  private shouldShowBrandCategoryModal = new Subject<boolean>();
  private shouldShowSubCategoryModal = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  updateMerchantModalValue(value: boolean) {
    this.shouldShowMerchantModal.next(value);
  }
  updateBrandCategoryModalValue(value: boolean) {
    this.shouldShowBrandCategoryModal.next(value);
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
  updateSubCategoryModalValue(value: boolean) {
    this.shouldShowSubCategoryModal.next(value);
  }
  updateStoreModalValue(value: boolean) {
    this.shouldShowStoreModal.next(value);
  }

  currentBrandModalObservable() {
    return this.shouldShowBrandModal.asObservable();
  }
  currentBrandCategoryModalObservable() {
    return this.shouldShowBrandCategoryModal.asObservable();
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
  currentSubCategoryModalObservable() {
    return this.shouldShowSubCategoryModal.asObservable();
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
  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.baseUrl}/all`).pipe();
  }
  getBrand(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.baseUrl}/${id}`).pipe();
  }
  deleteBrand(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe();
  }
  editBrand(brandToEdit: any): Observable<Brand> {
    return this.http.put<Brand>(`${this.baseUrl}/${brandToEdit.id}`, brandToEdit).pipe();
  }
  createBrand(brandToCreateDto: any) {
    return this.http.post<Brand>(this.baseUrl, brandToCreateDto).pipe();
  }
}
