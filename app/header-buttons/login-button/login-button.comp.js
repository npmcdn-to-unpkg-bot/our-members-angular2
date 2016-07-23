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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var login_button_serv_1 = require('./login-button.serv');
var http_1 = require('@angular/http');
var helper_serv_1 = require('../../services/helper/helper.serv');
//import { CommunicationService }     from '../../services/communication/communication.serv';
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.showLoginForm = function () {
            _this.loginFormVisible = true;
        };
        this.loginFormVisible = false;
        this.loggedIn = false;
        this.login = {
            UserName: '',
            Password: '',
        };
        this.okClicked = function () {
            var okClickedThis = _this;
            var loginService = new login_button_serv_1.LoginService(_this.http, _this.router, loginfinished);
            loginService.authenticate(_this.login.UserName, _this.login.Password);
            function loginfinished() {
                okClickedThis.router.navigate(['OrganisationAdminMaster']);
                okClickedThis.loginFormVisible = false;
                okClickedThis.loggedIn = true;
                okClickedThis.loginUserName = helper_serv_1.HelperService.getUsername();
                //this.router.parent.navigate(['OrganisationAdminMaster']);
            }
        };
        //constructor(private router: Router, private http: Http, private communicationService: CommunicationService) {
        var constructorThis = this;
        console.log('constructor LoginComponent ');
        //set up a listener to wait for loggout
        //communicationService.communicationConfirmed$.subscribe(
        //    child => {
        //        alert(child);
        //    });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login-button.html',
            styleUrls: ['login-button.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [login_button_serv_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login-button.comp.js.map