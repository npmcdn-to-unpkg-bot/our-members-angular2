System.register(['angular2/core', 'angular2/router', './login.serv', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_serv_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_serv_1_1) {
                login_serv_1 = login_serv_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, http) {
                    var _this = this;
                    this.router = router;
                    this.http = http;
                    this.login = {
                        UserName: '',
                        Password: '',
                    };
                    this.loginService = new login_serv_1.LoginService(this.http, this.router, this.loginfinished);
                    this.okClicked = function () {
                        var loginService = new login_serv_1.LoginService(_this.http, _this.router, _this.loginfinished);
                        _this.loginService.authenticate(_this.login.UserName, _this.login.Password);
                    };
                    console.log('constructor LoginComponent ');
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.loginfinished = function () {
                    this.router.navigate(['Entities', {}]);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'src/app/home-pages/login/login.html',
                        styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/login/login.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [login_serv_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.comp.js.map