import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'footer-buttons',

    templateUrl: 'src/app/home-pages/footer-buttons/footer-buttons.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/footer-buttons/footer-buttons.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class FooterButtons {

}