import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Component, Directive, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../helper/helper.serv';
import {MembersListComponent} from '../members/member-list.comp';
import {SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.comp';



@Component({
    templateUrl: 'app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.html',
    styleUrls: ['app/organisation-admin-pages/organisation-admin-master/organisation-admin-master.css'],
    directives: [ROUTER_DIRECTIVES, SidebarMenuComponent]
})

@RouteConfig([
        { path: '/member-list', name: 'MembersList', component: MembersListComponent, useAsDefault: true }
])

export class OrganisationAdminMasterComponent {

    constructor() {
        console.log('constructor OrganisationAdminMasterComponent');
    }
}