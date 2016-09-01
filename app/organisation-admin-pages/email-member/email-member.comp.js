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
var router_1 = require("@angular/router");
var helper_serv_1 = require("../../services/helper/helper.serv");
var main_1 = require("ag-grid-ng2/main");
var email_member_serv_1 = require("../email-member/email-member.serv");
var choose_members_comp_1 = require("../choose-members/choose-members.comp");
var EmailMemberComponent = (function () {
    function EmailMemberComponent(router, emailMemberService) {
        var _this = this;
        this.router = router;
        this.emailMemberService = emailMemberService;
        this.applyFiltersNext = function () {
            _this.hideAll();
            //this.memberFilter = true;
        };
        this.displayMembers = function (structOrganisationMemberArray) {
            _this.gridOptions.api.setRowData(structOrganisationMemberArray);
            console.log(structOrganisationMemberArray);
        };
        // memberFilterBack = ()=> {
        //     this.hideAll();
        //     this.applyFilters = true;
        // }
        // memberFilterNext = ()=> {
        //     this.hideAll();
        //     this.subjectAndBody = true;
        // }
        // subjectAndBodyBack = ()=> {
        //     this.hideAll();
        //     this.memberFilter = true;
        // }
        // subjectAndBodySend = ()=> {
        //     this.sendEmail();
        // }
        // subjectAndBodyGoToAttachments = ()=> {
        //     this.hideAll();
        //     this.attachments = true;
        // }
        // attachmentsBack = ()=> {
        //     this.hideAll();
        //     this.subjectAndBody = true;
        // }
        this.hideAll = function () {
            _this.chooseMembers = false;
            // this.memberFilter = false;
            // this.subjectAndBody = false;
            // this.attachments = false;
        };
        this.sendEmail = function () {
        };
        this.chooseMembers = true;
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { field: "OrganisationMemberID", hide: true },
            { headerName: "Last Name", field: "LastName", checkboxSelection: true },
            { headerName: "First Name", field: "FirstName" },
        ];
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, null, null);
        helper_serv_1.HelperService.log('constructor EmailComponent');
    }
    EmailMemberComponent.prototype.ngOnInit = function () {
        //this.Member = this.getEmptyMember(0);
    };
    EmailMemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'email-member',
            templateUrl: 'email-member.html',
            styleUrls: ['email-member.css'],
            providers: [email_member_serv_1.EmailMemberService],
            directives: [main_1.AgGridNg2, choose_members_comp_1.ChooseMembersComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, email_member_serv_1.EmailMemberService])
    ], EmailMemberComponent);
    return EmailMemberComponent;
}());
exports.EmailMemberComponent = EmailMemberComponent;
//# sourceMappingURL=email-member.comp.js.map