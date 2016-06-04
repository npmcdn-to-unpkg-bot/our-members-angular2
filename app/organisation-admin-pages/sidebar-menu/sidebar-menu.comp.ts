import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {SidebarMenuService} from './sidebar-menu.serv';

@Component({
    selector: 'sidebar-menu',
    templateUrl: 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [SidebarMenuService]
})

export class SidebarMenuComponent {
    constructor(private router: Router, private sidebarMenuService: SidebarMenuService) {
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
            this.router.navigate(['Login']);
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
        if (this.adminContentDisplay ) {
            this.adminContentDisplay = false;
        } else {
            if (this.adminLoggedIn) {
                this.adminContentDisplay = true;
            } else {
                this.adminContentDisplay = true;
            }
        }
    }

}