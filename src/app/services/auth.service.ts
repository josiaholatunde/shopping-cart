import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { User, UserRole } from '../models/User';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.apiUrl}/auth`;
  private userLoggedInStatus = new Subject<boolean>();
  private userIsLoggedIn: boolean;
  constructor(private http: HttpClient, private router: Router) { }

  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user;
  }
  isUserAdmin() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.userRole === UserRole.Admin) {
        return true;
      }
    }
    return false;
  }
  loginUser(userToLogin: any) {
    return this.http.post<{user: User, token: string}>(`${this.baseUrl}/login`, userToLogin).pipe(
      map(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.userIsLoggedIn = true;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 24 * 3600 * 1000);
          this.userLoggedInStatus.next(true);
          return res.user;
        }
      })
    );
  }

  userLoggedInObservable() {
    return this.userLoggedInStatus.asObservable();
  }

  registerUser(userToRegister: any) {
    return this.http.post(`${this.baseUrl}/register`, userToRegister).pipe();
  }
  logOut() {
    this.userLoggedInStatus.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
