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
var SidebarMenuComponent = (function () {
    function SidebarMenuComponent(router) {
        var _this = this;
        this.router = router;
        this.membersContentDisplay = true;
        this.moneyContentDisplay = false;
        this.communicationContentDisplay = false;
        this.reportsContentDisplay = false;
        this.settingsContentDisplay = false;
        this.userManagementContentDisplay = false;
        this.helpResourcesContentDisplay = false;
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
        console.log('constructor SidebarMenuComponent ');
    }
    SidebarMenuComponent.prototype.ngOnInit = function () {
    };
    SidebarMenuComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-menu',
            templateUrl: 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.html',
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());
exports.SidebarMenuComponent = SidebarMenuComponent;
//# sourceMappingURL=sidebar-menu.comp.js.map