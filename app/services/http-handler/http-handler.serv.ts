//import {Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HelperService} from "../../services/helper/helper.serv";
import "rxjs/Rx"; //for map

@Injectable()
export class HttpHandlerService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor HttpHandlerService');
        this.serviceBase = HelperService.getServiceBase()
    }

    serviceBase: string;

    //use http get to retrieve an object of type T
    //parameters: an array of name / value pairs
    getObject<T>(parameters: modSharedTypes.IHttpParameter[], url: string, includeToken: boolean, useArrayBuffer: boolean): Observable<T> {
        if (HelperService.tokenIsValid()) {
            var options: RequestOptionsArgs = this.getOptions(parameters, includeToken, useArrayBuffer);
            // var options: RequestOptionsArgs={}
            // options.responseType=ResponseContentType.ArrayBuffer;
            //var obs = this.http.get(this.serviceBase + url, {responseType: ResponseContentType.ArrayBuffer}).map(res => res.json());
            var obs = this.http.get(this.serviceBase + url, options).map(res => res.json());
            return obs;
        } else {
            HelperService.sendToLogin(this.router)
        }
    }

    deleteObject(parameters: modSharedTypes.IHttpParameter[], url: string): Observable<Response> {
        if (HelperService.tokenIsValid()) {
            var options: RequestOptionsArgs = this.getOptions(parameters, true, false);
            return this.http.delete(this.serviceBase + url, options);
        } else {
            HelperService.sendToLogin(this.router)
        }
    }

    //use http post to send an object 
    postObject(parameterObj: Object, url: string, includeToken: boolean = true): Observable<Response> {
        if (HelperService.tokenIsValid()) {
            var options: RequestOptionsArgs = this.postOptions(includeToken);
            var s = JSON.stringify(parameterObj);
            return this.http.post(this.serviceBase + url, s, options);
        } else {
            HelperService.sendToLogin(this.router)
        }
    }
    //use http put to send an object 
    putObject(parameterObj: Object, url: string, includeToken: boolean = true): Observable<Response> {
        if (HelperService.tokenIsValid()) {
            var options: RequestOptionsArgs = this.postOptions(includeToken);
            var s = JSON.stringify(parameterObj);
            return this.http.put(this.serviceBase + url, s, options);
        } else {
            HelperService.sendToLogin(this.router)
        }
    }

    getHeaders(includeToken: boolean): Headers {
        var headers = new Headers();
        var token: string;

        //get login token from storage and add headers
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        if (includeToken) {
            token = HelperService.getToken();
            headers.append('Authorization', 'Bearer ' + token);
        }
        return headers;
    }


    getParameters(parameters: modSharedTypes.IHttpParameter[]) {
        var params: URLSearchParams = new URLSearchParams(), i: number;
        for (i = 0; i < parameters.length; i++) {
            params.append(parameters[i].name, parameters[i].value);
        }
        params.append('preventCache', new Date().toString());
        return params;
    }

    private getOptions(parameters: modSharedTypes.IHttpParameter[], includeToken: boolean, useArrayBuffer: boolean) {
        var options: RequestOptionsArgs = {};
        var headers = this.getHeaders(includeToken);
        var params: URLSearchParams = this.getParameters(parameters);
        options.search = params;
        options.headers = headers;
        options.body='';
        if (useArrayBuffer){
            options.responseType=ResponseContentType.ArrayBuffer;
        }
        return options;
    }

    private postOptions(includeToken: boolean) {
        var options: RequestOptionsArgs = {};
        var headers = this.getHeaders(includeToken);
        options.headers = headers;
        return options;
    }
}



