import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'home-pages-links',
    directives: [ROUTER_DIRECTIVES],

    templateUrl: 'app/home-pages/home-pages-links/home-pages-links.html',
    styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/home-pages-links/home-pages-links.css']
})

export class HomePagesLinks {

}