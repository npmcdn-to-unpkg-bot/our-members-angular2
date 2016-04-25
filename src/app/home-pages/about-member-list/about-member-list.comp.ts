import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-member-list',

    templateUrl: 'src/app/home-pages/about-member-list/about-member-list.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/about-member-list/about-member-list.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutMemberListComponent {

}