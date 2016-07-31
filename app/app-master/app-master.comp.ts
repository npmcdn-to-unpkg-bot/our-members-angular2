/// <reference path="../services/communication/communication.serv.ts" />
import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HelperService} from '../services/helper/helper.serv';
import {HomePageMasterComponent} from '../home-pages/home-page-master/home-page-master.comp';
import {AboutTrialPeriodComponent} from '../home-pages/about-trial-period/about-trial-period.comp';
import {HeaderButtons} from  '../header-buttons/header-buttons.comp';
import {FooterButtons} from  '../home-pages/footer-buttons/footer-buttons.comp';
//import {CommunicationService} from  '../services/communication/communication.serv';

import {HomePagesLinks}  from '../home-pages/home-pages-links/home-pages-links.comp';
import {HomePagesBottomButtons}  from '../home-pages/home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
import {HomePage}  from '../home-pages/home-page/home-page.comp';
import {ContactUsComponent}  from '../home-pages/contact-us/contact-us.comp';
import {RegisterComponent}  from '../home-pages/register/register.comp';
import {AboutMemberListComponent}  from '../home-pages/about-member-list/about-member-list.comp';
import {AboutRemindersComponent}  from '../home-pages/about-reminders/about-reminders.comp';
import {AboutFinancesComponent}  from '../home-pages/about-finances/about-finances.comp';
import {AboutCommunicateComponent}  from '../home-pages/about-communicate/about-communicate.comp';
import {AboutEventsComponent}  from '../home-pages/about-events/about-events.comp';
import {SubscriptionComponent}  from '../home-pages/subscription/subscription.comp';
import {AboutHelpComponent}  from '../home-pages/about-help/about-help.comp';
import {AboutUsComponent}  from '../home-pages/about-us/about-us.comp';
import {TermsComponent}  from '../home-pages/terms/terms.comp';
import {PrivacyComponent}  from '../home-pages/privacy/privacy.comp';
import {LoginComponent}  from '../home-pages/login/login.comp';
import {MembersListComponent} from '../organisation-admin-pages/members/member-list.comp';
import {ChangeOrganisationComponent} from '../organisation-admin-pages/change-organisation/change-organisation.comp';
import {ErrorListComponent} from '../organisation-admin-pages/error-list/error-list.comp';
import {RecentLoginsComponent} from '../organisation-admin-pages/recent-logins/recent-logins.comp';
import {OrganisationAdminMasterComponent} from '../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp';

@Component({
    moduleId: module.id,
    selector: 'ib2-app',
    templateUrl: 'app-master.html',
    styleUrls: ['app-master.css'],
    directives: [ROUTER_DIRECTIVES, HeaderButtons, FooterButtons],
    //providers: [CommunicationService],
    precompile: [
        HomePageMasterComponent,
        MembersListComponent,
        ChangeOrganisationComponent,
        RecentLoginsComponent,
        ErrorListComponent,
        HomePage,
        AboutTrialPeriodComponent,
        ContactUsComponent,
        RegisterComponent,
        AboutMemberListComponent,
        AboutRemindersComponent,
        AboutFinancesComponent,
        AboutCommunicateComponent,
        AboutEventsComponent,
        SubscriptionComponent,
        AboutHelpComponent,
        AboutUsComponent,
        TermsComponent,
        PrivacyComponent,
        LoginComponent,
        OrganisationAdminMasterComponent
    ]

})

export class AppComponent {

    constructor() {
        //constructor(private communicationService: CommunicationService) {
        console.log('constructor AppComponent');
        //CommunicationService.getInstance().loggedoutcommunication$.subscribe(
        //    loggedIn => {
        //        this.showLoginButton(loggedIn);
        //    });
    }

    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    @ViewChild(HeaderButtons) headerButtons: HeaderButtons;
    showLoginButton = (loggedIn: boolean) => {
        this.headerButtons.changeLoginState(loggedIn)
    }

    threeLineButtonDisplay: string = 'none';

    showHideThreeLineButton(): void {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        } else {
            this.threeLineButtonDisplay = 'none';
        }
    }


}
