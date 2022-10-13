import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthRouteGuard implements CanActivate {

    constructor(private authService: AuthService, private route: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {

        const userData = this.authService.userInfo.getValue();

        if (userData && userData.userId) {
            if (state.url.indexOf('login') != -1) {
                this.route.navigate(['./dashboard']);
                return true;
            } else {
                return true;
            }
        } else {
            if (state.url.indexOf('dashboard') > -1) {
                this.route.navigate(['./login']);
                return false
            } else {
                return true
            }
        }
    }
}