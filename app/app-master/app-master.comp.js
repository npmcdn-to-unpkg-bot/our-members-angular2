System.register(['@angular/core', '@angular/router-deprecated', '../helper/helper.serv', '../home-pages/home-page-master/home-page-master.comp', '../header-buttons/header-buttons.comp', '../home-pages/footer-buttons/footer-buttons.comp', '../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, helper_serv_1, home_page_master_comp_1, header_buttons_comp_1, footer_buttons_comp_1, organisation_admin_master_comp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (helper_serv_1_1) {
                helper_serv_1 = helper_serv_1_1;
            },
            function (home_page_master_comp_1_1) {
                home_page_master_comp_1 = home_page_master_comp_1_1;
            },
            function (header_buttons_comp_1_1) {
                header_buttons_comp_1 = header_buttons_comp_1_1;
            },
            function (footer_buttons_comp_1_1) {
                footer_buttons_comp_1 = footer_buttons_comp_1_1;
            },
            function (organisation_admin_master_comp_1_1) {
                organisation_admin_master_comp_1 = organisation_admin_master_comp_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
                        selector: 'ib2-app',
                        templateUrl: 'app/app-master/app-master.html',
                        styleUrls: ['app/app-master/app-master.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, header_buttons_comp_1.HeaderButtons, footer_buttons_comp_1.FooterButtons]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', redirectTo: ['HomePageMaster'] },
                        { path: '/home-page-master/...', name: 'HomePageMaster', component: home_page_master_comp_1.HomePageMasterComponent },
                        { path: '/organisation-admin-master/...', name: 'OrganisationAdminMaster', component: organisation_admin_master_comp_1.OrganisationAdminMasterComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-master.comp.js.map