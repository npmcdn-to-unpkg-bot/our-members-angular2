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
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var helper_serv_1 = require('../../helper/helper.serv');
var member_list_comp_1 = require('../members/member-list.comp');
var change_organisation_comp_1 = require('../change-organisation/change-organisation.comp');
var error_list_comp_1 = require('../error-list/error-list.comp');
var sidebar_menu_comp_1 = require('../sidebar-menu/sidebar-menu.comp');
var OrganisationAdminMasterComponent = (function () {
    function OrganisationAdminMasterComponent(router) {
        this.router = router;
        console.log('constructor OrganisationAdminMasterComponent');
    }
    OrganisationAdminMasterComponent.prototype.ngOnInit = function () {
        var tokenValid = helper_serv_1.HelperService.tokenIsValid();
        if (tokenValid === false) {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
    };
    OrganisationAdminMasterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
            styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, sidebar_menu_comp_1.SidebarMenuComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/member-list', name: 'MembersList', component: member_list_comp_1.MembersListComponent, useAsDefault: true },
            { path: '/change-organisation', name: 'ChangeOrganisation', component: change_organisation_comp_1.ChangeOrganisationComponent },
            { path: '/error-list', name: 'ErrorList', component: error_list_comp_1.ErrorListComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], OrganisationAdminMasterComponent);
    return OrganisationAdminMasterComponent;
}());
exports.OrganisationAdminMasterComponent = OrganisationAdminMasterComponent;
//# sourceMappingURL=organisation-admin-master.comp.js.map