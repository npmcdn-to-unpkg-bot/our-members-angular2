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
/// <reference path="../../../iblong2.d.ts" />
//import {Response} from '@angular/http';
var core_1 = require('@angular/core');
var change_organisation_serv_1 = require('./change-organisation.serv');
var helper_serv_1 = require('../../services/helper/helper.serv');
var router_deprecated_1 = require('@angular/router-deprecated');
var main_1 = require('ag-grid-ng2/main');
var ChangeOrganisationComponent = (function () {
    function ChangeOrganisationComponent(router, changeOrganisationService) {
        var _this = this;
        this.router = router;
        this.changeOrganisationService = changeOrganisationService;
        this.organisations = [];
        //////////////////////////////////////////////
        //get data
        this.loadOrganisations = function () {
            var loadOrganisationsThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.changeOrganisationService.getOrganisations().subscribe(onGetOrganisationsSuccess, logError);
            }
            else {
                _this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
            function logError(e) {
                helper_serv_1.HelperService.log('getOrganisations Error');
            }
            function onGetOrganisationsSuccess(data) {
                loadOrganisationsThis.organisations = data;
                loadOrganisationsThis.gridOptions.api.setRowData(data);
                loadOrganisationsThis.gridOptions.api.sizeColumnsToFit();
                helper_serv_1.HelperService.log('getOrganisations success');
            }
        };
        this.changeOrganisation = function (Id) {
            var changeOrganisationThis = _this, Id;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.changeOrganisationService.changeOrganisation(Id).subscribe(onChangeOrganisationSuccess, logError);
            }
            else {
                changeOrganisationThis.router.parent.navigate(['Login']);
            }
            function logError(e) {
                helper_serv_1.HelperService.log('changeOrganisation Error');
            }
            function onChangeOrganisationSuccess(data) {
                changeOrganisationThis.router.navigate(['MembersList']);
            }
        };
        //////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "Id", field: "Id", hide: true },
            { headerName: "Entity", field: "name" }
        ];
        this.onRowDoubleClicked = function (params) {
            var selectedOrganisation = params.data;
            _this.changeOrganisation(selectedOrganisation.Id);
            //this.router.navigate(['LedgerAccounts']);
        };
        this.onRowClicked = function () { };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor ChangeOrganisationComponent');
    }
    //load Organisations when page loaded
    ChangeOrganisationComponent.prototype.ngOnInit = function () {
        this.loadOrganisations();
    };
    ChangeOrganisationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'change-organisation',
            templateUrl: 'change-organisation.html',
            providers: [change_organisation_serv_1.ChangeOrganisationService],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, change_organisation_serv_1.ChangeOrganisationService])
    ], ChangeOrganisationComponent);
    return ChangeOrganisationComponent;
}());
exports.ChangeOrganisationComponent = ChangeOrganisationComponent;
//# sourceMappingURL=change-organisation.comp.js.map