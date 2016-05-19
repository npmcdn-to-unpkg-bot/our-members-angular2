import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {HttpHandlerService} from  '../services/http-handler/http-handler.serv';


@Injectable()
export class CountriesService {
    constructor(private http: Http) {
        console.log('constructor CountriesService');
    }

    //parseResponse(res: Response) {
    //    return res.json();
    //}

    getCountries() {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject(parameters, 'api/countries', false );
    }
}

