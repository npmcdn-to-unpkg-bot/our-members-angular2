import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'about-help',

    templateUrl: 'app/home-pages/about-help/about-help.html',
    styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/about-help/about-help.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutHelpComponent {
    displaySettingManagingOrganisation: boolean = false;
    displaySettingManagingMembers: boolean = false;
    displaySettingManagingFinances: boolean = false;
    displayManagingMemberCommunications: boolean = false;
    displayManagingEvents: boolean = false;
    displayReporting: boolean = false;
    displayFAQs: boolean = false;

    toggleSettingManagingOrganisation() {
        if (this.displaySettingManagingOrganisation) {
            this.displaySettingManagingOrganisation = false;
        } else {
            this.displaySettingManagingOrganisation = true;
        }
    }
    toggleSettingManagingMembers() {
        if (this.displaySettingManagingMembers) {
            this.displaySettingManagingMembers = false;
        } else {
            this.displaySettingManagingMembers = true;
        }
    }
    toggleSettingManagingFinances() {
        if (this.displaySettingManagingFinances) {
            this.displaySettingManagingFinances = false;
        } else {
            this.displaySettingManagingFinances = true;
        }
    }
    toggleManagingMemberCommunications() {
        if (this.displayManagingMemberCommunications) {
            this.displayManagingMemberCommunications = false;
        } else {
            this.displayManagingMemberCommunications = true;
        }
    }
    toggleManagingEvents() {
        if (this.displayManagingEvents) {
            this.displayManagingEvents = false;
        } else {
            this.displayManagingEvents = true;
        }
    }
    toggleReporting() {
        if (this.displayReporting) {
            this.displayReporting = false;
        } else {
            this.displayReporting = true;
        }
    }
    toggleFAQs() {
        if (this.displayFAQs) {
            this.displayFAQs = false;
        } else {
            this.displayFAQs = true;
        }
    }


}