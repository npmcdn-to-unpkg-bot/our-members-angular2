import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'home-page-content',
    templateUrl: 'home-page.html',
    styleUrls: ['home-page.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class HomePage {

}