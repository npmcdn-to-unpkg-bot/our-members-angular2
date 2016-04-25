System.register(['angular2/router', 'angular2/core', '../home-pages-links/home-pages-links.comp', '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp', '../home-page/home-page.comp', '../about-trial-period/about-trial-period.comp', '../contact-us/contact-us.comp', '../subscribe/subscribe.comp', '../register/register.comp', '../about-member-list/about-member-list.comp', '../about-reminders/about-reminders.comp', '../about-finances/about-finances.comp', '../about-communicate/about-communicate.comp', '../about-events/about-events.comp', '../subscription/subscription.comp', '../about-help/about-help.comp', '../about-us/about-us.comp', '../terms/terms.comp', '../privacy/privacy.comp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, home_pages_links_comp_1, home_pages_bottom_buttons_comp_1, home_page_comp_1, about_trial_period_comp_1, contact_us_comp_1, subscribe_comp_1, register_comp_1, about_member_list_comp_1, about_reminders_comp_1, about_finances_comp_1, about_communicate_comp_1, about_events_comp_1, subscription_comp_1, about_help_comp_1, about_us_comp_1, terms_comp_1, privacy_comp_1;
    var HomePageMasterComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_pages_links_comp_1_1) {
                home_pages_links_comp_1 = home_pages_links_comp_1_1;
            },
            function (home_pages_bottom_buttons_comp_1_1) {
                home_pages_bottom_buttons_comp_1 = home_pages_bottom_buttons_comp_1_1;
            },
            function (home_page_comp_1_1) {
                home_page_comp_1 = home_page_comp_1_1;
            },
            function (about_trial_period_comp_1_1) {
                about_trial_period_comp_1 = about_trial_period_comp_1_1;
            },
            function (contact_us_comp_1_1) {
                contact_us_comp_1 = contact_us_comp_1_1;
            },
            function (subscribe_comp_1_1) {
                subscribe_comp_1 = subscribe_comp_1_1;
            },
            function (register_comp_1_1) {
                register_comp_1 = register_comp_1_1;
            },
            function (about_member_list_comp_1_1) {
                about_member_list_comp_1 = about_member_list_comp_1_1;
            },
            function (about_reminders_comp_1_1) {
                about_reminders_comp_1 = about_reminders_comp_1_1;
            },
            function (about_finances_comp_1_1) {
                about_finances_comp_1 = about_finances_comp_1_1;
            },
            function (about_communicate_comp_1_1) {
                about_communicate_comp_1 = about_communicate_comp_1_1;
            },
            function (about_events_comp_1_1) {
                about_events_comp_1 = about_events_comp_1_1;
            },
            function (subscription_comp_1_1) {
                subscription_comp_1 = subscription_comp_1_1;
            },
            function (about_help_comp_1_1) {
                about_help_comp_1 = about_help_comp_1_1;
            },
            function (about_us_comp_1_1) {
                about_us_comp_1 = about_us_comp_1_1;
            },
            function (terms_comp_1_1) {
                terms_comp_1 = terms_comp_1_1;
            },
            function (privacy_comp_1_1) {
                privacy_comp_1 = privacy_comp_1_1;
            }],
        execute: function() {
            HomePageMasterComponent = (function () {
                function HomePageMasterComponent() {
                }
                HomePageMasterComponent = __decorate([
                    core_1.Component({
                        //selector: 'home-page',
                        styleUrls: ['src/app/home-pages/styles/home-pages.css'],
                        templateUrl: 'src/app/home-pages/home-page-master/home-page-master.html',
                        directives: [router_1.ROUTER_DIRECTIVES, home_pages_links_comp_1.HomePagesLinks, home_pages_bottom_buttons_comp_1.HomePagesBottomButtons]
                    }),
                    router_1.RouteConfig([
                        { path: '/home-page-content', name: 'HomePageContent', component: home_page_comp_1.HomePage, useAsDefault: true },
                        { path: '/about-trial-period-content', name: 'AboutTrialPeriodContent', component: about_trial_period_comp_1.AboutTrialPeriodComponent },
                        { path: '/contact-us', name: 'ContactUsComponent', component: contact_us_comp_1.ContactUsComponent },
                        { path: '/subscribe', name: 'SubscribeComponent', component: subscribe_comp_1.SubscribeComponent },
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
                        { path: '/privacy', name: 'PrivacyComponent', component: privacy_comp_1.PrivacyComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomePageMasterComponent);
                return HomePageMasterComponent;
            }());
            exports_1("HomePageMasterComponent", HomePageMasterComponent);
        }
    }
});
//# sourceMappingURL=home-page-master.comp.js.map