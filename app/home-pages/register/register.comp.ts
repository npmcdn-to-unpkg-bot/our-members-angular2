import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {CountriesService} from '../../services/countries/countries.serv';
import {RegisterService} from './register.serv';
import {UserNameService} from  '../../services/user-name/user-name.serv';
import { NgForm }    from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.html',
    styleUrls: ['register.css'],
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
        if (userNameBlurThis.register.RegisterUserName !== '') { 
            this.userNameService.checkUserName(userNameBlurThis.register.RegisterUserName).subscribe(onCheckUserNameSuccess, logCheckUserNameError, complete);
        }
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