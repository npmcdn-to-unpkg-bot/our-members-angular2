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
//import {FORM_DIRECTIVES, FormBuilder,Validators} from '@angular/forms';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var countries_serv_1 = require("../../services/countries/countries.serv");
var register_serv_1 = require("./register.serv");
var user_name_serv_1 = require("../../services/user-name/user-name.serv");
var confirm_comp_1 = require("../../utilities/confirm/confirm.comp");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(countriesService, registerService, userNameService) {
        var _this = this;
        this.countriesService = countriesService;
        this.registerService = registerService;
        this.userNameService = userNameService;
        this.register = {
            OrganisationName: '',
            RegisterUserName: '',
            Password: '',
            Email: '',
            CountryID: -1,
            TermsOfUse: false
        };
        this.countries = [];
        this.okClicked = function () {
            _this.registerService.saveNewRegister(_this.register).subscribe(addRegistrationSuccess, logError, complete);
            function addRegistrationSuccess() {
                console.log('addRegistrationSuccess');
            }
            function logError() {
                console.log('logError');
            }
            function complete() {
                console.log('complete');
            }
        };
        this.loadCountries = function () {
            var loadCountriesThis = _this;
            _this.countriesService.getCountries().subscribe(onGetCountriesSuccess, logCountriesError, complete);
            function logCountriesError(e) {
                console.log('getCountries Error');
                console.log(e);
                loadCountriesThis.onGetCountriesSuccess = false;
            }
            function onGetCountriesSuccess(Countries) {
                loadCountriesThis.countries = Countries;
            }
            function complete() {
                console.log('getCountries complete');
            }
        };
        this.userNameBlur = function () {
            var userNameBlurThis = _this;
            if (userNameBlurThis.register.RegisterUserName !== '') {
                _this.userNameService.checkUserName(userNameBlurThis.register.RegisterUserName).subscribe(onCheckUserNameSuccess, logCheckUserNameError, complete);
            }
            function logCheckUserNameError(e) {
                console.log('userNameBlur Error');
                console.log(e);
                userNameBlurThis.UserNameDuplicate = false;
            }
            function onCheckUserNameSuccess(UserNameDuplicate) {
                userNameBlurThis.UserNameDuplicate = UserNameDuplicate;
            }
            function complete() {
                console.log('userNameBlur complete');
            }
        };
        console.log('constructor RegisterComponent ');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loadCountries();
        this.UserNameDuplicate = false;
    };
    RegisterComponent.prototype.canDeactivate = function () {
        return this.confirmComponent.showConfirm('Are you sure you want to leave this form?');
    };
    __decorate([
        core_1.ViewChild('registerForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], RegisterComponent.prototype, "registerForm", void 0);
    __decorate([
        core_1.ViewChild(confirm_comp_1.ConfirmComponent), 
        __metadata('design:type', confirm_comp_1.ConfirmComponent)
    ], RegisterComponent.prototype, "confirmComponent", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.html',
            styleUrls: ['register.css'],
            directives: [router_1.ROUTER_DIRECTIVES, confirm_comp_1.ConfirmComponent],
            //directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, ConfirmComponent],
            providers: [countries_serv_1.CountriesService, register_serv_1.RegisterService, user_name_serv_1.UserNameService, confirm_comp_1.ConfirmComponent
            ]
        }), 
        __metadata('design:paramtypes', [countries_serv_1.CountriesService, register_serv_1.RegisterService, user_name_serv_1.UserNameService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.comp.js.map