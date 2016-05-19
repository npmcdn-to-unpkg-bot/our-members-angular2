import {Injectable} from 'angular2/core';
import {HttpHandlerService} from  '../http-handler/http-handler.serv';
import {Http} from 'angular2/http';


@Injectable()
export class UserNameService {
    constructor(private http: Http) {
        console.log('constructor UserNameService');
    }

    checkUserName(userName: string) {

        var parameter: modSharedTypes.IHttpParameter = {
            name: userName,
            value: userName
        };

        var parameters: modSharedTypes.IHttpParameter[] = [parameter];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject(parameters, 'api/username-unique', false);
    }
}



