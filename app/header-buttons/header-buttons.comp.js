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
var router_1 = require('@angular/router');
var communication_serv_1 = require('../services/communication/communication.serv');
var HeaderButtons = (function () {
    function HeaderButtons(router) {
        var _this = this;
        this.router = router;
        this.loginButtonClicked = function () {
            if (_this.loggedIn) {
                _this.router.navigate(['/organisation-admin-master']);
            }
            else {
                _this.router.navigate(['/home-page', 'login']);
            }
        };
        this.loggedIn = false;
        this.loginButtonText = 'Login';
        this.changeLoginState = function (loggedIn) {
            var changeLoginStateThis = _this;
            changeLoginStateThis.loggedIn = loggedIn;
            if (loggedIn) {
                changeLoginStateThis.loginButtonText = 'Return to my iB2';
            }
            else {
                changeLoginStateThis.loginButtonText = 'Login';
            }
        };
        communication_serv_1.CommunicationService.getInstance().loggedoutcommunication$.subscribe(function (loggedIn) {
            _this.changeLoginState(loggedIn);
        });
    }
    HeaderButtons = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-buttons',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'header-buttons.html',
            styleUrls: ['header-buttons.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeaderButtons);
    return HeaderButtons;
}());
exports.HeaderButtons = HeaderButtons;
//# sourceMappingURL=header-buttons.comp.js.map