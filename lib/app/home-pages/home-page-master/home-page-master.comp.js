"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var home_pages_links_comp_1 = require('../home-pages-links/home-pages-links.comp');
var home_pages_bottom_buttons_comp_1 = require('../home-pages-bottom-buttons/home-pages-bottom-buttons.comp');
var home_page_comp_1 = require('../home-page/home-page.comp');
var about_trial_period_comp_1 = require('../about-trial-period/about-trial-period.comp');
var contact_us_comp_1 = require('../contact-us/contact-us.comp');
var register_comp_1 = require('../register/register.comp');
var about_member_list_comp_1 = require('../about-member-list/about-member-list.comp');
var about_reminders_comp_1 = require('../about-reminders/about-reminders.comp');
var about_finances_comp_1 = require('../about-finances/about-finances.comp');
var about_communicate_comp_1 = require('../about-communicate/about-communicate.comp');
var about_events_comp_1 = require('../about-events/about-events.comp');
var subscription_comp_1 = require('../subscription/subscription.comp');
var about_help_comp_1 = require('../about-help/about-help.comp');
var about_us_comp_1 = require('../about-us/about-us.comp');
var terms_comp_1 = require('../terms/terms.comp');
var privacy_comp_1 = require('../privacy/privacy.comp');
var login_comp_1 = require('../login/login.comp');
var HomePageMasterComponent = (function () {
    function HomePageMasterComponent() {
    }
    HomePageMasterComponent = __decorate([
        core_1.Component({
            //selector: 'home-page',
            styleUrls: ['app/home-pages/styles/home-pages.css'],
            templateUrl: 'app/home-pages/home-page-master/home-page-master.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, home_pages_links_comp_1.HomePagesLinks, home_pages_bottom_buttons_comp_1.HomePagesBottomButtons]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home-page-content', name: 'HomePageContent', component: home_page_comp_1.HomePage, useAsDefault: true },
            { path: '/about-trial-period-content', name: 'AboutTrialPeriodContent', component: about_trial_period_comp_1.AboutTrialPeriodComponent },
            { path: '/contact-us', name: 'ContactUsComponent', component: contact_us_comp_1.ContactUsComponent },
            { path: '/register', name: 'RegisterComponent', component: register_comp_1.RegisterComponent },
            { path: '/about-member-list', name: 'AboutMemberListComponent', component: about_member_list_comp_1.AboutMemberListComponent },
            { path: '/about-reminders', name: 'AboutRemindersComponent', component: about_reminders_comp_1.AboutRemindersComponent },
            { path: '/about-finances', name: 'AboutFinancesComponent', component: about_finances_comp_1.AboutFinancesComponent },
            { path: '/about-communicate', name: 'AboutCommunicateComponent', component: about_communicate_comp_1.AboutCommunicateComponent },
            { path: '/about-events', name: 'AboutEventsComponent', component: about_events_comp_1.AboutEventsComponent },
            { path: '/subscription', name: 'SubscriptionComponent', component: subscription_comp_1.SubscriptionComponent },
            { path: '/about-help', name: 'AboutHelpComponent', component: about_help_comp_1.AboutHelpComponent },
            { path: '/about-us', name: 'AboutUsComponent', component: about_us_comp_1.AboutUsComponent },
            { path: '/terms', name: 'TermsComponent', component: terms_comp_1.TermsComponent },
            { path: '/privacy', name: 'PrivacyComponent', component: privacy_comp_1.PrivacyComponent },
            { path: '/login', name: 'LoginComponent', component: login_comp_1.LoginComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], HomePageMasterComponent);
    return HomePageMasterComponent;
}());
exports.HomePageMasterComponent = HomePageMasterComponent;
//# sourceMappingURL=home-page-master.comp.js.map