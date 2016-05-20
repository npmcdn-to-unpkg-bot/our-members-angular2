import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CountriesService} from '../../countries/countries.serv';
import {RegisterService} from './register.serv';
import {UserNameService} from  '../../services/user-name/user-name.serv';


@Component({
    selector: 'register',

    templateUrl: 'src/app/home-pages/register/register.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/register/register.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [CountriesService, RegisterService, UserNameService]
})

export class RegisterComponent {
    constructor(private countriesService: CountriesService, private registerService: RegisterService, private userNameService: UserNameService) {
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
    countries: any[] = [];


    onGetCountriesSuccess: boolean

    ngOnInit() {
        this.loadCountries();
        this.UserNameDuplicate = false;
    }


    okClicked = () => {
        this.registerService.saveNewRegister(this.register).subscribe(addRegistrationSuccess, logError, complete);
        function addRegistrationSuccess() {
            console.log('addRegistrationSuccess')
        }
        function logError() {
            console.log('logError')
        }
        function complete() {
            console.log('complete')
        }
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
            console.log('getCountries complete');
        }
    };

    UserNameDuplicate: boolean;

    userNameBlur = () => {
        var userNameBlurThis = this;
        this.userNameService.checkUserName(userNameBlurThis.register.RegisterUserName).subscribe(onCheckUserNameSuccess, logCheckUserNameError, complete);
        function logCheckUserNameError(e: any) {
            console.log('userNameBlur Error');
            console.log(e);
            userNameBlurThis.UserNameDuplicate = false;
        }
        //var lUserNameDuplicate: boolean
        function onCheckUserNameSuccess(UserNameDuplicate: boolean) {
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
    }
}