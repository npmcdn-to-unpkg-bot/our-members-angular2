﻿import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpHandlerService} from "../http-handler/http-handler.serv";
import {Http} from "@angular/http";

@Injectable()
export class MembershipTypesService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MembershipTypesService');
    }

    getMembershipTypes() {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/membership-types', true, false);
    }
}

