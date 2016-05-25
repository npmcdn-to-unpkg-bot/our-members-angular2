import {Injectable} from '@angular/core';
import {HttpHandlerService} from  '../services/http-handler/http-handler.serv';
import {Http} from '@angular/http';

@Injectable()
export class CountriesService {
    constructor(private http: Http) {
        console.log('constructor CountriesService');
    }

    getCountries() {






        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http);
        return httpHandlerService.getObject(parameters, 'api/countries', false);
    }
}

