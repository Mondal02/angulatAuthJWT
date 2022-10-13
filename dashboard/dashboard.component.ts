import { Component, OnInit } from '@angular/core';
import {AuthService } from '../share/services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = {
    username: '',
    id: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value => { // Subscribe to 'userInfo' is a behavior subject variable in AuthService
      if (value) {
        this.user.username = value.userName;
        this.user.id = value.userId
      }
    })
  }

}
