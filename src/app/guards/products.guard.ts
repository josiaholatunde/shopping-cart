import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertifyService: AlertifyService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if (this.authService.isUserLoggedIn() && this.authService.isUserAdmin()) {
      return true;
    }
    this.router.navigate(['login']);
    this.alertifyService.error('You must be logged in to access this page');
    return false;
  }

}
