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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var helper_serv_1 = require("../services/helper/helper.serv");
var header_buttons_comp_1 = require("../header-buttons/header-buttons.comp");
var footer_buttons_comp_1 = require("../home-pages/footer-buttons/footer-buttons.comp");
// import {HomePagesLinks}  from '../home-pages/home-pages-links/home-pages-links.comp';
// import {HomePagesBottomButtons}  from '../home-pages/home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
//import {RuntimeCompiler} from '@angular/compiler';
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'iB2';
        this.tokenValid = helper_serv_1.HelperService.tokenIsValid();
        this.showLoginButton = function (loggedIn) {
            _this.headerButtons.changeLoginState(loggedIn);
        };
        this.threeLineButtonDisplay = 'none';
        //constructor(private runtimeCompiler: RuntimeCompiler) {
        console.log('constructor AppComponent');
        //runtimeCompiler.clearCache();
    }
    AppComponent.prototype.showHideThreeLineButton = function () {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        }
        else {
            this.threeLineButtonDisplay = 'none';
        }
    };
    __decorate([
        core_1.ViewChild(header_buttons_comp_1.HeaderButtons), 
        __metadata('design:type', header_buttons_comp_1.HeaderButtons)
    ], AppComponent.prototype, "headerButtons", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ib2-app',
            templateUrl: 'app-master.html',
            styleUrls: ['app-master.css'],
            directives: [router_1.ROUTER_DIRECTIVES, header_buttons_comp_1.HeaderButtons, footer_buttons_comp_1.FooterButtons]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-master.comp.js.map