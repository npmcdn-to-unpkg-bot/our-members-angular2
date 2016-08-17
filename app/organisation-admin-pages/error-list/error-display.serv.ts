import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";


@Injectable()
export class ErrorDisplayService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor ErrorDisplayService');
    }



    deleteError = (ErrorID: number) => {
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        var parameters: modSharedTypes.IHttpParameter[] = [];
        parameters[0] = {
            name: 'ErrorID',
            value: ErrorID.toString()
        }
        return httpHandlerService.deleteObject(parameters, 'api/error-list');
    }
}

