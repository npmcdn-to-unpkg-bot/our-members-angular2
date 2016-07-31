/// <reference path="../../services/login/login.serv.ts" />
import {Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HelperService} from '../../services/helper/helper.serv';
import {SidebarMenuService} from './sidebar-menu.serv';
import {OrganisationAdminMasterComponent} from '../organisation-admin-master/organisation-admin-master.comp';
import {AppComponent} from '../../app-master/app-master.comp';
import {LoginService} from '../../services/login/login.serv';

import { CommunicationService } from '../../services/communication/communication.serv';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'sidebar-menu',
    templateUrl: 'sidebar-menu.html',
    styleUrls: ['sidebar-menu.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [SidebarMenuService, CommunicationService, LoginService]
    //providers: [SidebarMenuService, LoginService, CommunicationService]
})

export class SidebarMenuComponent implements OnDestroy {

    //subscription: Subscription;
    constructor(private router: Router, private sidebarMenuService: SidebarMenuService, private loginService: LoginService) {
        //constructor(private router: Router, private sidebarMenuService: SidebarMenuService, private loginService: LoginService) {
        //constructor(private communicationService: CommunicationService, private router: Router, private sidebarMenuService: SidebarMenuService) {

        console.log('constructor SidebarMenuComponent ');

        //set up a listener to wait for parent to send string
        //this.subscription = communicationService.communicationAnnounced$.subscribe(
        //    communication => {
        //        alert(communication);
        //    });
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        //this.subscription.unsubscribe();
    }


    ngOnInit() {
        this.getAdminLoggedIn();
    }

    getAdminLoggedIn = () => {
        var getAdminLoggedInThis = this;

        if (HelperService.tokenIsValid()) {
            this.sidebarMenuService.getAdminLoggedIn().subscribe(getAdminLoggedInSuccess, logError);
        } else {
            this.router.navigate(['/home-page', 'login']);
        }
        function logError(e: any) {
            console.log('getMembers Error');
            //loadMembersThis.getMembersSuccess = false;
        }

        function getAdminLoggedInSuccess(data: boolean) {
            getAdminLoggedInThis.adminLoggedIn = data;
        }
    };


    adminLoggedIn: boolean = false;

    membersContentDisplay: boolean = true;
    moneyContentDisplay: boolean = false;
    communicationContentDisplay: boolean = false;
    reportsContentDisplay: boolean = false;
    settingsContentDisplay: boolean = false;
    userManagementContentDisplay: boolean = false;
    helpResourcesContentDisplay: boolean = false;
    adminContentDisplay: boolean = false;

    hideAll = () => {
        this.membersContentDisplay = false;
        this.moneyContentDisplay = false;
        this.communicationContentDisplay = false;
        this.reportsContentDisplay = false;
        this.settingsContentDisplay = false;
        this.userManagementContentDisplay = false;
        this.helpResourcesContentDisplay = false;
    }

    membersClick = () => {
        this.hideAll();
        if (this.membersContentDisplay) {
            this.membersContentDisplay = false;
        } else {
            this.membersContentDisplay = true;
        }
    }
    moneyClick = () => {
        this.hideAll();
        if (this.moneyContentDisplay) {
            this.moneyContentDisplay = false;
        } else {
            this.moneyContentDisplay = true;
        }
    }
    communicationClick = () => {
        this.hideAll();
        if (this.communicationContentDisplay) {
            this.communicationContentDisplay = false;
        } else {
            this.communicationContentDisplay = true;
        }
    }
    reportsClick = () => {
        this.hideAll();
        if (this.reportsContentDisplay) {
            this.reportsContentDisplay = false;
        } else {
            this.reportsContentDisplay = true;
        }
    }
    settingsClick = () => {
        this.hideAll();
        if (this.settingsContentDisplay) {
            this.settingsContentDisplay = false;
        } else {
            this.settingsContentDisplay = true;
        }
    }
    userManagementClick = () => {
        this.hideAll();
        if (this.userManagementContentDisplay) {
            this.userManagementContentDisplay = false;
        } else {
            this.userManagementContentDisplay = true;
        }
    }
    helpResourcesClick = () => {
        this.hideAll();
        if (this.helpResourcesContentDisplay) {
            this.helpResourcesContentDisplay = false;
        } else {
            this.helpResourcesContentDisplay = true;
        }
    }
    adminClick = () => {
        this.hideAll();
        if (this.adminContentDisplay) {
            this.adminContentDisplay = false;
        } else {
            if (this.adminLoggedIn) {
                this.adminContentDisplay = true;
            } else {
                this.adminContentDisplay = true;
            }
        }
    }


    logout = () => {
        //CommunicationService.getInstance().loggedoutCommunication(false);
        this.loginService.logout();
        //HelperService.deleteTokenFromStorage();
        //this.router.navigate(['home-page', 'login']);
    }
}