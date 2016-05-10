import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CountriesService} from '../../countries/countries.serv';

@Component({
    selector: 'register',

    templateUrl: 'src/app/home-pages/register/register.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/register/register.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [CountriesService]
})

export class RegisterComponent {
    constructor(private countriesService: CountriesService) {
        console.log('constructor RegisterComponent ');
    }

    register: structRegistration = {
        OrganisationName: '',
        RegisterUserName: '',
        Password: '',
        Email: '',
        CountryID: -1,
        TermsOfUse: false
    };
    countries: structIdName[] = [];
    onGetCountriesSuccess: boolean

    ngOnInit() {
        this.loadCountries();
    }

    loadCountries = () => {
        var loadCountriesThis = this;
        this.countriesService.getCountries().subscribe(onGetCountriesSuccess, logCountriesError, complete);
        function logCountriesError(e: any) {
            console.log('getCountries Error');
            console.log(e);
            loadCountriesThis.onGetCountriesSuccess = false;
        }

        function onGetCountriesSuccess(Countries: structIdName[]) {
            loadCountriesThis.countries = Countries;
        }
        function complete() {
            console.log('loadDebtors complete');
        }
    };
}