import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: BehaviorSubject<any> = new BehaviorSubject(null); //The 'userInfo' variable to store the user info decoded from the JWT access token. It's a type defined as 'BehaviorSubject' that loads from the 'rxjs' library.

  jwtHelper = new JwtHelperService(); //The 'jwtHelper' variable defines 'JwtHelperService' type that loads from '@auth0/angular-jwt' library.

  constructor() {
    this.loadUserInfo()
  }

  loadUserInfo() {
    let userdata = this.userInfo.getValue();
    if (!userdata) {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      if (accessToken) {
        const decryptedUser = this.jwtHelper.decodeToken(accessToken);

        const data = {
          access_token: accessToken,
          refresh_token: refreshToken,
          userName: decryptedUser.username,
          userId: decryptedUser.sub,
          timeExpiration: decryptedUser.exp
        };

        this.userInfo.next(data);
      }
    }
  }


  userLogIn(userUpload: any) {
    console.log(userUpload);

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
    const refreshToken = "dummy"; //The JWT mock token assigned to a constant variable.

    localStorage.setItem('access_token', accessToken); //For a single-page application common approach to store, the token is in browser local storage.
    
    localStorage.setItem('refresh_token', refreshToken);

    const decryptedUser = this.jwtHelper.decodeToken(accessToken); //Decoding the user info from the JWT access token.

    const data = {
      access_token: accessToken,
      refresh_token: refreshToken,
      userName: decryptedUser.username,
      userId: decryptedUser.sub,
      timeExpiration: decryptedUser.exp
    }

    this.userInfo.next(data);
  }
}
