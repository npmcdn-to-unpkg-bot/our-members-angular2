import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {HelperService} from '../../../services/helper/helper.serv';
import {HttpHandlerService} from  '../../../services/http-handler/http-handler.serv';


@Injectable()
export class RegisterForSeasonService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor RegisterForSeasonService');
    }

    parseResponse(res: Response) {
        return res.json();
    }

    getRegisterForSeasonData(OrganisationMemberID: number): Observable<structMemberListData> {

        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject<structMemberListData>(parameters, 'api/member/register-for-season', true);
    }
}

