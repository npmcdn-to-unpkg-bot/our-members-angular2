import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'home-page-content',

    templateUrl: 'app/home-pages/home-page/home-page.html',
    styleUrls: ['app/home-pages/styles/home-pages.css', 'app/home-pages/home-page/home-page.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class HomePage {

}