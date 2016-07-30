import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'about-help',

    templateUrl: 'about-help.html',
    styleUrls: ['about-help.css'],
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