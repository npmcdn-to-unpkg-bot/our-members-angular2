import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {HelperService} from '../../helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';


@Injectable()
export class ChangeOrganisationService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MemberListService');
    }

    parseResponse(res: Response) {
        return res.json();
    }

    getOrganisations(): Observable<any[]> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject<any[]>(parameters, 'api/organisations', true);
    }

    changeOrganisation(OrganisationId: number) {
        var structJustAnInt: structJustAnInt = {i: OrganisationId};
        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.postObject(structJustAnInt,  'api/organisations');
    }

}

