/// <reference path="../../app-master/app-master.comp.ts" />
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Component, Directive, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../services/helper/helper.serv';
import {MembersListComponent} from '../members/member-list.comp';
import {ChangeOrganisationComponent} from '../change-organisation/change-organisation.comp';
import {ErrorListComponent} from '../error-list/error-list.comp';
import {RecentLoginsComponent} from '../recent-logins/recent-logins.comp';
import {SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.comp';
import { CommunicationService }     from '../../services/communication/communication.serv';
//import { AppComponent }     from '../../app-master/app-master.comp';

@Component({
    templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
    styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
    directives: [ROUTER_DIRECTIVES, SidebarMenuComponent],
    providers: [CommunicationService]
})

//@RouteConfig([
//    { path: '/member-list', name: 'MembersList', component: MembersListComponent, useAsDefault: true },
//    { path: '/change-organisation', name: 'ChangeOrganisation', component: ChangeOrganisationComponent },
//    { path: '/recent-logins', name: 'RecentLogins', component: RecentLoginsComponent },
//    { path: '/error-list', name: 'ErrorList', component: ErrorListComponent }
//])

export class OrganisationAdminMasterComponent {

    constructor(public router: Router) {
        //constructor(public router: Router, private communicationService: CommunicationService) {
        //constructor(public router: Router, private communicationService: CommunicationService, appComponent: AppComponent) {
        var contrustorThis = this;
        console.log('constructor OrganisationAdminMasterComponent');
        //CommunicationService.getInstance().loggedoutcommunication$.subscribe(
        //    child => {
        //        CommunicationService.getInstance().loggedoutCommunication1(child);
        //    });
    }

    ngOnInit() {
        var tokenValid: boolean = HelperService.tokenIsValid();
        if (tokenValid === false) {
            this.router.navigate(['/home-page', 'login']);
        }
    }
}