import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'header-buttons',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/header-buttons/header-buttons.html',
    styleUrls: ['app/home-pages/styles/home-pages.css',
        'app/header-buttons/header-buttons.css']
})
     
export class HeaderButtons {

}