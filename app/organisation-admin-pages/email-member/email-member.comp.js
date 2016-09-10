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
var forms_1 = require("@angular/forms");
var popup_comp_1 = require("../../utilities/popup/popup.comp");
var EmailMemberComponent = (function () {
    function EmailMemberComponent(router, emailMemberService, builder) {
        var _this = this;
        this.router = router;
        this.emailMemberService = emailMemberService;
        this.emailMemberBack = function () {
            _this.hideEmailAndSubject = true;
            _this.hideChooseMembers = false;
        };
        this.sendEmail = function () {
            var sendEmailThis = _this;
            sendEmailThis.emailMemberService.sendEmail(_this.email).subscribe(onSendEmailSuccess, logError);
            function onSendEmailSuccess() {
                console.log('onSendEmailSuccess');
                sendEmailThis.popupComponent.showPopup('Email(s) sent successfully');
            }
            function logError(e) {
                console.log('sendEmail error');
                console.log(e);
            }
        };
        //structOrganisationMemberArray: structOrganisationMember[] = [];
        this.displayMembers = function (structOrganisationMemberArray) {
            var i;
            _this.email.OrganisationMemberIDArray = [];
            for (i = 0; i < structOrganisationMemberArray.length; i++) {
                _this.email.OrganisationMemberIDArray.push(structOrganisationMemberArray[i].OrganisationMemberID);
            }
            _this.hideEmailAndSubject = false;
            _this.hideChooseMembers = true;
        };
        this.hideEmailAndSubject = true;
        this.hideChooseMembers = false;
        this.email = {
            OrganisationMemberIDArray: [],
            EmailAttachmentIDArray: [],
            Subject: '',
            Message: '',
            sDateSent: helper_serv_1.HelperService.formatDateForJSon(new Date())
        };
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { field: "OrganisationMemberID", hide: true },
            { headerName: "Last Name", field: "LastName", checkboxSelection: true },
            { headerName: "First Name", field: "FirstName" },
        ];
        this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, null, null, true);
        helper_serv_1.HelperService.log('constructor EmailComponent');
        this.emailMembersForm = builder.group({
            subject: ['', forms_1.Validators.required],
            body: ['', forms_1.Validators.required]
        });
    }
    __decorate([
        core_1.ViewChild(popup_comp_1.PopupComponent), 
        __metadata('design:type', popup_comp_1.PopupComponent)
    ], EmailMemberComponent.prototype, "popupComponent", void 0);
    EmailMemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'email-member',
            templateUrl: 'email-member.html',
            styleUrls: ['email-member.css'],
            providers: [email_member_serv_1.EmailMemberService, forms_1.FormBuilder],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, main_1.AgGridNg2, choose_members_comp_1.ChooseMembersComponent, popup_comp_1.PopupComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, email_member_serv_1.EmailMemberService, forms_1.FormBuilder])
    ], EmailMemberComponent);
    return EmailMemberComponent;
}());
exports.EmailMemberComponent = EmailMemberComponent;
//# sourceMappingURL=email-member.comp.js.map