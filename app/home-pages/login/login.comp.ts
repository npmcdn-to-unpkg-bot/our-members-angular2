﻿import {Component} from '@angular/core';
import {Router, RouterLink, ROUTER_DIRECTIVES} from '@angular/router';
import {LoginService} from '../../services/login/login.serv';
import {Http, Headers} from '@angular/http';
import {MembersListComponent} from '../../organisation-admin-pages/members/member-list/member-list.comp';
import { NgForm }    from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['login.css'],
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

    loginfinished = () => {
        this.router.navigate(['/organisation-admin-master']);
        //this.router.navigate(['/organisation-admin-master', 'member-list']);
    }

    loginService: LoginService = new LoginService(this.http, this.router);

    okClicked = () => {
        var loginService: LoginService = new LoginService(this.http, this.router);
        this.loginService.authenticate(this.login.UserName, this.login.Password);
    }

}