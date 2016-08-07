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
/// <reference path="../store-logged-in-state/store-logged-in-state.serv.ts" />
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var helper_serv_1 = require('../../services/helper/helper.serv');
var communication_serv_1 = require('../../services/communication/communication.serv');
var store_logged_in_state_serv_1 = require('../store-logged-in-state/store-logged-in-state.serv');
var LoginService = (function () {
    function LoginService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.redirectUrl = '';
        this.logout = function () {
            helper_serv_1.HelperService.deleteTokenFromStorage();
            communication_serv_1.CommunicationService.getInstance().loggedoutCommunication(false);
            _this.router.navigate(['home-page', 'login']);
            store_logged_in_state_serv_1.StoreLoggedInStateService.getInstance().loggedIn = false;
        };
        console.log('constructor LoginService');
    }
    LoginService.prototype.storeToken = function (response, userName) {
        var storeTokenThis = this;
        var t = response.json();
        helper_serv_1.HelperService.saveTokenToStorage(userName, t);
        var redirect;
        if (store_logged_in_state_serv_1.StoreLoggedInStateService.getInstance().redirectUrl !== '') {
            redirect = store_logged_in_state_serv_1.StoreLoggedInStateService.getInstance().redirectUrl;
        }
        else {
            redirect = '/organisation-admin-master';
        }
        // Redirect the user
        this.router.navigate([redirect]);
        communication_serv_1.CommunicationService.getInstance().loggedoutCommunication(true);
        store_logged_in_state_serv_1.StoreLoggedInStateService.getInstance().loggedIn = true;
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
        var args = {};
        args.headers = headers;
        var serviceBase = helper_serv_1.HelperService.getServiceBase();
        this.http.post(serviceBase + 'token', usernamePlusPassword, args)
            .subscribe(function (response) { return _this.storeToken(response, username); }, this.logError, function () { return authenticationComplete(); });
        function authenticationComplete() {
            console.log('Authentication Complete');
        }
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.serv.js.map