import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    this.authService.login();
    form.reset();
    this.router.navigate(['home-page']);
  }

}
