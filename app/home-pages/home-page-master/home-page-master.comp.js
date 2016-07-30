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
var home_pages_links_comp_1 = require('../home-pages-links/home-pages-links.comp');
var home_pages_bottom_buttons_comp_1 = require('../home-pages-bottom-buttons/home-pages-bottom-buttons.comp');
var HomePageMasterComponent = (function () {
    function HomePageMasterComponent() {
    }
    HomePageMasterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home-page-master.html',
            directives: [router_1.ROUTER_DIRECTIVES, home_pages_links_comp_1.HomePagesLinks, home_pages_bottom_buttons_comp_1.HomePagesBottomButtons]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageMasterComponent);
    return HomePageMasterComponent;
}());
exports.HomePageMasterComponent = HomePageMasterComponent;
//# sourceMappingURL=home-page-master.comp.js.map