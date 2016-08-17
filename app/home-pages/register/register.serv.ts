import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";
//import {HelperService} from '../helper/helper.service';


@Injectable()
export class RegisterService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor RegisterService');
    }
    saveNewRegister(structRegistration: structRegistration): Observable<Response> {
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(structRegistration, 'api/register');
    }
}

