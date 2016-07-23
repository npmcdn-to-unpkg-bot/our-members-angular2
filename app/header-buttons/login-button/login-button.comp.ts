import {Component} from '@angular/core';
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from './login-button.serv';
import {Http, Headers} from '@angular/http';
import {MembersListComponent} from '../../organisation-admin-pages/members/member-list.comp';
import {HelperService} from '../../services/helper/helper.serv';
//import { CommunicationService }     from '../../services/communication/communication.serv';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login-button.html',
    styleUrls: ['login-button.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
    //providers: [LoginService, CommunicationService]
})

export class LoginComponent {
    constructor(private router: Router, private http: Http) {
        //constructor(private router: Router, private http: Http, private communicationService: CommunicationService) {
        var constructorThis = this;
        console.log('constructor LoginComponent ');
        //set up a listener to wait for loggout
        //communicationService.communicationConfirmed$.subscribe(
        //    child => {
        //        alert(child);
        //    });
    }

    showLoginForm = () => {
        this.loginFormVisible = true;
    }

    loginFormVisible: boolean = false;
    loggedIn: boolean = false;
    loginUserName: string;

    login: structLogin = {
        UserName: '',
        Password: '',
    };

    ngOnInit() {
    }

    okClicked = () => {
        var okClickedThis = this;
        var loginService: LoginService = new LoginService(this.http, this.router, loginfinished);
        loginService.authenticate(this.login.UserName, this.login.Password);

        function loginfinished() {
            okClickedThis.router.navigate(['OrganisationAdminMaster']);
            okClickedThis.loginFormVisible = false;
            okClickedThis.loggedIn = true;
            okClickedThis.loginUserName = HelperService.getUsername();
            //this.router.parent.navigate(['OrganisationAdminMaster']);
        }

    }

}