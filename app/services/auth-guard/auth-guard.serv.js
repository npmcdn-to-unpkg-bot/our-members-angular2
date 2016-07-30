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
/// <reference path="../../home-pages/login/login.serv.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_serv_1 = require('../../home-pages/login/login.serv');
var AuthGuard = (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.loginService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.loginService.redirectUrl = state.url;
        // Create a dummy session id
        //let sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        //let navigationExtras = {
        //    queryParams: { 'session_id': sessionId },
        //    fragment: 'anchor'
        //};
        // Navigate to the login page with extras
        //navigate to the home page with a parameter to open the LoginService modal
        this.router.navigate(['/login']);
        //this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [login_serv_1.LoginService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.serv.js.map