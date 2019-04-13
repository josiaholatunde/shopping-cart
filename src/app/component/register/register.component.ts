import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm: NgForm;
  userToLoginDto: any = {};
  formMode: string;
  formName: string;
  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
      this.authService.registerUser(this.userToLoginDto).subscribe(res => {
        this.alertifyService.success('Successfully Logged in');
      }, err => this.alertifyService.error(err),
       () => this.router.navigate(['login']));

  }


}
