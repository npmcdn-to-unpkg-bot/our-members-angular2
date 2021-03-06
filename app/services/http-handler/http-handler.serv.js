"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {Router} from '@angular/router';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var helper_serv_1 = require("../../services/helper/helper.serv");
require("rxjs/Rx"); //for map
var HttpHandlerService = (function () {
    function HttpHandlerService(http, router) {
        this.http = http;
        this.router = router;
        console.log('constructor HttpHandlerService');
        this.serviceBase = helper_serv_1.HelperService.getServiceBase();
    }
    //use http get to retrieve an object of type T
    //parameters: an array of name / value pairs
    HttpHandlerService.prototype.getObject = function (parameters, url, includeToken, useArrayBuffer) {
        if (helper_serv_1.HelperService.tokenIsValid()) {
            var options = this.getOptions(parameters, includeToken, useArrayBuffer);
            // var options: RequestOptionsArgs={}
            // options.responseType=ResponseContentType.ArrayBuffer;
            //var obs = this.http.get(this.serviceBase + url, {responseType: ResponseContentType.ArrayBuffer}).map(res => res.json());
            var obs = this.http.get(this.serviceBase + url, options).map(function (res) { return res.json(); });
            return obs;
        }
        else {
            helper_serv_1.HelperService.sendToLogin(this.router);
        }
    };
    HttpHandlerService.prototype.deleteObject = function (parameters, url) {
        if (helper_serv_1.HelperService.tokenIsValid()) {
            var options = this.getOptions(parameters, true, false);
            return this.http.delete(this.serviceBase + url, options);
        }
        else {
            helper_serv_1.HelperService.sendToLogin(this.router);
        }
    };
    //use http post to send an object 
    HttpHandlerService.prototype.postObject = function (parameterObj, url, includeToken) {
        if (includeToken === void 0) { includeToken = true; }
        if (helper_serv_1.HelperService.tokenIsValid()) {
            var options = this.postOptions(includeToken);
            var s = JSON.stringify(parameterObj);
            return this.http.post(this.serviceBase + url, s, options);
        }
        else {
            helper_serv_1.HelperService.sendToLogin(this.router);
        }
    };
    //use http put to send an object 
    HttpHandlerService.prototype.putObject = function (parameterObj, url, includeToken) {
        if (includeToken === void 0) { includeToken = true; }
        if (helper_serv_1.HelperService.tokenIsValid()) {
            var options = this.postOptions(includeToken);
            var s = JSON.stringify(parameterObj);
            return this.http.put(this.serviceBase + url, s, options);
        }
        else {
            helper_serv_1.HelperService.sendToLogin(this.router);
        }
    };
    HttpHandlerService.prototype.getHeaders = function (includeToken) {
        var headers = new http_1.Headers();
        var token;
        //get login token from storage and add headers
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        if (includeToken) {
            token = helper_serv_1.HelperService.getToken();
            headers.append('Authorization', 'Bearer ' + token);
        }
        return headers;
    };
    HttpHandlerService.prototype.getParameters = function (parameters) {
        var params = new http_1.URLSearchParams(), i;
        for (i = 0; i < parameters.length; i++) {
            params.append(parameters[i].name, parameters[i].value);
        }
        params.append('preventCache', new Date().toString());
        return params;
    };
    HttpHandlerService.prototype.getOptions = function (parameters, includeToken, useArrayBuffer) {
        var options = {};
        var headers = this.getHeaders(includeToken);
        var params = this.getParameters(parameters);
        options.search = params;
        options.headers = headers;
        options.body = '';
        if (useArrayBuffer) {
            options.responseType = http_1.ResponseContentType.ArrayBuffer;
        }
        return options;
    };
    HttpHandlerService.prototype.postOptions = function (includeToken) {
        var options = {};
        var headers = this.getHeaders(includeToken);
        options.headers = headers;
        return options;
    };
    HttpHandlerService = __decorate([
        //for map
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], HttpHandlerService);
    return HttpHandlerService;
}());
exports.HttpHandlerService = HttpHandlerService;
//# sourceMappingURL=http-handler.serv.js.map