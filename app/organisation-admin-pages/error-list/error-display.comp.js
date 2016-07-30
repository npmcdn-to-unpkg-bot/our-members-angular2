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
//import { ROUTER_DIRECTIVES, Router} from '@angular/router';
var helper_serv_1 = require('../../services/helper/helper.serv');
var error_display_serv_1 = require('./error-display.serv');
var ErrorDisplayComponent = (function () {
    function ErrorDisplayComponent(errorDisplayService) {
        var _this = this;
        this.errorDisplayService = errorDisplayService;
        this.structError = {
            ErrorID: -1,
            ErrorDate: new Date(),
            Message: '',
            Stack: '',
            UserName: '',
            OrganisationName: ''
        };
        this.displayError = function (structError) {
            _this.structError = structError;
            _this.errorDisplayVisible = true;
        };
        this.closed = new core_1.EventEmitter();
        this.errorDisplayVisible = false;
        this.testEsc = function (event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                _this.cancelErrorDisplay();
            }
        };
        this.deleteError = function () {
            var deleteErrorthis = _this;
            _this.errorDisplayService.deleteError(_this.structError.ErrorID).subscribe(onDeleteErrorSuccess, onDeleteErrorError);
            function onDeleteErrorSuccess() {
                deleteErrorthis.errorDisplayVisible = false;
                deleteErrorthis.closed.emit(helper_serv_1.HelperService.C_TRUE);
                window.onkeyup = null;
            }
            function onDeleteErrorError() {
                helper_serv_1.HelperService.log('deleteError Error');
            }
        };
        this.cancelErrorDisplay = function () {
            window.onkeyup = null;
            _this.errorDisplayVisible = false;
            _this.closed.emit(helper_serv_1.HelperService.C_FALSE);
        };
        helper_serv_1.HelperService.log('constructor ErrorDisplayComponent');
    }
    ErrorDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ErrorDisplayComponent.prototype, "closed", void 0);
    ErrorDisplayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'errorDisplayModal',
            templateUrl: 'error-display.html',
            providers: [error_display_serv_1.ErrorDisplayService]
        }), 
        __metadata('design:paramtypes', [error_display_serv_1.ErrorDisplayService])
    ], ErrorDisplayComponent);
    return ErrorDisplayComponent;
}());
exports.ErrorDisplayComponent = ErrorDisplayComponent;
//# sourceMappingURL=error-display.comp.js.map