import {Component} from '@angular/core';
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from './login.serv';
import {Http, Headers} from '@angular/http';
import {MembersListComponent} from '../../organisation-admin-pages/members/member-list.comp';


@Component({
    selector: 'login',

    templateUrl: 'app/home-pages/login/login.html',
    styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/login/login.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

export class LoginComponent {
    constructor(private router: Router, private http: Http) {
        console.log('constructor LoginComponent ');
    }

    login: structLogin = {
        UserName: '',
        Password: '',
    };

    ngOnInit() {

    }

    loginfinished() {
        this.router.parent.navigate(['OrganisationAdminMaster']);
    }

    loginService: LoginService = new LoginService(this.http, this.router, this.loginfinished);

    okClicked = () => {
        var loginService: LoginService = new LoginService(this.http, this.router, this.loginfinished);
        this.loginService.authenticate(this.login.UserName, this.login.Password);
    }

}