﻿/// <reference path="../store-logged-in-state/store-logged-in-state.serv.ts" />
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {RequestOptionsArgs, Request, Response} from '@angular/http';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
import {HelperService} from '../../services/helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';
import { CommunicationService } from '../../services/communication/communication.serv';
import { StoreLoggedInStateService } from '../store-logged-in-state/store-logged-in-state.serv';


@Injectable()
export class LoginService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor LoginService');
    }

    storeToken(response: Response, userName: string) {
        var storeTokenThis = this;
        var t: ITokenresponse = <ITokenresponse>response.json()
        HelperService.saveTokenToStorage(userName, t);

        var redirect: string;
        if (StoreLoggedInStateService.getInstance().redirectUrl !== '') {
            redirect = StoreLoggedInStateService.getInstance().redirectUrl;
        } else {
            redirect = '/organisation-admin-master';
        }

        // Redirect the user
        this.router.navigate([redirect]);
        CommunicationService.getInstance().loggedoutCommunication(true);
        StoreLoggedInStateService.getInstance().loggedIn = true;
    };

    redirectUrl: string = '';

    logError() {
        window.alert('Error logging in');
    };

    logout = () => {
        HelperService.deleteTokenFromStorage();
        CommunicationService.getInstance().loggedoutCommunication(false);
        this.router.navigate(['home-page', 'login']);
        StoreLoggedInStateService.getInstance().loggedIn = false;
    }

    authenticate(username: string, password: string) {
        var authenticateThis = this;
        var usernamePlusPassword = "grant_type=password&username=" + username + "&password=" + password;
        var headers = new Headers();
        var args: RequestOptionsArgs = {};
        args.headers = headers;
        var serviceBase = HelperService.getServiceBase();
        this.http.post(serviceBase + 'token', usernamePlusPassword, args)
            .subscribe(
            response => this.storeToken(response, username),
            this.logError,
            () => authenticationComplete()
            );
        function authenticationComplete() {
            console.log('Authentication Complete');
        }
    }
}