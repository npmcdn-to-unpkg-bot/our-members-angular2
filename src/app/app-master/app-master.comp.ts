import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HelperService} from '../helper/helper.serv';
import {HomePageMasterComponent} from '../home-pages/home-page-master/home-page-master.comp';
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
    { path: '/', redirectTo: ['HomePageMaster'] },
    { path: '/home-page-master/...', name: 'HomePageMaster', component: HomePageMasterComponent}//,
    //{ path: '/about-trial-period', name: 'AboutTrialPeriod', component: AboutTrialPeriodComponent }
])

export class AppComponent {

    constructor() {
        console.log('constructor AppComponent');
    }

    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    threeLineButtonDisplay: string = '';

    showHideThreeLineButton(): void {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        } else {
            this.threeLineButtonDisplay = 'none';
        }
    }


}
