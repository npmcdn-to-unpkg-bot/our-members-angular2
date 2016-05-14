﻿import {Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from 'angular2/http';
//import {HelperService} from '../helper/helper.service';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';


@Injectable()
export class RegisterService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor RegisterService');
    }
    saveNewRegister(structRegistration: structRegistration): Observable<Response> {
        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.postObject(structRegistration, 'api/register');
    }
}

