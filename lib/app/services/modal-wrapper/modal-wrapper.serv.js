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
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var ModalWrapperService = (function () {
    function ModalWrapperService(modal) {
        var _this = this;
        this.modal = modal;
        this.showPopup = function (s) {
            _this.modal.alert()
                .size('lg')
                .showClose(true)
                .body(s)
                .open();
        };
        if (!ModalWrapperService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call ModalWrapperService.getInstance() instead.");
        }
        console.log('constructor ModalWrapperService');
    }
    ModalWrapperService.getInstance = function (modal) {
        if (ModalWrapperService.instance == null) {
            ModalWrapperService.isCreating = true;
            ModalWrapperService.instance = new ModalWrapperService(modal);
            ModalWrapperService.isCreating = false;
        }
        return ModalWrapperService.instance;
    };
    ModalWrapperService.isCreating = false;
    ModalWrapperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], ModalWrapperService);
    return ModalWrapperService;
}());
exports.ModalWrapperService = ModalWrapperService;
//# sourceMappingURL=modal-wrapper.serv.js.map