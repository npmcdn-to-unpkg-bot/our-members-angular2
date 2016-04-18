import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home-pages-links',
    directives: [ROUTER_DIRECTIVES],

    templateUrl: 'src/app/home-pages/home-pages-links/home-pages-links.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/home-pages-links/home-pages-links.css']
})

export class HomePagesLinks {

}