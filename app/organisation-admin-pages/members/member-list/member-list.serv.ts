import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpHandlerService} from "../../../services/http-handler/http-handler.serv";


@Injectable()
export class MemberListService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MemberListService');
    }

    static parseResponse(res: Response) {
        return res.json();
    }

    //getMemberList(): Observable<any[]> {

    //    var parameters: modSharedTypes.IHttpParameter[] = [];

    //    var httpHandlerService = new HttpHandlerService(this.http);
    //    return httpHandlerService.getObject<any[]>(parameters, 'api/member-list', true);
    //}

    getMemberListData(): Observable<any> {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structMemberListData>(parameters, 'api/member-list', true, false);
    }
}

