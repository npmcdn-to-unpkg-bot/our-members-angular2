import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";


@Injectable()
export class GroupsService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor GroupsService ');
    }

    parseResponse(res: Response) {
        return res.json();
    }

    getGroups(): Observable<any[]> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<any[]>(parameters, 'api/groups', true);
    }
}

