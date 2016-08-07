/// <reference path="../store-logged-in-state/store-logged-in-state.serv.ts" />
/// <reference path="../helper/helper.serv.ts" />
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { HelperService} from '../helper/helper.serv';
import { StoreLoggedInStateService} from '../store-logged-in-state/store-logged-in-state.serv';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (StoreLoggedInStateService.getInstance().loggedIn) { return true; }

        // Store the attempted URL for redirecting
        StoreLoggedInStateService.getInstance().redirectUrl = state.url;

        // Set our navigation extras object
        // that contains our global query params and fragment
        //let navigationExtras = {
        //    queryParams: { 'session_id': sessionId },
        //    fragment: 'anchor'
        //};

        // Navigate to the login page with extras
        //navigate to the home page with a parameter to open the LoginService modal
        HelperService.sendToLogin(this.router);
        //this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}
