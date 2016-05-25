import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Component, Directive, Output, EventEmitter} from '@angular/core';
import {HomePagesLinks}  from '../home-pages-links/home-pages-links.comp';
import {HomePagesBottomButtons}  from '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
import {HelperService} from '../../helper/helper.serv';
import {HomePage}  from '../home-page/home-page.comp';
import {AboutTrialPeriodComponent}  from '../about-trial-period/about-trial-period.comp';
import {ContactUsComponent}  from '../contact-us/contact-us.comp';
import {RegisterComponent}  from '../register/register.comp';
import {AboutMemberListComponent}  from '../about-member-list/about-member-list.comp';
import {AboutRemindersComponent}  from '../about-reminders/about-reminders.comp';
import {AboutFinancesComponent}  from '../about-finances/about-finances.comp';
import {AboutCommunicateComponent}  from '../about-communicate/about-communicate.comp';
import {AboutEventsComponent}  from '../about-events/about-events.comp';
import {SubscriptionComponent}  from '../subscription/subscription.comp';
import {AboutHelpComponent}  from '../about-help/about-help.comp';
import {AboutUsComponent}  from '../about-us/about-us.comp';
import {TermsComponent}  from '../terms/terms.comp';
import {PrivacyComponent}  from '../privacy/privacy.comp';
import {LoginComponent}  from '../login/login.comp';
import {OrganisationAdminMasterComponent}  from '../../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp';

@Component({
    //selector: 'home-page',
    styleUrls: ['app/home-pages/styles/home-pages.css'],
    templateUrl: 'app/home-pages/home-page-master/home-page-master.html',
    directives: [ROUTER_DIRECTIVES, HomePagesLinks, HomePagesBottomButtons]
})
@RouteConfig([
    { path: '/home-page-content', name: 'HomePageContent', component: HomePage, useAsDefault: true },
    { path: '/about-trial-period-content', name: 'AboutTrialPeriodContent', component: AboutTrialPeriodComponent },
    { path: '/contact-us', name: 'ContactUsComponent', component: ContactUsComponent },
    { path: '/register', name: 'RegisterComponent', component: RegisterComponent },
    { path: '/about-member-list', name: 'AboutMemberListComponent', component: AboutMemberListComponent },
    { path: '/about-reminders', name: 'AboutRemindersComponent', component: AboutRemindersComponent },
    { path: '/about-finances', name: 'AboutFinancesComponent', component: AboutFinancesComponent },
    { path: '/about-communicate', name: 'AboutCommunicateComponent', component: AboutCommunicateComponent },
    { path: '/about-events', name: 'AboutEventsComponent', component: AboutEventsComponent },
    { path: '/subscription', name: 'SubscriptionComponent', component: SubscriptionComponent },
    { path: '/about-help', name: 'AboutHelpComponent', component: AboutHelpComponent },
    { path: '/about-us', name: 'AboutUsComponent', component: AboutUsComponent },
    { path: '/terms', name: 'TermsComponent', component: TermsComponent },
    { path: '/privacy', name: 'PrivacyComponent', component: PrivacyComponent },
    { path: '/login', name: 'LoginComponent', component: LoginComponent },

])

export class HomePageMasterComponent {
}