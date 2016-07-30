﻿//import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Http, Headers, HTTP_PROVIDERS, RequestOptionsArgs, Request, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HelperService} from '../../services/helper/helper.serv';
import 'rxjs/Rx'; //for map

@Injectable()
export class HttpHandlerService {
    constructor(private http: Http) {
        console.log('constructor HttpHandlerService');
        this.serviceBase = HelperService.getServiceBase()
    }

    serviceBase: string;

    //use http get to retrieve an object of type T
    //parameters: an array of name / value pairs
    getObject<T>(parameters: modSharedTypes.IHttpParameter[], url: string, includeToken: boolean): Observable<T> {
        var options: RequestOptionsArgs = this.getOptions(parameters, includeToken);
        var obs = this.http.get(this.serviceBase + url, options).map(res => res.json());
        return obs;
    }

    deleteObject(parameters: modSharedTypes.IHttpParameter[], url: string): Observable<Response> {
        //deleteObject<T>(parameters: modSharedTypes.IHttpParameter[], url: string): Observable < any > {
        var options: RequestOptionsArgs = this.getOptions(parameters, true);
        return this.http.delete(this.serviceBase + url, options);
    }

    //use http post to send an object 
    postObject(parameterObj: Object, url: string, includeToken: boolean = true): Observable<Response> {
        //postObject<T>(parameterObj: Object, url: string, includeToken: boolean = true): Observable < Response > {
        var options: RequestOptionsArgs = this.postOptions(includeToken);
        var s = JSON.stringify(parameterObj);
        return this.http.post(this.serviceBase + url, s, options);
    }
    //use http put to send an object 
    putObject(parameterObj: Object, url: string, includeToken: boolean = true): Observable<Response> {
        var options: RequestOptionsArgs = this.postOptions(includeToken);
        var s = JSON.stringify(parameterObj);
        return this.http.put(this.serviceBase + url, s, options);
    }


    private logError() {
        console.log('get Entities failed');

    };

    private parseResponse(res: Response) {
        return res.json();
    }

    private getHeaders(includeToken: boolean): Headers {
        var headers = new Headers();
        //get login token from storage and add headers
        var token: string;

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        if (includeToken) {
            token = HelperService.getToken();
            headers.append('Authorization', 'Bearer ' + token);
        }
        return headers;
    }


    private getParameters(parameters: modSharedTypes.IHttpParameter[]) {
        var params: URLSearchParams = new URLSearchParams(), i: number;
        for (i = 0; i < parameters.length; i++) {
            params.append(parameters[i].name, parameters[i].value);
        }
        params.append('preventCache', new Date().toString());
        return params;
    }

    private getOptions(parameters: modSharedTypes.IHttpParameter[], includeToken: boolean) {
        var options: RequestOptionsArgs = {};
        var headers = this.getHeaders(includeToken);
        var params: URLSearchParams = this.getParameters(parameters);
        options.search = params;
        options.headers = headers;
        return options;
    }

    private postOptions(includeToken: boolean) {
        var options: RequestOptionsArgs = {};
        var headers = this.getHeaders(includeToken);
        options.headers = headers;
        return options;
    }
}



