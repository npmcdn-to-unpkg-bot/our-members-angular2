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
var helper_serv_1 = require('../helper/helper.serv');
var home_page_master_comp_1 = require('../home-pages/home-page-master/home-page-master.comp');
var header_buttons_comp_1 = require('../header-buttons/header-buttons.comp');
var footer_buttons_comp_1 = require('../home-pages/footer-buttons/footer-buttons.comp');
var organisation_admin_master_comp_1 = require('../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp');
core_1.enableProdMode();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'iB2';
        this.tokenValid = helper_serv_1.HelperService.tokenIsValid();
        this.threeLineButtonDisplay = 'none';
        console.log('constructor AppComponent');
    }
    AppComponent.prototype.showHideThreeLineButton = function () {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        }
        else {
            this.threeLineButtonDisplay = 'none';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ib2-app',
            templateUrl: 'app-master.html',
            styleUrls: ['app-master.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, header_buttons_comp_1.HeaderButtons, footer_buttons_comp_1.FooterButtons]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home-page-master/...', name: 'HomePageMaster', component: home_page_master_comp_1.HomePageMasterComponent, useAsDefault: true },
            { path: '/organisation-admin-master/...', name: 'OrganisationAdminMaster', component: organisation_admin_master_comp_1.OrganisationAdminMasterComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-master.comp.js.map