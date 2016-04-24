import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home-page-content',

    templateUrl: 'src/app/home-pages/home-page/home-page.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class HomePage {

}