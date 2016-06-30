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
var helper_serv_1 = require('../../helper/helper.serv');
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        var _this = this;
        this.confirmVisible = false;
        this.showConfirm = function (s, returnFunction) {
            _this.returnFunction = returnFunction;
            _this.message = s;
            _this.confirmVisible = true;
            window.onkeyup = _this.testEsc;
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
            _this.confirmVisible = false;
            _this.closed.emit('false');
        };
        this.ok = function () {
            window.onkeyup = null;
            _this.confirmVisible = false;
            _this.returnFunction();
            _this.closed.emit('true');
        };
        helper_serv_1.HelperService.log('constructor ConfirmComponent');
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ConfirmComponent.prototype, "closed", void 0);
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'confirm',
            templateUrl: 'app/utilities/confirm/confirm.html',
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/utilities/confirm/confirm.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.comp.js.map