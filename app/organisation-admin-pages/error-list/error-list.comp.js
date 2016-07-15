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
var core_1 = require('@angular/core');
var error_list_serv_1 = require('./error-list.serv');
var helper_serv_1 = require('../../helper/helper.serv');
var router_deprecated_1 = require('@angular/router-deprecated');
var main_1 = require('ag-grid-ng2/main');
var error_display_comp_1 = require('./error-display.comp');
var ErrorListComponent = (function () {
    function ErrorListComponent(router, errorListService) {
        var _this = this;
        this.router = router;
        this.errorListService = errorListService;
        this.errors = [];
        //////////////////////////////////////////////
        //get data
        this.loadErrors = function () {
            var loadErrorsThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.errorListService.getErrors().subscribe(onGetErrorsSuccess, logError);
            }
            else {
                _this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
            function logError(e) {
                helper_serv_1.HelperService.log('getErrors Error');
            }
            function onGetErrorsSuccess(data) {
                loadErrorsThis.errors = data;
                loadErrorsThis.gridOptions.api.setRowData(data);
                loadErrorsThis.gridOptions.api.sizeColumnsToFit();
                helper_serv_1.HelperService.log('getErrors success');
            }
        };
        this.errorList = function (Id) {
            var errorListThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.errorListService.getErrors().subscribe(onErrorListSuccess, logError);
            }
            else {
                errorListThis.router.parent.navigate(['Login']);
            }
            function logError(e) {
                helper_serv_1.HelperService.log('errorList Error');
            }
            function onErrorListSuccess(data) {
                errorListThis.router.navigate(['MembersList']);
            }
        };
        this.errorDisplayClosed = function (result) {
            if (result === helper_serv_1.HelperService.C_TRUE) {
                _this.loadErrors();
            }
            _this.showErrorList = true;
        };
        this.showErrorList = true;
        //////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "ErrorDate", field: "sErrorDate", cellRenderer: helper_serv_1.HelperService.formatDateCellWithTime },
            { headerName: "Message", field: "Message" },
            { headerName: "Stack", field: "Stack" },
            { headerName: "UserName", field: "UserName" },
            { headerName: "OrganisationName", field: "OrganisationName" }
        ];
        this.onRowDoubleClicked = function (params) {
            _this.showErrorList = false;
            var selectedError = params.data;
            _this.errorDisplayComponent.displayError(selectedError);
        };
        this.onRowClicked = function () { };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor ErrorListComponent');
    }
    //load errors when page loaded
    ErrorListComponent.prototype.ngOnInit = function () {
        this.loadErrors();
    };
    __decorate([
        core_1.ViewChild(error_display_comp_1.ErrorDisplayComponent), 
        __metadata('design:type', error_display_comp_1.ErrorDisplayComponent)
    ], ErrorListComponent.prototype, "errorDisplayComponent", void 0);
    ErrorListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'error-list',
            templateUrl: 'error-list.html',
            styleUrls: ['error-list.css'],
            providers: [error_list_serv_1.ErrorListService, error_display_comp_1.ErrorDisplayComponent],
            directives: [main_1.AgGridNg2, error_display_comp_1.ErrorDisplayComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, error_list_serv_1.ErrorListService])
    ], ErrorListComponent);
    return ErrorListComponent;
}());
exports.ErrorListComponent = ErrorListComponent;
//# sourceMappingURL=error-list.comp.js.map