System.register(['@angular/core', '@angular/router-deprecated', '../../countries/countries.serv', './register.serv', '../../services/user-name/user-name.serv'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, countries_serv_1, register_serv_1, user_name_serv_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (countries_serv_1_1) {
                countries_serv_1 = countries_serv_1_1;
            },
            function (register_serv_1_1) {
                register_serv_1 = register_serv_1_1;
            },
            function (user_name_serv_1_1) {
                user_name_serv_1 = user_name_serv_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
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
                        _this.userNameService.checkUserName(userNameBlurThis.register.RegisterUserName).subscribe(onCheckUserNameSuccess, logCheckUserNameError, complete);
                        function logCheckUserNameError(e) {
                            console.log('userNameBlur Error');
                            console.log(e);
                            userNameBlurThis.UserNameDuplicate = false;
                        }
                        //var lUserNameDuplicate: boolean
                        function onCheckUserNameSuccess(UserNameDuplicate) {
                            userNameBlurThis.UserNameDuplicate = UserNameDuplicate;
                            //lUserNameDuplicate = UserNameDuplicate;
                            //setTimeout(asdff, 1000);
                        }
                        //function asdff() {
                        //    userNameBlurThis.UserNameDuplicate = lUserNameDuplicate;
                        //}
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
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/home-pages/register/register.html',
                        styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/register/register.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [countries_serv_1.CountriesService, register_serv_1.RegisterService, user_name_serv_1.UserNameService]
                    }), 
                    __metadata('design:paramtypes', [countries_serv_1.CountriesService, register_serv_1.RegisterService, user_name_serv_1.UserNameService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.comp.js.map