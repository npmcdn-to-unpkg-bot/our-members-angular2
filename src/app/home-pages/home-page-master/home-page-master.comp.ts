import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, Directive, Output, EventEmitter} from 'angular2/core';
import {HomePagesLinks}  from '../home-pages-links/home-pages-links.comp';
import {HomePagesBottomButtons}  from '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
import {HelperService} from '../../helper/helper.serv';
import {HomePage}  from '../home-page/home-page.comp';
import {AboutTrialPeriodComponent}  from '../about-trial-period/about-trial-period.comp';



@Component({
    //selector: 'home-page',
    styleUrls: ['src/app/home-pages/styles/home-pages.css'],
    templateUrl: 'src/app/home-pages/home-page-master/home-page-master.html',
    directives: [ROUTER_DIRECTIVES, HomePagesLinks, HomePagesBottomButtons]
})
@RouteConfig([
        { path: '/home-page-content', name: 'HomePageContent', component: HomePage, useAsDefault: true },
        { path: '/about-trial-period-content', name: 'AboutTrialPeriodContent', component: AboutTrialPeriodComponent}
])

export class HomePageMasterComponent {
}