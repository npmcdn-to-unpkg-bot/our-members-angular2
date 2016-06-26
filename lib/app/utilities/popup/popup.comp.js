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
var PopupComponent = (function () {
    function PopupComponent() {
        var _this = this;
        this.popupVisible = false;
        this.showPopup = function (s) {
            _this.message = s;
            _this.popupVisible = true;
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
            _this.popupVisible = false;
            _this.closed.emit('');
        };
        helper_serv_1.HelperService.log('constructor PopupComponent');
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PopupComponent.prototype, "closed", void 0);
    PopupComponent = __decorate([
        core_1.Component({
            selector: 'popup',
            templateUrl: 'app/utilities/popup/popup.html',
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/utilities/popup/popup.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.comp.js.map