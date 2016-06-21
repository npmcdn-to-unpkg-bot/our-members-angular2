import {Component, ViewContainerRef} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HelperService} from '../helper/helper.serv';
import {HomePageMasterComponent} from '../home-pages/home-page-master/home-page-master.comp';
import {AboutTrialPeriodComponent} from '../home-pages/about-trial-period/about-trial-period.comp';
import {HeaderButtons} from  '../header-buttons/header-buttons.comp';
import {FooterButtons} from  '../home-pages/footer-buttons/footer-buttons.comp';
import {OrganisationAdminMasterComponent} from  '../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';


@Component({
    selector: 'ib2-app',
    templateUrl: 'app/app-master/app-master.html',
    styleUrls: ['app/app-master/app-master.css'],
    viewProviders: [...BS_MODAL_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, HeaderButtons, FooterButtons]

})
@RouteConfig([
    { path: '/home-page-master/...', name: 'HomePageMaster', component: HomePageMasterComponent, useAsDefault: true },
    { path: '/organisation-admin-master/...', name: 'OrganisationAdminMaster', component: OrganisationAdminMasterComponent }
])

export class AppComponent {

    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
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
