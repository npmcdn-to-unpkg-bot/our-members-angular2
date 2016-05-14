System.register(['angular2/core', 'angular2/router', '../../countries/countries.serv', './register.serv'], function(exports_1, context_1) {
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
    var core_1, router_1, countries_serv_1, register_serv_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (countries_serv_1_1) {
                countries_serv_1 = countries_serv_1_1;
            },
            function (register_serv_1_1) {
                register_serv_1 = register_serv_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(countriesService, registerService) {
                    var _this = this;
                    this.countriesService = countriesService;
                    this.registerService = registerService;
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
                            console.log('loadDebtors complete');
                        }
                    };
                    console.log('constructor RegisterComponent ');
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.loadCountries();
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'src/app/home-pages/register/register.html',
                        styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/register/register.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [countries_serv_1.CountriesService, register_serv_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [countries_serv_1.CountriesService, register_serv_1.RegisterService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.comp.js.map