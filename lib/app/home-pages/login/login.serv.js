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
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var helper_serv_1 = require('../../helper/helper.serv');
var LoginService = (function () {
    function LoginService(http, router, callback) {
        this.http = http;
        this.router = router;
        this.callback = callback;
        console.log('constructor LoginService');
    }
    LoginService.prototype.storeToken = function (response, userName) {
        var t = response.json();
        helper_serv_1.HelperService.saveTokenToStorage(userName, t);
        this.callback();
    };
    ;
    LoginService.prototype.logError = function () {
        window.alert('Error logging in');
    };
    ;
    LoginService.prototype.authenticate = function (username, password) {
        var _this = this;
        var authenticateThis = this;
        var usernamePlusPassword = "grant_type=password&username=" + username + "&password=" + password;
        var headers = new http_1.Headers();
        //headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'application/json');
        var args = {};
        args.headers = headers;
        var serviceBase = helper_serv_1.HelperService.getServiceBase();
        this.http
            .post(serviceBase + 'token', usernamePlusPassword, args)
            .subscribe(function (response) { return _this.storeToken(response, username); }, this.logError, function () { return authenticationComplete(); });
        function authenticationComplete() {
            console.log('Authentication Complete');
            authenticateThis.callback();
        }
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router, Function])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.serv.js.map