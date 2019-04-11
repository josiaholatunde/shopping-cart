import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Merchant } from '../models/merchant';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  baseUrl = `${environment.apiUrl}/merchants`;

  constructor(private http: HttpClient) { }
  createMerchant(merchant: any) {
    return this.http.post(this.baseUrl, merchant).pipe();
  }
  editMerchant(merchant: any) {
    return this.http.put(`${this.baseUrl}/${merchant.id}`, merchant).pipe();
  }

  getMerchants(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.baseUrl).pipe();
  }
  getMerchant(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(`${this.baseUrl}/${id}`).pipe();
  }
  deleteMerchant(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe();
  }
}
