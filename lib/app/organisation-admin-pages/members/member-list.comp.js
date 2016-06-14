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
var countries_serv_1 = require('../../services/countries/countries.serv');
var membership_type_serv_1 = require('../../services/membership-type/membership-type.serv');
var groups_serv_1 = require('../groups/groups.serv');
var main_1 = require('ag-grid-ng2/main');
var MembersListComponent = (function () {
    function MembersListComponent(router, memberListService, countriesService, membershipTypesService, groupsService) {
        var _this = this;
        this.router = router;
        this.memberListService = memberListService;
        this.countriesService = countriesService;
        this.membershipTypesService = membershipTypesService;
        this.groupsService = groupsService;
        this.memberComponentClosed = function () {
            _this.showList = true;
            _this.showModal = false;
            _this.loadMembers();
        };
        this.showList = true;
        this.showModal = false;
        this.countries = [];
        this.MembershipTypes = [];
        this.Groups = [];
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMembers = function () {
            var loadMembersThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.memberListService.getMemberList().subscribe(onGetMembersSuccess, logError);
            }
            else {
                _this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
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
        this.loadGroups = function () {
            var loadGroupsThis = _this;
            _this.groupsService.getGroups().subscribe(onGetGroupsSuccess, logGroupsError, complete);
            function logGroupsError(e) {
                console.log('getGroups Error');
                console.log(e);
            }
            function onGetGroupsSuccess(Groups) {
                loadGroupsThis.Groups = Groups;
            }
            function complete() {
                console.log('getGroups complete');
            }
        };
        this.loadCountries = function () {
            var loadCountriesThis = _this;
            _this.countriesService.getCountries().subscribe(onGetCountriesSuccess, logCountriesError, complete);
            function logCountriesError(e) {
                console.log('getCountries Error');
                console.log(e);
            }
            function onGetCountriesSuccess(Countries) {
                loadCountriesThis.countries = Countries;
            }
            function complete() {
                console.log('getCountries complete');
            }
        };
        this.loadMembershipTypes = function () {
            var loadMembershipTypesThis = _this;
            _this.membershipTypesService.getMembershipTypes().subscribe(onGetMembershipTypesSuccess, logMembershipTypesError, complete);
            function logMembershipTypesError(e) {
                console.log('getMembershipTypes Error');
                console.log(e);
            }
            function onGetMembershipTypesSuccess(MembershipTypes) {
                loadMembershipTypesThis.MembershipTypes = MembershipTypes;
            }
            function complete() {
                console.log('getMembershipTypes complete');
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
            var selectedMember = params.data;
            _this.memberComponent.loadMember(selectedMember.OrganisationMemberID, _this.countries, _this.MembershipTypes, _this.Groups);
            _this.showList = false;
            _this.showModal = true;
        };
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MembersListComponent.prototype.ngOnInit = function () {
        this.loadMembers();
        this.loadCountries();
        this.loadMembershipTypes();
        this.loadGroups();
    };
    __decorate([
        core_1.ViewChild(member_comp_1.MemberComponent), 
        __metadata('design:type', member_comp_1.MemberComponent)
    ], MembersListComponent.prototype, "memberComponent", void 0);
    MembersListComponent = __decorate([
        core_1.Component({
            selector: 'member-list',
            templateUrl: 'app/organisation-admin-pages/members/member-list.html',
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
            providers: [member_list_serv_1.MemberListService, countries_serv_1.CountriesService, membership_type_serv_1.MembershipTypesService, groups_serv_1.GroupsService],
            directives: [main_1.AgGridNg2, member_comp_1.MemberComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, member_list_serv_1.MemberListService, countries_serv_1.CountriesService, membership_type_serv_1.MembershipTypesService, groups_serv_1.GroupsService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
//# sourceMappingURL=member-list.comp.js.map