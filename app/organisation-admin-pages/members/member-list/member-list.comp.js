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
/// <reference path="../register-for-season/register-for-season.comp.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var helper_serv_1 = require('../../../services/helper/helper.serv');
var member_list_serv_1 = require('./member-list.serv');
var member_serv_1 = require('../member/member.serv');
var member_comp_1 = require('../member/member.comp');
var register_for_season_comp_1 = require('../register-for-season/register-for-season.comp');
var main_1 = require('ag-grid-ng2/main');
var confirm_comp_1 = require('../../../utilities/confirm/confirm.comp');
var popup_comp_1 = require('../../../utilities/popup/popup.comp');
var MembersListComponent = (function () {
    function MembersListComponent(router, memberListService, memberService) {
        var _this = this;
        this.router = router;
        this.memberListService = memberListService;
        this.memberService = memberService;
        this.refreshList = function (refreshList) {
            if (refreshList === helper_serv_1.HelperService.C_TRUE) {
                _this.loadMemberListData();
            }
            _this.showMembershipList = true;
            _this.showMembershipModal = false;
        };
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMemberListData = function () {
            var loadMembersThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.memberListService.getMemberListData().subscribe(onGetMemberListSuccess, logError);
            }
            else {
                helper_serv_1.HelperService.sendToLogin(_this.router);
            }
            function logError(e) {
                console.log('getMembers Error');
                //loadMembersThis.getMembersSuccess = false;
            }
            function onGetMemberListSuccess(data) {
                loadMembersThis.Members = data.Members;
                loadMembersThis.gridOptions.api.setRowData(loadMembersThis.Members);
                loadMembersThis.gridOptions.api.sizeColumnsToFit();
                loadMembersThis.rowSelected = false;
                loadMembersThis.memberComponent.loadObjects(data.Countries, data.MembershipTypes, data.Groups, data.defaultCountryId);
            }
        };
        this.getSelectedOrganisationMemberID = function () {
            var selectedMembers = _this.gridOptions.api.getSelectedRows();
            if (selectedMembers.length === 0) {
                return -1;
            }
            else {
                return selectedMembers[0].OrganisationMemberID;
            }
        };
        this.addMember = function () {
            _this.memberComponent.addMember();
            _this.showMembershipList = false;
            _this.showMembershipModal = true;
        };
        this.editMember = function () {
            var OrganisationMemberID = _this.getSelectedOrganisationMemberID();
            _this.showMembershipList = false;
            _this.showMembershipModal = true;
            if (OrganisationMemberID === -1) {
                _this.popupComponent.showPopup('Please select  a member to edit');
            }
            else {
                _this.memberComponent.loadMember(OrganisationMemberID);
            }
        };
        this.deleteMember = function () {
            var deleteMemberThis = _this;
            var OrganisationMemberID = _this.getSelectedOrganisationMemberID();
            if (OrganisationMemberID === -1) {
                deleteMemberThis.popupComponent.showPopup('Please select  a member to edit');
            }
            else {
                deleteMemberThis.confirmComponent.showConfirm('Do you want to delete this member?', returnFunction);
            }
            function returnFunction() {
                var returnFunctionThis = deleteMemberThis;
                if (helper_serv_1.HelperService.tokenIsValid()) {
                    returnFunctionThis.memberService.testDeleteMember(OrganisationMemberID).subscribe(onTestDeleteMember, logError);
                }
                else {
                    helper_serv_1.HelperService.sendToLogin(returnFunctionThis.router);
                }
                function onTestDeleteMember(structError) {
                    if (structError.boolError) {
                        returnFunctionThis.popupComponent.showPopup(structError.ErrorMessage);
                    }
                    else {
                        returnFunctionThis.memberService.deleteMember(OrganisationMemberID).subscribe(onDeleteMember, logError);
                    }
                    function onDeleteMember() {
                        returnFunctionThis.loadMemberListData();
                    }
                }
                function logError() {
                    helper_serv_1.HelperService.log('loadMember Error');
                }
            }
        };
        this.registerMember = function () {
            var selectedMembers = _this.gridOptions.api.getSelectedRows();
            if (selectedMembers[0].isDefaultMembershipType) {
                _this.popupComponent.showPopup('You cannot register a member who is Unclassified Membership Type');
            }
            else {
                var OrganisationMemberID = _this.getSelectedOrganisationMemberID();
                if (OrganisationMemberID === -1) {
                    _this.popupComponent.showPopup('Please select  a member to edit');
                }
                else {
                    _this.registerForSeasonComponent.showForm(OrganisationMemberID);
                }
            }
        };
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "Last Name", field: "LastName" },
            { headerName: "First Name", field: "FirstName" },
            { headerName: "Membership Type", field: "MembershipType" },
            { headerName: "M'ship To", field: "sMembershipPaidTo", cellRenderer: helper_serv_1.HelperService.formatDateCell },
            { headerName: "Owing", field: "FeesOwing" }
        ];
        this.showMembershipList = true;
        this.showMembershipModal = false;
        this.rowSelected = false;
        this.onRowClicked = function (params) {
            var onRowClickedThis = _this;
            var selectedMember = params.data;
            if (selectedMember === null) {
                onRowClickedThis.rowSelected = false;
            }
            else {
                onRowClickedThis.rowSelected = true;
                onRowClickedThis.selectedMemberId = selectedMember.OrganisationMemberID;
            }
        };
        this.onRowDoubleClicked = function (params) {
            _this.showMembershipList = false;
            _this.showMembershipModal = true;
            var selectedMember = params.data;
            _this.memberComponent.loadMember(selectedMember.OrganisationMemberID);
            //this.showMemberModal = true;
        };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MembersListComponent.prototype.ngOnInit = function () {
        this.loadMemberListData();
    };
    __decorate([
        core_1.ViewChild(member_comp_1.MemberComponent), 
        __metadata('design:type', member_comp_1.MemberComponent)
    ], MembersListComponent.prototype, "memberComponent", void 0);
    __decorate([
        core_1.ViewChild(register_for_season_comp_1.RegisterForSeasonComponent), 
        __metadata('design:type', register_for_season_comp_1.RegisterForSeasonComponent)
    ], MembersListComponent.prototype, "registerForSeasonComponent", void 0);
    __decorate([
        core_1.ViewChild(confirm_comp_1.ConfirmComponent), 
        __metadata('design:type', confirm_comp_1.ConfirmComponent)
    ], MembersListComponent.prototype, "confirmComponent", void 0);
    __decorate([
        core_1.ViewChild(popup_comp_1.PopupComponent), 
        __metadata('design:type', popup_comp_1.PopupComponent)
    ], MembersListComponent.prototype, "popupComponent", void 0);
    MembersListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member-list',
            templateUrl: 'member-list.html',
            providers: [member_list_serv_1.MemberListService, member_serv_1.MemberService],
            directives: [main_1.AgGridNg2, member_comp_1.MemberComponent, confirm_comp_1.ConfirmComponent, popup_comp_1.PopupComponent, register_for_season_comp_1.RegisterForSeasonComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, member_list_serv_1.MemberListService, member_serv_1.MemberService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
//# sourceMappingURL=member-list.comp.js.map