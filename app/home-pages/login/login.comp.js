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
/// <reference path="../../services/communication/communication.serv.ts" />
/// <reference path="../../services/helper/helper.serv.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_serv_1 = require('../../services/login/login.serv');
var http_1 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(router, http, loginService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.structLogin = {
            UserName: '',
            Password: '',
        };
        this.okClicked = function () {
            _this.loginService.authenticate(_this.structLogin.UserName, _this.structLogin.Password);
        };
        console.log('constructor LoginComponent ');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.html',
            styleUrls: ['login.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [login_serv_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, login_serv_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.comp.js.map