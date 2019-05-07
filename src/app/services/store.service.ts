
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Merchant } from '../models/merchant';
import { Observable, Subject } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = `${environment.apiUrl}/stores`;
  private shouldCollapseNav = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  updateNav(val: boolean) {
    this.shouldCollapseNav.next(val);
  }
  navStatusListener() {
    return this.shouldCollapseNav.asObservable();
  }


  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl).pipe();
  }
  getStore(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.baseUrl}/${id}`).pipe();
  }
  deleteStore(id: number): Observable<Store> {
    return this.http.delete<Store>(`${this.baseUrl}/${id}`).pipe();
  }
  editStore(storeToEdit: any): Observable<Store> {
    return this.http.put<Store>(`${this.baseUrl}/${storeToEdit.id}`, storeToEdit).pipe();
  }
  createStore(storeToCreate: any): Observable<Store> {
    return this.http.post<Store>(this.baseUrl, storeToCreate).pipe();
  }
}
