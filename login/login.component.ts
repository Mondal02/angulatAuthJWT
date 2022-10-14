import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../share/services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService, //Injected AuthService into the LoginComponent.
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  userlogin() {
    console.log(this.loginData);
    this.authService.userLogIn(this.loginData);
    this.route.navigate(['./dashboard'])
  }

}
