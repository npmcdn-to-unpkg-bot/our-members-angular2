import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';
//import {LoginComponent} from './login-button/login-button.comp';

@Component({
    moduleId: module.id,
    selector: 'header-buttons',
    //directives: [LoginComponent, RouterLink],
    directives: [ROUTER_DIRECTIVES],
    //directives: [ROUTER_DIRECTIVES, LoginComponent],
    templateUrl: 'header-buttons.html',
    styleUrls: ['header-buttons.css']
    //providers: [Router]
})

export class HeaderButtons {

    //@ViewChild(LoginComponent) loginComponent: LoginComponent;
    //showLoginButton = () => {
    //    this.loginComponent.loggedIn = false;
    //}

}