System.register(['@angular/core', '../http-handler/http-handler.serv', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_handler_serv_1, http_1;
    var UserNameService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_handler_serv_1_1) {
                http_handler_serv_1 = http_handler_serv_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserNameService = (function () {
                function UserNameService(http) {
                    this.http = http;
                    console.log('constructor UserNameService');
                }
                UserNameService.prototype.checkUserName = function (userName) {
                    var parameter = {
                        name: 'UserName',
                        value: userName
                    };
                    var parameters = [parameter];
                    var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http);
                    return httpHandlerService.getObject(parameters, 'api/usernameunique', false);
                };
                UserNameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserNameService);
                return UserNameService;
            }());
            exports_1("UserNameService", UserNameService);
        }
    }
});
//# sourceMappingURL=user-name.serv.js.map