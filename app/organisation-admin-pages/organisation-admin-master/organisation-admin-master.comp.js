System.register(['@angular/router-deprecated', '@angular/core', '../members/member-list.comp'], function(exports_1, context_1) {
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
    var router_deprecated_1, core_1, member_list_comp_1;
    var OrganisationAdminMasterComponent;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (member_list_comp_1_1) {
                member_list_comp_1 = member_list_comp_1_1;
            }],
        execute: function() {
            OrganisationAdminMasterComponent = (function () {
                function OrganisationAdminMasterComponent() {
                    var _this = this;
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
                }
                OrganisationAdminMasterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
                        styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/member-list', name: 'MembersList', component: member_list_comp_1.MembersListComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], OrganisationAdminMasterComponent);
                return OrganisationAdminMasterComponent;
            }());
            exports_1("OrganisationAdminMasterComponent", OrganisationAdminMasterComponent);
        }
    }
});
//# sourceMappingURL=organisation-admin-master.comp.js.map