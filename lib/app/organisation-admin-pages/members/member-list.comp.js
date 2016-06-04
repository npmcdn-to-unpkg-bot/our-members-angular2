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
/// <reference path="member-list.serv.ts" />
/// <reference path="../../helper/helper.serv.ts" />
/// <reference path="../organisation-admin-master/organisation-admin-master.comp.ts" />
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var helper_serv_1 = require('../../helper/helper.serv');
var member_list_serv_1 = require('./member-list.serv');
var main_1 = require('ag-grid-ng2/main');
//import {GridOptions} from 'ag-grid/main';
var MembersListComponent = (function () {
    function MembersListComponent(router, memberListService) {
        var _this = this;
        this.router = router;
        this.memberListService = memberListService;
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMembers = function () {
            var loadMembersThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.memberListService.getMemberList().subscribe(onGetMembersSuccess, logError);
            }
            else {
                _this.router.navigate(['Login']);
            }
            function logError(e) {
                console.log('getMembers Error');
                //loadMembersThis.getMembersSuccess = false;
            }
            function onGetMembersSuccess(data) {
                loadMembersThis.Members = data;
                loadMembersThis.gridOptions.api.setRowData(data);
                loadMembersThis.gridOptions.api.sizeColumnsToFit();
                //loadMembersThis.getMembersSuccess = true;
            }
        };
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "Last Name", field: "LastName" },
            { headerName: "First Name", field: "FirstName" },
            { headerName: "Membership Type", field: "MembershipType" },
            { headerName: "M'ship To", field: "InvoicedTo" },
            { headerName: "Owing", field: "FeesOwing" }
        ];
        this.onRowClicked = function (params) {
        };
        this.onRowDoubleClicked = function (params) {
        };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MembersListComponent.prototype.ngOnInit = function () {
        this.loadMembers();
    };
    MembersListComponent = __decorate([
        core_1.Component({
            selector: 'member-list',
            templateUrl: 'app/organisation-admin-pages/members/member-list.html',
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, main_1.AgGridNg2],
            providers: [member_list_serv_1.MemberListService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, member_list_serv_1.MemberListService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
//# sourceMappingURL=member-list.comp.js.map