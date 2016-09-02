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
var ag_grid_formcontrol_1 = require("../../utilities/ag-grid-formcontrol/ag-grid-formcontrol");
var main_1 = require("ag-grid-ng2/main");
var member_serv_1 = require("../members/member/member.serv");
var ChooseMembersComponent = (function () {
    function ChooseMembersComponent(builder, membershipTypesService, teamsGroupsService, memberService) {
        var _this = this;
        this.membershipTypesService = membershipTypesService;
        this.teamsGroupsService = teamsGroupsService;
        this.memberService = memberService;
        this.membersChosen = new core_1.EventEmitter();
        this.showFilters = true;
        this.memberGrid = false;
        this.columnDefsTeamsGroups = [
            { headerName: "GroupID", field: "GroupID", hide: true },
            { headerName: "Name", field: "Name", width: 300, checkboxSelection: true }
        ];
        this.getTeamsGroups = function () {
            var getTeamsGroupsThis = _this;
            getTeamsGroupsThis.teamsGroupsService.getTeamsGroups().subscribe(onGetMemberListSuccess, logError);
            function onGetMemberListSuccess(TeamsGroups) {
                getTeamsGroupsThis.teamFormControl.gridOptions.api.setRowData(TeamsGroups);
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
        this.clearAllValidators = function () {
            var teamsGroups = _this.chooseMembersForm.controls['teamsGroups'];
            teamsGroups.clearValidators();
            teamsGroups.updateValueAndValidity();
            var membershipType = _this.chooseMembersForm.controls['membershipType'];
            membershipType.clearValidators();
            membershipType.updateValueAndValidity();
        };
        this.memberFilterTeamsGroupsClicked = function () {
            _this.clearAllValidators();
            var teamsGroups = _this.chooseMembersForm.controls['teamsGroups'];
            teamsGroups.setValidators(forms_1.Validators.required);
            teamsGroups.updateValueAndValidity();
        };
        this.memberFilterMembersClicked = function () {
            _this.clearAllValidators();
        };
        this.memberFilterMembershipTypeClicked = function () {
            _this.clearAllValidators();
            var membershipType = _this.chooseMembersForm.controls['membershipType'];
            membershipType.setValidators(forms_1.Validators.required);
            membershipType.updateValueAndValidity();
        };
        this.getFiltersNext = function () {
            var structChooseMembers = _this.chooseMembersForm.value;
            _this.showFilters = false;
            _this.memberGrid = true;
            _this.loadFilteredMembers(structChooseMembers);
        };
        this.loadFilteredMembers = function (structChooseMembers) {
            var loadFilteredMembersThis = _this;
            loadFilteredMembersThis.memberService.getFilteredMembers(structChooseMembers).subscribe(onLoadFilteredMembersSuccess, logError);
            function onLoadFilteredMembersSuccess(structOrganisationMemberArray) {
                loadFilteredMembersThis.gridOptionsMemberList.api.setRowData(structOrganisationMemberArray);
                loadFilteredMembersThis.gridOptionsMemberList.api.forEachNode(function (node) {
                    node.setSelected(true);
                });
                helper_serv_1.HelperService.log('loadFilteredMembers success');
            }
            function logError() {
                helper_serv_1.HelperService.log('error loadFilteredMembers');
            }
        };
        this.C_Active = 'Active';
        this.C_Inactive = 'Inactive';
        this.C_Both = 'Both';
        this.C_Members = 'Members';
        this.C_TeamsGroups = 'TeamsGroups';
        this.C_MembershipType = 'MembershipType';
        this.memberListBack = function () {
            _this.showFilters = true;
            _this.memberGrid = false;
        };
        this.memberListNext = function () {
            var selectedRows = _this.gridOptionsMemberList.api.getSelectedRows();
            _this.membersChosen.emit(selectedRows);
        };
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefsMembers = [
            { headerName: "Last Name", field: "LastName", checkboxSelection: true },
            { headerName: "First Name", field: "FirstName" }
        ];
        this.gridOptionsMemberList = helper_serv_1.HelperService.getGridOptions(this.columnDefsMembers, null, null, true);
        helper_serv_1.HelperService.log('constructor ChooseMembersComponent');
        this.chooseMembersForm = builder.group({
            membershipStatus: [this.C_Active],
            memberFilter: [this.C_Members],
            membershipType: [null],
            teamsGroups: [null]
        });
    }
    ChooseMembersComponent.prototype.ngOnInit = function () {
        this.getMembershipTypes();
        this.getTeamsGroups();
    };
    Object.defineProperty(ChooseMembersComponent.prototype, "showMembershipTypes", {
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
    __decorate([
        core_1.ViewChild(ag_grid_formcontrol_1.AgGridFormControl), 
        __metadata('design:type', ag_grid_formcontrol_1.AgGridFormControl)
    ], ChooseMembersComponent.prototype, "teamFormControl", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChooseMembersComponent.prototype, "membersChosen", void 0);
    ChooseMembersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'choose-members',
            templateUrl: 'choose-members.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, ag_grid_formcontrol_1.AgGridFormControl, main_1.AgGridNg2],
            providers: [forms_1.FormBuilder, membership_type_serv_1.MembershipTypesService, teams_groups_serv_1.TeamsGroupsService, member_serv_1.MemberService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, membership_type_serv_1.MembershipTypesService, teams_groups_serv_1.TeamsGroupsService, member_serv_1.MemberService])
    ], ChooseMembersComponent);
    return ChooseMembersComponent;
}());
exports.ChooseMembersComponent = ChooseMembersComponent;
//# sourceMappingURL=choose-members.comp.js.map