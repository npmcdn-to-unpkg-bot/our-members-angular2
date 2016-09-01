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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_handler_serv_1 = require("../http-handler/http-handler.serv");
var http_1 = require("@angular/http");
var TeamsGroupsService = (function () {
    function TeamsGroupsService(http, router) {
        this.http = http;
        this.router = router;
        console.log('constructor TeamsGroupsService');
    }
    TeamsGroupsService.prototype.getTeamsGroups = function () {
        var parameters = [];
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/groups', true, false);
    };
    TeamsGroupsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], TeamsGroupsService);
    return TeamsGroupsService;
}());
exports.TeamsGroupsService = TeamsGroupsService;
//# sourceMappingURL=teams-groups.serv.js.map