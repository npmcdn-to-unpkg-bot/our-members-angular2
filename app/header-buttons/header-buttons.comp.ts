import {Component, ViewChild} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginComponent} from './login-button/login-button.comp';

@Component({
    moduleId: module.id,
    selector: 'header-buttons',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    templateUrl: 'header-buttons.html',
    styleUrls: ['header-buttons.css']
})

export class HeaderButtons {

    @ViewChild(LoginComponent) loginComponent: LoginComponent;
    showLoginButton = () => {
        this.loginComponent.loggedIn = false;
    }

}