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
var http_1 = require("@angular/http");
var http_handler_serv_1 = require("../../services/http-handler/http-handler.serv");
var SidebarMenuService = (function () {
    function SidebarMenuService(http, router) {
        this.http = http;
        this.router = router;
        console.log('constructor MemberListService');
    }
    SidebarMenuService.prototype.parseResponse = function (res) {
        return res.json();
    };
    SidebarMenuService.prototype.getAdminLoggedIn = function () {
        var parameters = [];
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/admin-loggedin', true, false);
    };
    SidebarMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], SidebarMenuService);
    return SidebarMenuService;
}());
exports.SidebarMenuService = SidebarMenuService;
//# sourceMappingURL=sidebar-menu.serv.js.map