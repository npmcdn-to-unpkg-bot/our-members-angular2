System.register(['angular2/router', 'angular2/core', 'angular2/http', '../../services/http-handler/http-handler.serv'], function(exports_1, context_1) {
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
    var router_1, core_1, http_1, http_handler_serv_1;
    var RegisterService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (http_handler_serv_1_1) {
                http_handler_serv_1 = http_handler_serv_1_1;
            }],
        execute: function() {
            RegisterService = (function () {
                function RegisterService(http, router) {
                    this.http = http;
                    this.router = router;
                    console.log('constructor RegisterService');
                }
                RegisterService.prototype.saveNewRegister = function (structRegistration) {
                    var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http);
                    return httpHandlerService.postObject(structRegistration, 'api/register');
                };
                RegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], RegisterService);
                return RegisterService;
            }());
            exports_1("RegisterService", RegisterService);
        }
    }
});
//# sourceMappingURL=register.serv.js.map