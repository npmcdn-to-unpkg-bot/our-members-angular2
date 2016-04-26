import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-finances',

    templateUrl: 'src/app/home-pages/about-finances/about-finances.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/about-finances/about-finances.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutFinancesComponent {

}