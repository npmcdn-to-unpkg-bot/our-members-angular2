import {Routes} from "@angular/router";
import {HomePage} from "./home-page/home-page.comp";
import {AboutTrialPeriodComponent} from "./about-trial-period/about-trial-period.comp";
import {ContactUsComponent} from "./contact-us/contact-us.comp";
import {RegisterComponent} from "./register/register.comp";
import {AboutMemberListComponent} from "./about-member-list/about-member-list.comp";
import {AboutRemindersComponent} from "./about-reminders/about-reminders.comp";
import {AboutFinancesComponent} from "./about-finances/about-finances.comp";
import {AboutCommunicateComponent} from "./about-communicate/about-communicate.comp";
import {AboutEventsComponent} from "./about-events/about-events.comp";
import {SubscriptionComponent} from "./subscription/subscription.comp";
import {AboutHelpComponent} from "./about-help/about-help.comp";
import {AboutUsComponent} from "./about-us/about-us.comp";
import {TermsComponent} from "./terms/terms.comp";
import {PrivacyComponent} from "./privacy/privacy.comp";
import {LoginComponent} from "./login/login.comp";
import {HomePageMasterComponent} from "./home-page-master/home-page-master.comp";
import {CanDeactivateGuard} from "../services/can-deactivate/can-deactivate-guard.serv";
//import { AuthGuard }             from '../auth-guard.service';

export const homePagesRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
    },
    {
        path: 'home-page',
        component: HomePageMasterComponent,
        children: [
            { path: '', component: HomePage },
            { path: 'home-page', component: HomePage },
            { path: 'about-trial-period', component: AboutTrialPeriodComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'about-member-list', component: AboutMemberListComponent },
            { path: 'about-reminders', component: AboutRemindersComponent },
            { path: 'about-finances', component: AboutFinancesComponent },
            { path: 'about-communicate', component: AboutCommunicateComponent },
            { path: 'about-events', component: AboutEventsComponent },
            { path: 'subscription', component: SubscriptionComponent },
            { path: 'about-help', component: AboutHelpComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'terms', component: TermsComponent },
            { path: 'privacy', component: PrivacyComponent },
            { path: 'login', component: LoginComponent }
        ]
    }
];
//export const homePagesRoutes = RouterModule.forRoot(HomePagesRoutes);