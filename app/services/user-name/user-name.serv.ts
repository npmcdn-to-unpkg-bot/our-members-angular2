import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpHandlerService} from "../http-handler/http-handler.serv";
import {Http} from "@angular/http";

@Injectable()
export class UserNameService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor UserNameService');
    }

    checkUserName(userName: string) {

        var parameter: modSharedTypes.IHttpParameter = {
            name: 'UserName',
            value: userName
        };

        var parameters: modSharedTypes.IHttpParameter[] = [parameter];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/usernameunique', false);
    }
}



