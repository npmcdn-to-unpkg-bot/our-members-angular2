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
var helper_serv_1 = require('../../../services/helper/helper.serv');
var RegisterForSeasonComponent = (function () {
    function RegisterForSeasonComponent() {
        var _this = this;
        this.visible = false;
        this.showForm = function (OrganisationMemberID) {
            _this.visible = true;
            window.onkeyup = _this.testEsc;
            //loadForm();
        };
        this.testEsc = function (event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                _this.cancel();
            }
        };
        this.message = '';
        //cancelMember
        this.closed = new core_1.EventEmitter();
        this.cancel = function () {
            window.onkeyup = null;
            _this.visible = false;
            _this.closed.emit('false');
        };
        this.ok = function () {
            window.onkeyup = null;
            _this.visible = false;
            //this.returnFunction();
            _this.closed.emit('true');
        };
        helper_serv_1.HelperService.log('constructor ConfirmComponent');
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RegisterForSeasonComponent.prototype, "closed", void 0);
    RegisterForSeasonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'confirm',
            templateUrl: 'confirm.html',
            styleUrls: ['confirm.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterForSeasonComponent);
    return RegisterForSeasonComponent;
}());
exports.RegisterForSeasonComponent = RegisterForSeasonComponent;
//# sourceMappingURL=register-for-season.comp.js.map