﻿import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";


@Injectable()
export class ChangeOrganisationService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor ChangeOrganisationService');
    }

    static parseResponse(res: Response) {
        return res.json();
    }

    getOrganisations(): Observable<any[]> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<any[]>(parameters, 'api/organisations', true, false);
    }

    changeOrganisation(OrganisationId: number) {
        var structJustAnInt: structJustAnInt = {i: OrganisationId};
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(structJustAnInt,  'api/organisations');
    }

}

