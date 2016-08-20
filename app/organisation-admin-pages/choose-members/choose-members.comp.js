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
var core_1 = require("@angular/core");
var helper_serv_1 = require("../../services/helper/helper.serv");
var forms_1 = require("@angular/forms");
var membership_type_serv_1 = require("../../services/membership-type/membership-type.serv");
var teams_groups_serv_1 = require("../../services/teams-groups/teams-groups.serv");
var ChooseMembersComponent = (function () {
    function ChooseMembersComponent(builder, membershipTypesService, teamsGroupsService) {
        var _this = this;
        this.membershipTypesService = membershipTypesService;
        this.teamsGroupsService = teamsGroupsService;
        this.getTeamsGroups = function () {
            var getTeamsGroupsThis = _this;
            getTeamsGroupsThis.teamsGroupsService.getTeamsGroups().subscribe(onGetMemberListSuccess, logError);
            function onGetMemberListSuccess(TeamsGroups) {
                getTeamsGroupsThis.TeamsGroups = TeamsGroups;
                helper_serv_1.HelperService.log('getTeamsGroups success');
            }
            function logError() {
                helper_serv_1.HelperService.log('error getting TeamsGroups');
            }
        };
        this.getMembershipTypes = function () {
            var getMembershipTypesThis = _this;
            getMembershipTypesThis.membershipTypesService.getMembershipTypes().subscribe(onGetMemberListSuccess, logError);
            function onGetMemberListSuccess(membershipTypes) {
                getMembershipTypesThis.MembershipTypes = membershipTypes;
                helper_serv_1.HelperService.log('getMembershipTypes success');
            }
            function logError() {
                helper_serv_1.HelperService.log('error getting MembershipTypes');
            }
        };
        this.applyFiltersNext = function () {
            alert('applyFiltersNext');
        };
        this.C_Active = 'Active';
        this.C_Inactive = 'Inactive';
        this.C_Both = 'Both';
        this.C_Members = 'Members';
        this.C_TeamsGroups = 'TeamsGroups';
        this.C_MembershipType = 'MembershipType';
        helper_serv_1.HelperService.log('constructor ChooseMembersComponent');
        this.chooseMembersForm = builder.group({
            membershipStatus: [this.C_Active],
            memberFilter: [this.C_Members],
            membershipType: []
        });
    }
    ChooseMembersComponent.prototype.ngOnInit = function () {
        this.getMembershipTypes();
        this.getTeamsGroups();
    };
    Object.defineProperty(ChooseMembersComponent.prototype, "showMembershipTypes", {
        //can only resize a grid when it is visible
        //this.teamsGroupsGridOptions.api.sizeColumnsToFit();
        get: function () {
            var memberFilter = this.chooseMembersForm.controls['memberFilter'];
            if (memberFilter.value === this.C_MembershipType) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChooseMembersComponent.prototype, "showTeamsGroups", {
        get: function () {
            var memberFilter = this.chooseMembersForm.controls['memberFilter'];
            if (memberFilter.value === this.C_TeamsGroups) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ChooseMembersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'choose-members',
            templateUrl: 'choose-members.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder, membership_type_serv_1.MembershipTypesService, teams_groups_serv_1.TeamsGroupsService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, membership_type_serv_1.MembershipTypesService, teams_groups_serv_1.TeamsGroupsService])
    ], ChooseMembersComponent);
    return ChooseMembersComponent;
}());
exports.ChooseMembersComponent = ChooseMembersComponent;
//# sourceMappingURL=choose-members.comp.js.map