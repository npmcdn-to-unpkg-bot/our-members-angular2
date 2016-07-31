import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { LoginService } from '../login/login.serv';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.loginService.redirectUrl = state.url;

        // Create a dummy session id
        //let sessionId = 123456789;

        // Set our navigation extras object
        // that contains our global query params and fragment
        //let navigationExtras = {
        //    queryParams: { 'session_id': sessionId },
        //    fragment: 'anchor'
        //};

        // Navigate to the login page with extras
        //navigate to the home page with a parameter to open the LoginService modal
        this.router.navigate(['/login']);
        //this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}
