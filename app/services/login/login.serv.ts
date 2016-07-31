import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {RequestOptionsArgs, Request, Response} from '@angular/http';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
import {HelperService} from '../../services/helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';
import { CommunicationService } from '../../services/communication/communication.serv';


@Injectable()
export class LoginService {
    constructor(private http: Http, private router: Router) {
        //constructor(private http: Http, private router: Router, private callback: () => void) {
        console.log('constructor LoginService');
    }

    storeToken(response: Response, userName: string) {
        var storeTokenThis = this;
        var t: ITokenresponse = <ITokenresponse>response.json()
        HelperService.saveTokenToStorage(userName, t);
        this.router.navigate(['/organisation-admin-master']);
        storeTokenThis.isLoggedIn = true;
        CommunicationService.getInstance().loggedoutCommunication(true);

    };

    isLoggedIn: boolean = false;
    redirectUrl: string = '';

    logError() {
        window.alert('Error logging in');
    };

    logout = () => {
        this.isLoggedIn = false;
        HelperService.deleteTokenFromStorage();
        CommunicationService.getInstance().loggedoutCommunication(false);
        this.router.navigate(['home-page', 'login']);
    }

    authenticate(username: string, password: string) {
        var authenticateThis = this;
        var usernamePlusPassword = "grant_type=password&username=" + username + "&password=" + password;

        var headers = new Headers();


        //headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'application/json');


        var args: RequestOptionsArgs = {};
        args.headers = headers;
        var serviceBase = HelperService.getServiceBase();

        this.http
            .post(serviceBase + 'token',
            usernamePlusPassword, args)
            .subscribe(
            response => this.storeToken(response, username),
            this.logError,
            () => authenticationComplete()
            );

        function authenticationComplete() {
            console.log('Authentication Complete');
            //authenticateThis.callback();
        }
    }


}