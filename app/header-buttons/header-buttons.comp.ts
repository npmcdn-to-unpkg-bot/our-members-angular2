import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {CommunicationService} from  '../services/communication/communication.serv';

@Component({
    moduleId: module.id,
    selector: 'header-buttons',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'header-buttons.html',
    styleUrls: ['header-buttons.css']
})

export class HeaderButtons {

    constructor(private router: Router) {
        CommunicationService.getInstance().loggedoutcommunication$.subscribe(
            loggedIn => {
                this.changeLoginState(loggedIn);
            });
    }

    loginButtonClicked = () => {
        if (this.loggedIn) {
            this.router.navigate(['organisation-admin-master']);
        } else {
            this.router.navigate(['home-page', 'login']);
        }
    }

    loggedIn: boolean = false;

    loginButtonText: string = 'Login';

    changeLoginState = (loggedIn: boolean) => {
        var changeLoginStateThis = this;
        changeLoginStateThis.loggedIn = loggedIn;
        if (loggedIn) {
            changeLoginStateThis.loginButtonText = 'Return to my iB2';
        } else {
            changeLoginStateThis.loginButtonText = 'Login';
        }
    }
}