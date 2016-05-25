import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';

@Component({
    selector: 'sidebar-menu',
    templateUrl: 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/sidebar-menu/sidebar-menu.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: []
})

export class SidebarMenuComponent {
    constructor(private router: Router) {
        console.log('constructor SidebarMenuComponent ');
    }

    ngOnInit() {
    }
    membersContentDisplay: boolean = true;
    moneyContentDisplay: boolean = false;
    communicationContentDisplay: boolean = false;
    reportsContentDisplay: boolean = false;
    settingsContentDisplay: boolean = false;
    userManagementContentDisplay: boolean = false;
    helpResourcesContentDisplay: boolean = false;

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

}