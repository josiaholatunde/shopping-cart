import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl = `${environment.apiUrl}/brands`;
  constructor(private http: HttpClient) {}

  getBrands(catId?: number): Observable<Brand[]> {
    let params = new HttpParams();
    if (catId) {
      params = params.append('categoryId', catId.toString());
    }
    return this.http.get<Brand[]>(this.baseUrl, {params}).pipe();
  }
}
