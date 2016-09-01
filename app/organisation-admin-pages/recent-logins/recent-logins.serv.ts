import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";


@Injectable()
export class RecentLoginsService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor RecentLoginsService');
    }

    getRecentLogins(): Observable<any[]> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<any[]>(parameters, 'api/recent-logins', true, false);
    }
}
