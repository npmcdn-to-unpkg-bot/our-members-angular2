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
var helper_serv_1 = require('../../../services/helper/helper.serv');
var member_serv_1 = require('../member/member.serv');
var router_1 = require('@angular/router');
var RegisterForSeasonComponent = (function () {
    function RegisterForSeasonComponent(memberService, router) {
        var _this = this;
        this.memberService = memberService;
        this.router = router;
        this.registerForSeasonVisible = false;
        //output variables
        this.registerForSeason = '';
        this.headerLabel = '';
        this.C_thisSeason = 'thisSeason';
        this.C_nextSeason = 'nextSeason';
        this.thisSeasonVisible = false;
        this.nextSeasonVisible = false;
        this.thisSeasonLabel = '';
        this.nextSeasonLabel = '';
        this.okButtonEnabled = true;
        this.showForm = function (OrganisationMemberID) {
            window.onkeyup = _this.testEsc;
            _this.loadForm(OrganisationMemberID);
        };
        this.loadForm = function (OrganisationMemberID) {
            var loadFormThis = _this;
            loadFormThis.OrganisationMemberID = OrganisationMemberID;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                loadFormThis.memberService.getRegisterForSeasonData(OrganisationMemberID).subscribe(getRegisterForSeasonDataSuccess, logError);
            }
            else {
                helper_serv_1.HelperService.sendToLogin(loadFormThis.router);
            }
            function getRegisterForSeasonDataSuccess(structRegisterMemberFormData) {
                var InvoicedToDate = helper_serv_1.HelperService.translateJavascriptDate(structRegisterMemberFormData.sInvoicedToDate);
                loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                loadFormThis.comment = '';
                loadFormThis.headerLabel = '';
                loadFormThis.thisSeasonVisible = false;
                loadFormThis.nextSeasonVisible = false;
                loadFormThis.thisSeasonLabel = '';
                loadFormThis.nextSeasonLabel = '';
                loadFormThis.okButtonEnabled = true;
                var ThisSeasonEndDate = helper_serv_1.HelperService.translateJavascriptDate(structRegisterMemberFormData.sThisSeasonEndDate);
                loadFormThis.ThisSeasonEndDate = ThisSeasonEndDate;
                var ThisSeasonStartDate = new Date(ThisSeasonEndDate.getFullYear() - 1, ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate() + 1); //ThisSeasonEndDate;//.AddYears(-1).AddDays(1)
                var NextSeasonEndDate = new Date(ThisSeasonEndDate.getFullYear() + 1, ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate()); // ThisSeasonEndDate;//.AddYears(1)
                loadFormThis.NextSeasonEndDate = NextSeasonEndDate;
                var NextSeasonStartDate = new Date(ThisSeasonEndDate.getFullYear(), ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate() + 1); //.AddDays(1)
                var LastSeasonEndDate = new Date(ThisSeasonStartDate.getFullYear(), ThisSeasonStartDate.getMonth(), ThisSeasonStartDate.getDate() - 1); //.AddDays(-1)
                var LastSeasonStartDate = new Date(ThisSeasonStartDate.getFullYear() - 1, ThisSeasonStartDate.getMonth(), ThisSeasonStartDate.getDate()); //.AddYears(-1)
                loadFormThis.registerForSeasonVisible = true;
                if (structRegisterMemberFormData.sInvoicedToDate === '') {
                    loadFormThis.thisSeasonLabel = 'Register for this season: ' + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate);
                    loadFormThis.nextSeasonLabel = 'Register for next season: ' + helper_serv_1.HelperService.formatDate(NextSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(NextSeasonEndDate);
                    loadFormThis.thisSeasonVisible = true;
                    loadFormThis.nextSeasonVisible = true;
                    loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                }
                else {
                    //if the player is registered til the end of last season
                    if ((InvoicedToDate >= LastSeasonStartDate) && (InvoicedToDate <= LastSeasonEndDate)) {
                        loadFormThis.thisSeasonLabel = 'Register for this season: ' + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate);
                        loadFormThis.nextSeasonLabel = 'Register for next season: ' + helper_serv_1.HelperService.formatDate(NextSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(NextSeasonEndDate);
                        loadFormThis.thisSeasonVisible = true;
                        loadFormThis.nextSeasonVisible = true;
                        loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                    }
                    else {
                        //If the player is already registered for the current season 
                        if ((InvoicedToDate >= ThisSeasonStartDate) && (InvoicedToDate <= ThisSeasonEndDate)) {
                            loadFormThis.headerLabel = 'Player already registered for this season: ' + helper_serv_1.HelperService.formatDate(ThisSeasonStartDate) + ' - ' + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate);
                            loadFormThis.nextSeasonLabel = 'Register for next season: ' + helper_serv_1.HelperService.formatDate(NextSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(NextSeasonEndDate);
                            loadFormThis.nextSeasonVisible = true;
                            //loadFormThis.registerForNextSeason = true;
                            loadFormThis.registerForSeason = loadFormThis.C_nextSeason;
                            ;
                        }
                        else {
                            //If the player is already registered for both 
                            if ((InvoicedToDate >= NextSeasonStartDate) && (InvoicedToDate <= NextSeasonEndDate)) {
                                loadFormThis.headerLabel = 'Player already registered for next season: ' + helper_serv_1.HelperService.formatDate(NextSeasonStartDate) + ' - ' + helper_serv_1.HelperService.formatDate(NextSeasonEndDate);
                                loadFormThis.okButtonEnabled = false;
                                loadFormThis.okButtonEnabled = false;
                            }
                            else {
                                loadFormThis.thisSeasonLabel = 'Register for this season: ' + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(ThisSeasonEndDate);
                                loadFormThis.nextSeasonLabel = 'Register for next season: ' + helper_serv_1.HelperService.formatDate(NextSeasonEndDate) + " - " + helper_serv_1.HelperService.formatDate(NextSeasonEndDate);
                                loadFormThis.thisSeasonVisible = true;
                                loadFormThis.nextSeasonVisible = true;
                                loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                            }
                        }
                    }
                }
                helper_serv_1.HelperService.log('getRegisterForSeasonDataSuccess success');
                window.onkeyup = loadFormThis.testEsc;
            }
            function logError() {
                helper_serv_1.HelperService.log('getRegisterForSeasonDataSuccess Error');
            }
        };
        this.testEsc = function (event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                _this.cancel();
            }
        };
        this.message = '';
        //cancelMember
        this.closed = new core_1.EventEmitter();
        this.cancel = function () {
            window.onkeyup = null;
            _this.registerForSeasonVisible = false;
            _this.closed.emit('false');
        };
        this.returnFunction = function () {
            var returnFunctionThis = _this;
            var sEndDate;
            var sCurrentDate = helper_serv_1.HelperService.formatDateForJSon(new Date());
            var structsaveRegisterForSeasonData;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                if (returnFunctionThis.registerForSeason === returnFunctionThis.C_thisSeason) {
                    sEndDate = helper_serv_1.HelperService.formatDateForJSon(returnFunctionThis.ThisSeasonEndDate);
                }
                else {
                    sEndDate = helper_serv_1.HelperService.formatDateForJSon(returnFunctionThis.NextSeasonEndDate);
                }
                structsaveRegisterForSeasonData = {
                    OrganisationMemberID: returnFunctionThis.OrganisationMemberID,
                    sEndDate: sEndDate,
                    comment: returnFunctionThis.comment,
                    sCurrentDate: sCurrentDate
                };
                returnFunctionThis.memberService.saveRegisterForSeasonData(structsaveRegisterForSeasonData).subscribe(saveRegisterForSeasonDataSuccess, logError);
            }
            else {
                helper_serv_1.HelperService.sendToLogin(returnFunctionThis.router);
            }
            function logError() {
                helper_serv_1.HelperService.log('saveRegisterForSeasonData Error');
            }
            function saveRegisterForSeasonDataSuccess() {
                window.onkeyup = null;
                returnFunctionThis.registerForSeasonVisible = false;
                returnFunctionThis.closed.emit('true');
            }
        };
        this.okClicked = function () {
            _this.returnFunction();
        };
        helper_serv_1.HelperService.log('constructor RegisterForSeasonComponent');
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RegisterForSeasonComponent.prototype, "closed", void 0);
    RegisterForSeasonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-for-season',
            templateUrl: 'register-for-season.html',
            styleUrls: ['register-for-season.css'],
            providers: [member_serv_1.MemberService]
        }), 
        __metadata('design:paramtypes', [member_serv_1.MemberService, router_1.Router])
    ], RegisterForSeasonComponent);
    return RegisterForSeasonComponent;
}());
exports.RegisterForSeasonComponent = RegisterForSeasonComponent;
//# sourceMappingURL=register-for-season.comp.js.map