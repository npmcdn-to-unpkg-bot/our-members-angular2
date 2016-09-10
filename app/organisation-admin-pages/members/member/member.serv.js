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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var helper_serv_1 = require("../../../services/helper/helper.serv");
var http_handler_serv_1 = require("../../../services/http-handler/http-handler.serv");
var MemberService = (function () {
    function MemberService(http, router) {
        this.http = http;
        this.router = router;
        console.log('constructor MemberService');
    }
    MemberService.parseResponse = function (res) {
        return res.json();
    };
    MemberService.prototype.getMember = function (OrganisationMemberID) {
        var parameters = [];
        var parameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member', true, false);
    };
    MemberService.prototype.getNextMemberNumber = function () {
        var parameters = [];
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member/get-next-member-number', true, false);
    };
    MemberService.prototype.saveNewMember = function (Member) {
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(Member, 'api/member');
    };
    MemberService.prototype.updateMember = function (Member) {
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.putObject(Member, 'api/member');
    };
    MemberService.prototype.registerMember = function (OrganisationMemberID) {
        var parameters = [];
        var parameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member-list/register-member', true, false);
    };
    MemberService.prototype.deleteMember = function (OrganisationMemberID) {
        var parameters = [];
        var parameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.deleteObject(parameters, 'api/member-list/delete-member');
    };
    MemberService.prototype.testDeleteMember = function (OrganisationMemberID) {
        var parameters = [];
        var parameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member-list/test-delete', true, false);
    };
    MemberService.prototype.getRegisterForSeasonData = function (OrganisationMemberID) {
        var parameters = [];
        var parameterOrganisationMemberID = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters.push(parameterOrganisationMemberID);
        var parameterCurrentDate = {
            name: 'sCurrentDate',
            value: helper_serv_1.HelperService.formatDateForJSon(new Date())
        };
        parameters.push(parameterCurrentDate);
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member-list/register-for-season', true, false);
    };
    MemberService.prototype.saveRegisterForSeasonData = function (structsaveRegisterForSeasonData) {
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(structsaveRegisterForSeasonData, 'api/member-list/save-register-for-season');
    };
    MemberService.prototype.getFilteredMembers = function (structChooseMembers) {
        var parameters = [];
        //membershipStatus As String, memberFilter As String, sGroupIDArray As String, MembershipTypeID As String)
        parameters.push({
            name: 'membershipStatus',
            value: structChooseMembers.membershipStatus
        });
        parameters.push({
            name: 'memberFilter',
            value: structChooseMembers.memberFilter
        });
        //convert aray of GroupID to comma separated string
        var s = '', i;
        if (structChooseMembers.teamsGroups === null) {
            s = '-1';
        }
        else {
            for (i = 0; i < structChooseMembers.teamsGroups.length; i++) {
                s += structChooseMembers.teamsGroups[i].GroupID.toString();
                if (i < structChooseMembers.teamsGroups.length - 1) {
                    s += ',';
                }
            }
        }
        parameters.push({
            name: 'sGroupIDArray',
            value: s
        });
        if (structChooseMembers.membershipType === null) {
            parameters.push({
                name: 'membershipType',
                value: '-1'
            });
        }
        else {
            parameters.push({
                name: 'membershipType',
                value: structChooseMembers.membershipType
            });
        }
        // parameters.push({
        //     name: 'MembershipTypeID',
        //     value: structChooseMembers.MembershipTypeID
        // });
        var httpHandlerService = new http_handler_serv_1.HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject(parameters, 'api/member/get-filtered-members', true, false);
    };
    MemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=member.serv.js.map