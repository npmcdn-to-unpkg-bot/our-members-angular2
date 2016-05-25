import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'about-us',

    templateUrl: 'app/home-pages/about-us/about-us.html',
    styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/about-us/about-us.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutUsComponent {

}