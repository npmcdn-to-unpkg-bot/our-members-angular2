import {Router} from '@angular/router';
import {Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {HelperService} from '../../services/helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';

@Injectable()
export class SidebarMenuService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MemberListService');
    }

    parseResponse(res: Response) {
        return res.json();
    }

    getAdminLoggedIn(): Observable<boolean> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject<boolean>(parameters, 'api/admin-loggedin', true);
    }
}

