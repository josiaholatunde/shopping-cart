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

  getMerchants(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.baseUrl).pipe();
  }
}
