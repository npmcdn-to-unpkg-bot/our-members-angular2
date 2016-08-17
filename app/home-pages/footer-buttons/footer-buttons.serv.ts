import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";
import {Http} from "@angular/http";

@Injectable()
export class FooterButtonsService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor CountriesService');
    }

    getDevOrProd() {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/organisations/get-dev-or-prod', false);
    }
}

