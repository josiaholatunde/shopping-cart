import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  userToLoginDto: any ={};
  formMode: string;
  formName: string;
  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
      this.authService.loginUser(this.userToLoginDto).subscribe(res => {
        this.alertifyService.success('Successfully Logged in');
        this.router.navigate(['products'], {queryParams: {categoryId: 1}});
      }, err => {
        this.alertifyService.error(err);
        console.log(err);
      });

  }

}
