import {Injectable} from '@angular/core';
import {HttpHandlerService} from  '../http-handler/http-handler.serv';
import {Http} from '@angular/http';

@Injectable()
export class MembershipTypesService {
    constructor(private http: Http) {
        console.log('constructor MembershipTypesService');
    }

    getMembershipTypes() {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject(parameters, 'api/membership-types', true);
    }
}

