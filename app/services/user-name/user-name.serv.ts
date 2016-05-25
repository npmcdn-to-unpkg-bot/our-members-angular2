import {Injectable} from '@angular/core';
import {HttpHandlerService} from  '../http-handler/http-handler.serv';
import {Http} from '@angular/http';

@Injectable()
export class UserNameService {
    constructor(private http: Http) {
        console.log('constructor UserNameService');
    }

    checkUserName(userName: string) {

        var parameter: modSharedTypes.IHttpParameter = {
            name: 'UserName',
            value: userName
        };

        var parameters: modSharedTypes.IHttpParameter[] = [parameter];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject(parameters, 'api/usernameunique', false);
    }
}



