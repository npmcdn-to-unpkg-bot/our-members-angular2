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
//import {MemberService} from "../members/member/member.serv";
var ChooseMembersComponent = (function () {
    function ChooseMembersComponent() {
        this.C_Active = 'Active';
        this.C_Inactive = 'Inactive';
        this.C_Both = 'Both';
        this.C_Members = 'Members';
        this.C_TeamsGroups = 'TeamsGroups';
        this.C_MembershipType = 'MembershipType';
        this.applyFilters = true;
        this.memberGrid = false;
        this.membershipStatus = this.C_Active;
        this.memberFilter = this.C_Members;
        helper_serv_1.HelperService.log('constructor ChooseMembersComponent');
    }
    ChooseMembersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'choose-members',
            templateUrl: 'choose-members.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChooseMembersComponent);
    return ChooseMembersComponent;
}());
exports.ChooseMembersComponent = ChooseMembersComponent;
//# sourceMappingURL=choose-members.comp.js.map