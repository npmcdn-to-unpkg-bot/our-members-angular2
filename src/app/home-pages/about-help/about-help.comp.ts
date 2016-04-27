import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-help',

    templateUrl: 'src/app/home-pages/about-help/about-help.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/about-help/about-help.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutHelpComponent {

}