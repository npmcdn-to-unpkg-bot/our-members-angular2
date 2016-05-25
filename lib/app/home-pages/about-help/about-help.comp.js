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
var AboutHelpComponent = (function () {
    function AboutHelpComponent() {
        this.displaySettingManagingOrganisation = false;
        this.displaySettingManagingMembers = false;
        this.displaySettingManagingFinances = false;
        this.displayManagingMemberCommunications = false;
        this.displayManagingEvents = false;
        this.displayReporting = false;
        this.displayFAQs = false;
    }
    AboutHelpComponent.prototype.toggleSettingManagingOrganisation = function () {
        if (this.displaySettingManagingOrganisation) {
            this.displaySettingManagingOrganisation = false;
        }
        else {
            this.displaySettingManagingOrganisation = true;
        }
    };
    AboutHelpComponent.prototype.toggleSettingManagingMembers = function () {
        if (this.displaySettingManagingMembers) {
            this.displaySettingManagingMembers = false;
        }
        else {
            this.displaySettingManagingMembers = true;
        }
    };
    AboutHelpComponent.prototype.toggleSettingManagingFinances = function () {
        if (this.displaySettingManagingFinances) {
            this.displaySettingManagingFinances = false;
        }
        else {
            this.displaySettingManagingFinances = true;
        }
    };
    AboutHelpComponent.prototype.toggleManagingMemberCommunications = function () {
        if (this.displayManagingMemberCommunications) {
            this.displayManagingMemberCommunications = false;
        }
        else {
            this.displayManagingMemberCommunications = true;
        }
    };
    AboutHelpComponent.prototype.toggleManagingEvents = function () {
        if (this.displayManagingEvents) {
            this.displayManagingEvents = false;
        }
        else {
            this.displayManagingEvents = true;
        }
    };
    AboutHelpComponent.prototype.toggleReporting = function () {
        if (this.displayReporting) {
            this.displayReporting = false;
        }
        else {
            this.displayReporting = true;
        }
    };
    AboutHelpComponent.prototype.toggleFAQs = function () {
        if (this.displayFAQs) {
            this.displayFAQs = false;
        }
        else {
            this.displayFAQs = true;
        }
    };
    AboutHelpComponent = __decorate([
        core_1.Component({
            selector: 'about-help',
            templateUrl: 'app/home-pages/about-help/about-help.html',
            styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/about-help/about-help.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutHelpComponent);
    return AboutHelpComponent;
}());
exports.AboutHelpComponent = AboutHelpComponent;
//# sourceMappingURL=about-help.comp.js.map