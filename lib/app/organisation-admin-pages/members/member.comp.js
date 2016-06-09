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
var member_serv_1 = require('./member.serv');
var main_1 = require('ag-grid-ng2/main');
var MemberComponent = (function () {
    function MemberComponent(router, memberService) {
        var _this = this;
        this.router = router;
        this.memberService = memberService;
        this.clickOutside = function (event) {
            _this.cancelMember();
        };
        this.Member = {};
        this.editMember = false;
        this.memberVisible = false;
        this.ContactSelected = true;
        this.PersonalSelected = false;
        this.OrganisationSelected = false;
        this.unselectAll = function () {
            _this.ContactSelected = false;
            _this.PersonalSelected = false;
            _this.OrganisationSelected = false;
        };
        this.ContactClicked = function () {
            _this.unselectAll();
            _this.ContactSelected = true;
        };
        this.PersonalClicked = function () {
            _this.unselectAll();
            _this.PersonalSelected = true;
        };
        this.OrganisationClicked = function () {
            _this.unselectAll();
            _this.OrganisationSelected = true;
        };
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMember = function (OrganisationMemberID) {
            var loadMemberThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                loadMemberThis.titleMember = 'Edit Invoice';
                loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
            }
            else {
                loadMemberThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
            function onGetMemberSuccess(Member) {
                loadMemberThis.editMember = true;
                loadMemberThis.Member = Member;
                loadMemberThis.getMemberSuccess = true;
                loadMemberThis.memberVisible = true;
            }
            function logError() {
                helper_serv_1.HelperService.log('getInvoice Error');
                loadMemberThis.getMemberSuccess = false;
            }
        };
        this.cancelMember = function () {
            _this.memberVisible = false;
        };
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'memberModal',
            templateUrl: 'app/organisation-admin-pages/members/member.html',
            //styles: ['.modalOurMembersVisible {display: block;}'],
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/members/member.css'],
            providers: [member_serv_1.MemberService],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, member_serv_1.MemberService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.comp.js.map