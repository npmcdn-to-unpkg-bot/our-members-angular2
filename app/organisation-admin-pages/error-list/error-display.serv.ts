import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {HelperService} from '../../helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';


@Injectable()
export class ErrorDisplayService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor ErrorDisplayService');
    }



    deleteError = (ErrorID: number) => {
        var httpHandlerService = new HttpHandlerService(this.http);
        var parameters: modSharedTypes.IHttpParameter[] = [];
        parameters[0] = {
            name: 'ErrorID',
            value: ErrorID.toString()
        }
        return httpHandlerService.deleteObject(parameters, 'api/error-list');
    }
}

