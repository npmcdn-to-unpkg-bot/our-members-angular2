System.register(['@angular/router-deprecated', '@angular/core', '@angular/http', '../../services/http-handler/http-handler.serv'], function(exports_1, context_1) {
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
    var router_deprecated_1, core_1, http_1, http_handler_serv_1;
    var MemberListService;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
            MemberListService = (function () {
                function MemberListService(http, router) {
                    this.http = http;
                    this.router = router;
                    console.log('constructor MemberListService');
                }
                MemberListService.prototype.parseResponse = function (res) {
                    return res.json();
                };
                MemberListService.prototype.getMemberList = function () {
                    var parameters = [];
                    var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http);
                    return httpHandlerService.getObject(parameters, 'api/member-list', true);
                };
                MemberListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router])
                ], MemberListService);
                return MemberListService;
            }());
            exports_1("MemberListService", MemberListService);
        }
    }
});
//# sourceMappingURL=member-list.serv.js.map