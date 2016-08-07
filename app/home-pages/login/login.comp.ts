/// <reference path="../../services/communication/communication.serv.ts" />
/// <reference path="../../services/helper/helper.serv.ts" />
import {Component} from '@angular/core';
import {Router, RouterLink, ROUTER_DIRECTIVES} from '@angular/router';
import {LoginService} from '../../services/login/login.serv';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {MembersListComponent} from '../../organisation-admin-pages/members/member-list/member-list.comp';
import { NgForm }    from '@angular/forms';
import { HelperService}    from '../../services/helper/helper.serv';
import { CommunicationService}    from '../../services/communication/communication.serv';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['login.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

export class LoginComponent {
    constructor(public router: Router, public http: Http, public loginService: LoginService) {
        console.log('constructor LoginComponent ');
    }

    structLogin: structLogin = {
        UserName: '',
        Password: '',
    };

    ngOnInit() {
    }

    okClicked = () => {
        this.loginService.authenticate(this.structLogin.UserName, this.structLogin.Password);
    }
}