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
var router_deprecated_1 = require('@angular/router-deprecated');
var helper_serv_1 = require('../../helper/helper.serv');
var member_list_serv_1 = require('./member-list.serv');
var member_comp_1 = require('./member.comp');
var main_1 = require('ag-grid-ng2/main');
var MembersListComponent = (function () {
    function MembersListComponent(router, memberListService) {
        var _this = this;
        this.router = router;
        this.memberListService = memberListService;
        this.memberComponentClosed = function (refreshList) {
            if (refreshList === helper_serv_1.HelperService.C_TRUE) {
                _this.loadMemberListData();
            }
            _this.showMembershipList = true;
        };
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMemberListData = function () {
            var loadMembersThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.memberListService.getMemberListData().subscribe(onGetMemberListSuccess, logError);
            }
            else {
                _this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
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
        };
        this.editMember = function () {
            var OrganisationMemberID = _this.getSelectedOrganisationMemberID();
            _this.showMembershipList = false;
            if (OrganisationMemberID === -1) {
                alert('Please select a member to edit');
            }
            else {
                _this.memberComponent.loadMember(OrganisationMemberID);
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
            var selectedMember = params.data;
            _this.memberComponent.loadMember(selectedMember.OrganisationMemberID);
            //this.showMemberModal = true;
        };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        //constructor(private router: Router, private memberListService: MemberListService, private countriesService: CountriesService, private membershipTypesService: MembershipTypesService, private groupsService: GroupsService, popupComponent: PopupComponent) {
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MembersListComponent.prototype.ngOnInit = function () {
        this.loadMemberListData();
    };
    __decorate([
        core_1.ViewChild(member_comp_1.MemberComponent), 
        __metadata('design:type', member_comp_1.MemberComponent)
    ], MembersListComponent.prototype, "memberComponent", void 0);
    MembersListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member-list',
            templateUrl: 'member-list.html',
            providers: [member_list_serv_1.MemberListService],
            directives: [main_1.AgGridNg2, member_comp_1.MemberComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, member_list_serv_1.MemberListService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
//# sourceMappingURL=member-list.comp.js.map