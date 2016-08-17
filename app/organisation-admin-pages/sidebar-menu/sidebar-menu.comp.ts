/// <reference path="../../services/login/login.serv.ts" />
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.serv";
import {SidebarMenuService} from "./sidebar-menu.serv";
import {LoginService} from "../../services/login/login.serv";
import {CommunicationService} from "../../services/communication/communication.serv";

@Component({
    moduleId: module.id,
    selector: 'sidebar-menu',
    templateUrl: 'sidebar-menu.html',
    styleUrls: ['sidebar-menu.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [SidebarMenuService, CommunicationService, LoginService]
})

export class SidebarMenuComponent {

    //subscription: Subscription;
    constructor(private router: Router, private sidebarMenuService: SidebarMenuService, private loginService: LoginService) {
        console.log('constructor SidebarMenuComponent ');
    }

    ngOnInit() {
        this.getAdminLoggedIn();
    }

    getAdminLoggedIn = () => {
        var getAdminLoggedInThis = this;

        if (HelperService.tokenIsValid()) {
            this.sidebarMenuService.getAdminLoggedIn().subscribe(getAdminLoggedInSuccess, logError);
        } else {
            HelperService.sendToLogin(this.router);
        }
        function logError(e: any) {
            console.log('getMembers Error');
            getAdminLoggedInThis.adminLoggedIn = false;
        }

        function getAdminLoggedInSuccess(data: boolean) {
            if (data=== null){
                getAdminLoggedInThis.adminLoggedIn = false;
            } else {
                getAdminLoggedInThis.adminLoggedIn = data;
            }
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