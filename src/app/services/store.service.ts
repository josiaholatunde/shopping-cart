import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Merchant } from '../models/merchant';
import { Observable } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = `${environment.apiUrl}/stores`;

  constructor(private http: HttpClient) { }


  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl).pipe();
  }
  createStore(storeToCreate: any): Observable<Store> {
    return this.http.post<Store>(this.baseUrl, storeToCreate).pipe();
  }
}
