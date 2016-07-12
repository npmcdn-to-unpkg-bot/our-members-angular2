import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Component, Directive, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../helper/helper.serv';
import {MembersListComponent} from '../members/member-list.comp';
import {ChangeOrganisationComponent} from '../change-organisation/change-organisation.comp';
import {ErrorListComponent} from '../error-list/error-list.comp';
import {RecentLoginsComponent} from '../recent-logins/recent-logins.comp';
import {SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.comp';

@Component({
    templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
    styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
    directives: [ROUTER_DIRECTIVES, SidebarMenuComponent]
})

@RouteConfig([
    { path: '/member-list', name: 'MembersList', component: MembersListComponent, useAsDefault: true },
    { path: '/change-organisation', name: 'ChangeOrganisation', component: ChangeOrganisationComponent },
    { path: '/recent-logins', name: 'RecentLogins', component: RecentLoginsComponent },
    { path: '/error-list', name: 'ErrorList', component: ErrorListComponent }
])

export class OrganisationAdminMasterComponent {

    constructor(private router: Router) {
        console.log('constructor OrganisationAdminMasterComponent');
    }

    ngOnInit() {
        var tokenValid: boolean = HelperService.tokenIsValid();
        if (tokenValid === false) {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
    }

}