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
var helper_serv_1 = require('../../services/helper/helper.serv');
var sidebar_menu_serv_1 = require('./sidebar-menu.serv');
var communication_serv_1 = require('../../services/communication/communication.serv');
var SidebarMenuComponent = (function () {
    //subscription: Subscription;
    function SidebarMenuComponent(communicationService, router, sidebarMenuService) {
        var _this = this;
        this.communicationService = communicationService;
        this.router = router;
        this.sidebarMenuService = sidebarMenuService;
        this.getAdminLoggedIn = function () {
            var getAdminLoggedInThis = _this;
            if (helper_serv_1.HelperService.tokenIsValid()) {
                _this.sidebarMenuService.getAdminLoggedIn().subscribe(getAdminLoggedInSuccess, logError);
            }
            else {
                _this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
            function logError(e) {
                console.log('getMembers Error');
                //loadMembersThis.getMembersSuccess = false;
            }
            function getAdminLoggedInSuccess(data) {
                getAdminLoggedInThis.adminLoggedIn = data;
            }
        };
        this.adminLoggedIn = false;
        this.membersContentDisplay = true;
        this.moneyContentDisplay = false;
        this.communicationContentDisplay = false;
        this.reportsContentDisplay = false;
        this.settingsContentDisplay = false;
        this.userManagementContentDisplay = false;
        this.helpResourcesContentDisplay = false;
        this.adminContentDisplay = false;
        this.hideAll = function () {
            _this.membersContentDisplay = false;
            _this.moneyContentDisplay = false;
            _this.communicationContentDisplay = false;
            _this.reportsContentDisplay = false;
            _this.settingsContentDisplay = false;
            _this.userManagementContentDisplay = false;
            _this.helpResourcesContentDisplay = false;
        };
        this.membersClick = function () {
            _this.hideAll();
            if (_this.membersContentDisplay) {
                _this.membersContentDisplay = false;
            }
            else {
                _this.membersContentDisplay = true;
            }
        };
        this.moneyClick = function () {
            _this.hideAll();
            if (_this.moneyContentDisplay) {
                _this.moneyContentDisplay = false;
            }
            else {
                _this.moneyContentDisplay = true;
            }
        };
        this.communicationClick = function () {
            _this.hideAll();
            if (_this.communicationContentDisplay) {
                _this.communicationContentDisplay = false;
            }
            else {
                _this.communicationContentDisplay = true;
            }
        };
        this.reportsClick = function () {
            _this.hideAll();
            if (_this.reportsContentDisplay) {
                _this.reportsContentDisplay = false;
            }
            else {
                _this.reportsContentDisplay = true;
            }
        };
        this.settingsClick = function () {
            _this.hideAll();
            if (_this.settingsContentDisplay) {
                _this.settingsContentDisplay = false;
            }
            else {
                _this.settingsContentDisplay = true;
            }
        };
        this.userManagementClick = function () {
            _this.hideAll();
            if (_this.userManagementContentDisplay) {
                _this.userManagementContentDisplay = false;
            }
            else {
                _this.userManagementContentDisplay = true;
            }
        };
        this.helpResourcesClick = function () {
            _this.hideAll();
            if (_this.helpResourcesContentDisplay) {
                _this.helpResourcesContentDisplay = false;
            }
            else {
                _this.helpResourcesContentDisplay = true;
            }
        };
        this.adminClick = function () {
            _this.hideAll();
            if (_this.adminContentDisplay) {
                _this.adminContentDisplay = false;
            }
            else {
                if (_this.adminLoggedIn) {
                    _this.adminContentDisplay = true;
                }
                else {
                    _this.adminContentDisplay = true;
                }
            }
        };
        this.logout = function () {
            _this.communicationService.loggedoutCommunication(true);
            helper_serv_1.HelperService.deleteTokenFromStorage();
            _this.router.parent.navigate(['HomePageMaster', 'HomePageContent']);
        };
        console.log('constructor SidebarMenuComponent ');
        //set up a listener to wait for parent to send string
        //this.subscription = communicationService.communicationAnnounced$.subscribe(
        //    communication => {
        //        alert(communication);
        //    });
    }
    SidebarMenuComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        //this.subscription.unsubscribe();
    };
    SidebarMenuComponent.prototype.ngOnInit = function () {
        this.getAdminLoggedIn();
    };
    SidebarMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-menu',
            templateUrl: 'sidebar-menu.html',
            styleUrls: ['sidebar-menu.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [sidebar_menu_serv_1.SidebarMenuService]
        }), 
        __metadata('design:paramtypes', [communication_serv_1.CommunicationService, router_deprecated_1.Router, sidebar_menu_serv_1.SidebarMenuService])
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());
exports.SidebarMenuComponent = SidebarMenuComponent;
//# sourceMappingURL=sidebar-menu.comp.js.map