//import {FORM_DIRECTIVES, FormBuilder,Validators} from '@angular/forms';
import {Component, ViewChild} from "@angular/core";
import {ROUTER_DIRECTIVES, CanDeactivate} from "@angular/router";
import {CountriesService} from "../../services/countries/countries.serv";
import {RegisterService} from "./register.serv";
import {UserNameService} from "../../services/user-name/user-name.serv";
import {ConfirmComponent} from "../../utilities/confirm/confirm.comp";
import {NgForm} from "@angular/forms";


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.html',
    styleUrls: ['register.css'],
    directives: [ROUTER_DIRECTIVES, ConfirmComponent],
    //directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, ConfirmComponent],
    providers: [CountriesService, RegisterService, UserNameService, ConfirmComponent
    ]
})

export class RegisterComponent implements CanDeactivate<boolean> {
    constructor(private countriesService: CountriesService, private registerService: RegisterService, private userNameService: UserNameService) {
        console.log('constructor RegisterComponent ');
    }

    @ViewChild('registerForm') public registerForm: NgForm;

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

        function onCheckUserNameSuccess(UserNameDuplicate: boolean) {
            userNameBlurThis.UserNameDuplicate = UserNameDuplicate;
        }

        function complete() {
            console.log('userNameBlur complete');
        }
    }

    @ViewChild(ConfirmComponent) confirmComponent: ConfirmComponent;

    canDeactivate() {
        return this.confirmComponent.showConfirm('Are you sure you want to leave this form?');
    }
}

