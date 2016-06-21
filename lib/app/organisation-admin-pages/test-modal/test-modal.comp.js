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
//import { Modal, IN_APP_MODAL_PROVIDERS as MODAL_P } from './custom_plugin';
var TestModal = (function () {
    function TestModal(modal, viewContainer) {
        this.modal = modal;
        this.viewContainer = viewContainer;
        modal.defaultViewContainer = viewContainer;
    }
    TestModal.prototype.open = function (template) {
        this.modal.alert()
            .title('Angular 2 Modal')
            .templateRef(template)
            .open();
    };
    TestModal = __decorate([
        core_1.Component({
            selector: 'test-modal',
            template: "\n  <h1>Angular 2 Modal - TemplateRef sample</h1>\n  <button class=\"btn-primary\" (click)='open(myTemplate)'>Open Modal</button>\n  <template #myTemplate>\n      <h1>A Plugin using a TemplateRef!</h1>\n  </template>\n",
            directives: [],
            providers: [bootstrap_1.BS_MODAL_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [bootstrap_1.Modal, core_1.ViewContainerRef])
    ], TestModal);
    return TestModal;
}());
exports.TestModal = TestModal;
//# sourceMappingURL=test-modal.comp.js.map