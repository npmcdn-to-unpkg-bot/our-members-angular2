import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header-buttons',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'src/app/header-buttons/header-buttons.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css',
        'src/app/header-buttons/header-buttons.css']
})
     
export class HeaderButtons {

}