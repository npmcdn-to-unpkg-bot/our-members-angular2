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
/// <reference path="../../services/helper/helper.serv.ts" />
var core_1 = require("@angular/core");
var recent_logins_serv_1 = require("./recent-logins.serv");
var router_1 = require("@angular/router");
var main_1 = require("ag-grid-ng2/main");
var helper_serv_1 = require("../../services/helper/helper.serv");
var RecentLoginsComponent = (function () {
    function RecentLoginsComponent(router, recentLoginsService) {
        var _this = this;
        this.router = router;
        this.recentLoginsService = recentLoginsService;
        this.recentLogins = [];
        //////////////////////////////////////////////
        //get data
        this.loadRecentLogins = function () {
            var loadRecentThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.recentLoginsService.getRecentLogins().subscribe(onGetRecentLoginsSuccess, logError);
            }
            else {
                helper_serv_1.HelperService.sendToLogin(_this.router);
            }
            function logError(e) {
                helper_serv_1.HelperService.log('getErrors Error');
            }
            function onGetRecentLoginsSuccess(data) {
                loadRecentThis.recentLogins = data;
                loadRecentThis.gridOptions.api.setRowData(data);
                loadRecentThis.gridOptions.api.sizeColumnsToFit();
                helper_serv_1.HelperService.log('getErrors success');
            }
        };
        this.loadRecentClosed = function (result) {
            if (result === helper_serv_1.HelperService.C_TRUE) {
                _this.loadRecentLogins();
            }
        };
        //////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "LoginAttemptDate", field: "sLoginAttemptDate", cellRenderer: helper_serv_1.HelperService.formatDateCellWithTime },
            { headerName: "UserName", field: "UserName" },
            { headerName: "Status", field: "Status" },
            { headerName: "OrganisationName", field: "OrganisationName" }
        ];
        this.onRowDoubleClicked = function (params) {
        };
        this.onRowClicked = function () { };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked, false);
        helper_serv_1.HelperService.log('constructor RecentLoginsComponent');
    }
    //load recentLogins when page loaded
    RecentLoginsComponent.prototype.ngOnInit = function () {
        this.loadRecentLogins();
    };
    RecentLoginsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recent-logins',
            templateUrl: 'recent-logins.html',
            providers: [recent_logins_serv_1.RecentLoginsService],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [router_1.Router, recent_logins_serv_1.RecentLoginsService])
    ], RecentLoginsComponent);
    return RecentLoginsComponent;
}());
exports.RecentLoginsComponent = RecentLoginsComponent;
//# sourceMappingURL=recent-logins.comp.js.map