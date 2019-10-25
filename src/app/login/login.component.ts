import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailError : boolean = false;

  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit() {
    
  }

  onSubmit(form : NgForm) {
    if (form.value.email.indexOf('@eng.it') !== -1 ) {
      this.authService.login();
      form.reset();
      this.router.navigate(['home-page']);
      this.emailError = false;
    } else {
      this.emailError = true;
      form.reset();
    }
  }

}
