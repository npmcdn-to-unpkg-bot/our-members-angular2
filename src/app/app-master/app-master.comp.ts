/// <reference path="../home-pages/home-page/home-page.comp.ts" />
/// <reference path="../helper/helper.serv.ts" />
/// <reference path="../home-pages/header-buttons/header-buttons.comp.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HelperService} from '../helper/helper.serv';
import {HomePageComponent} from '../home-pages/home-page/home-page.comp';
import {AboutTrialPeriodComponent} from '../home-pages/about-trial-period/about-trial-period.comp';
import {HeaderButtons} from  '../home-pages/header-buttons/header-buttons.comp';
import {FooterButtons} from  '../home-pages/footer-buttons/footer-buttons.comp';


@Component({
    selector: 'ib2-app',
    templateUrl: 'src/app/app-master/app-master.html',
    styleUrls: ['src/app/app-master/app-master.css'],
    directives: [ROUTER_DIRECTIVES, HeaderButtons, FooterButtons]

})
@RouteConfig([
    { path: '/', redirectTo: ['HomePage'] },
    { path: '/home', name: 'HomePage', component: HomePageComponent },
    { path: '/about-trial-period', name: 'AboutTrialPeriod', component: AboutTrialPeriodComponent }
])
export class AppComponent {
    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    testBool: boolean = true;

    //static deviceCutoffWidth: number = 768;

    ngOnInit() {
        //this.tokenValid = HelperService.tokenIsValid();

        //this.navbarWithoutJquery()
    }

    threeLineButtonDisplay: string = '';

    showHideThreeLineButton(): void {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        } else {
            this.threeLineButtonDisplay = 'none';
        }
    }
}
