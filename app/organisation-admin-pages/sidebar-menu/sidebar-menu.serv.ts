import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";

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

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<boolean>(parameters, 'api/admin-loggedin', true);
    }
}

