import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HelperService} from '../helper/helper.serv';
import {HomePageMasterComponent} from '../home-pages/home-page-master/home-page-master.comp';
import {AboutTrialPeriodComponent} from '../home-pages/about-trial-period/about-trial-period.comp';
import {HeaderButtons} from  '../header-buttons/header-buttons.comp';
import {FooterButtons} from  '../home-pages/footer-buttons/footer-buttons.comp';
import {OrganisationAdminMasterComponent} from  '../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp';


@Component({
    selector: 'ib2-app',
    templateUrl: 'app/app-master/app-master.html',
    styleUrls: ['app/app-master/app-master.css'],
    directives: [ROUTER_DIRECTIVES, HeaderButtons, FooterButtons]

})
@RouteConfig([
    //{ path: '/', redirectTo: ['HomePageMaster'] },
    { path: '/home-page-master/...', name: 'HomePageMaster', component: HomePageMasterComponent},
    { path: '/organisation-admin-master/...', name: 'OrganisationAdminMaster', component: OrganisationAdminMasterComponent, useAsDefault: true }
])

export class AppComponent {

    constructor() {
        console.log('constructor AppComponent');
    }

    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    threeLineButtonDisplay: string = 'none';

    showHideThreeLineButton(): void {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        } else {
            this.threeLineButtonDisplay = 'none';
        }
    }


}
