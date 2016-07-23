import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {HelperService} from '../../services/helper/helper.serv';
import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';


@Injectable()
export class MemberService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MemberService');
    }

    parseResponse(res: Response) {
        return res.json();
    }

    getMember(OrganisationMemberID: number): Observable<structOrganisationMember> {

        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID', 
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject<structOrganisationMember>(parameters, 'api/member', true);
    }

    saveNewMember(Member: structOrganisationMember): Observable<Response>{
        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.postObject(Member, 'api/member');
    }


    updateMember(Member: structOrganisationMember) {
        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.putObject(Member, 'api/member');
    }
}

