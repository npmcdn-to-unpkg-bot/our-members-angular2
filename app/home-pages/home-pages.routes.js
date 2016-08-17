"use strict";
var home_page_comp_1 = require("./home-page/home-page.comp");
var about_trial_period_comp_1 = require("./about-trial-period/about-trial-period.comp");
var contact_us_comp_1 = require("./contact-us/contact-us.comp");
var register_comp_1 = require("./register/register.comp");
var about_member_list_comp_1 = require("./about-member-list/about-member-list.comp");
var about_reminders_comp_1 = require("./about-reminders/about-reminders.comp");
var about_finances_comp_1 = require("./about-finances/about-finances.comp");
var about_communicate_comp_1 = require("./about-communicate/about-communicate.comp");
var about_events_comp_1 = require("./about-events/about-events.comp");
var subscription_comp_1 = require("./subscription/subscription.comp");
var about_help_comp_1 = require("./about-help/about-help.comp");
var about_us_comp_1 = require("./about-us/about-us.comp");
var terms_comp_1 = require("./terms/terms.comp");
var privacy_comp_1 = require("./privacy/privacy.comp");
var login_comp_1 = require("./login/login.comp");
var home_page_master_comp_1 = require("./home-page-master/home-page-master.comp");
var can_deactivate_guard_serv_1 = require("../services/can-deactivate/can-deactivate-guard.serv");
//import { AuthGuard }             from '../auth-guard.service';
exports.homePagesRoutes = [
    {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
    },
    {
        path: 'home-page',
        component: home_page_master_comp_1.HomePageMasterComponent,
        children: [
            { path: '', component: home_page_comp_1.HomePage },
            { path: 'home-page', component: home_page_comp_1.HomePage },
            { path: 'about-trial-period', component: about_trial_period_comp_1.AboutTrialPeriodComponent },
            { path: 'contact-us', component: contact_us_comp_1.ContactUsComponent },
            { path: 'register', component: register_comp_1.RegisterComponent, canDeactivate: [can_deactivate_guard_serv_1.CanDeactivateGuard] },
            { path: 'about-member-list', component: about_member_list_comp_1.AboutMemberListComponent },
            { path: 'about-reminders', component: about_reminders_comp_1.AboutRemindersComponent },
            { path: 'about-finances', component: about_finances_comp_1.AboutFinancesComponent },
            { path: 'about-communicate', component: about_communicate_comp_1.AboutCommunicateComponent },
            { path: 'about-events', component: about_events_comp_1.AboutEventsComponent },
            { path: 'subscription', component: subscription_comp_1.SubscriptionComponent },
            { path: 'about-help', component: about_help_comp_1.AboutHelpComponent },
            { path: 'about-us', component: about_us_comp_1.AboutUsComponent },
            { path: 'terms', component: terms_comp_1.TermsComponent },
            { path: 'privacy', component: privacy_comp_1.PrivacyComponent },
            { path: 'login', component: login_comp_1.LoginComponent }
        ]
    }
];
//export const homePagesRoutes = RouterModule.forRoot(HomePagesRoutes); 
//# sourceMappingURL=home-pages.routes.js.map