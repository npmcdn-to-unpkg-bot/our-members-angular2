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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var helper_serv_1 = require('../../services/helper/helper.serv');
var sidebar_menu_comp_1 = require('../sidebar-menu/sidebar-menu.comp');
var communication_serv_1 = require('../../services/communication/communication.serv');
//import { AppComponent }     from '../../app-master/app-master.comp';
var OrganisationAdminMasterComponent = (function () {
    function OrganisationAdminMasterComponent(router) {
        this.router = router;
        //constructor(public router: Router, private communicationService: CommunicationService) {
        //constructor(public router: Router, private communicationService: CommunicationService, appComponent: AppComponent) {
        var contrustorThis = this;
        console.log('constructor OrganisationAdminMasterComponent');
        //CommunicationService.getInstance().loggedoutcommunication$.subscribe(
        //    child => {
        //        CommunicationService.getInstance().loggedoutCommunication1(child);
        //    });
    }
    OrganisationAdminMasterComponent.prototype.ngOnInit = function () {
        var tokenValid = helper_serv_1.HelperService.tokenIsValid();
        if (tokenValid === false) {
            helper_serv_1.HelperService.sendToLogin(this.router);
        }
    };
    OrganisationAdminMasterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
            styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
            directives: [router_1.ROUTER_DIRECTIVES, sidebar_menu_comp_1.SidebarMenuComponent],
            providers: [communication_serv_1.CommunicationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OrganisationAdminMasterComponent);
    return OrganisationAdminMasterComponent;
}());
exports.OrganisationAdminMasterComponent = OrganisationAdminMasterComponent;
//# sourceMappingURL=organisation-admin-master.comp.js.map