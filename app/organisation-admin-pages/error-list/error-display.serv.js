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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_handler_serv_1 = require('../../services/http-handler/http-handler.serv');
var ErrorDisplayService = (function () {
    function ErrorDisplayService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.deleteError = function (ErrorID) {
            var httpHandlerService = new http_handler_serv_1.HttpHandlerService(_this.http);
            var parameters = [];
            parameters[0] = {
                name: 'ErrorID',
                value: ErrorID.toString()
            };
            return httpHandlerService.deleteObject(parameters, 'api/error-list');
        };
        console.log('constructor ErrorDisplayService');
    }
    ErrorDisplayService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ErrorDisplayService);
    return ErrorDisplayService;
}());
exports.ErrorDisplayService = ErrorDisplayService;
//# sourceMappingURL=error-display.serv.js.map