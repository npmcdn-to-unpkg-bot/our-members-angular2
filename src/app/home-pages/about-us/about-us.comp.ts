import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-us',

    templateUrl: 'src/app/home-pages/about-us/about-us.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/about-us/about-us.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutUsComponent {

}