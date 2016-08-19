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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var about_communicate_comp_1 = require("./home-pages/about-communicate/about-communicate.comp");
var about_events_comp_1 = require("./home-pages/about-events/about-events.comp");
var about_finances_comp_1 = require("./home-pages/about-finances/about-finances.comp");
var about_help_comp_1 = require("./home-pages/about-help/about-help.comp");
var about_member_list_comp_1 = require("./home-pages/about-member-list/about-member-list.comp");
var about_reminders_comp_1 = require("./home-pages/about-reminders/about-reminders.comp");
var about_trial_period_comp_1 = require("./home-pages/about-trial-period/about-trial-period.comp");
var about_us_comp_1 = require("./home-pages/about-us/about-us.comp");
var app_master_comp_1 = require("./app-master/app-master.comp");
var auth_guard_serv_1 = require("./services/auth-guard/auth-guard.serv");
var can_deactivate_guard_serv_1 = require("./services/can-deactivate/can-deactivate-guard.serv");
var change_organisation_comp_1 = require("./organisation-admin-pages/change-organisation/change-organisation.comp");
var contact_us_comp_1 = require("./home-pages/contact-us/contact-us.comp");
var email_member_comp_1 = require("./organisation-admin-pages/email-member/email-member.comp");
var error_list_comp_1 = require("./organisation-admin-pages/error-list/error-list.comp");
var home_page_comp_1 = require("./home-pages/home-page/home-page.comp");
var home_page_master_comp_1 = require("./home-pages/home-page-master/home-page-master.comp");
var http_1 = require("@angular/http");
var login_comp_1 = require("./home-pages/login/login.comp");
var member_list_comp_1 = require("./organisation-admin-pages/members/member-list/member-list.comp");
var organisation_admin_master_comp_1 = require("./organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp");
var page_not_found_comp_1 = require("./home-pages/page-not-found/page-not-found.comp");
var privacy_comp_1 = require("./home-pages/privacy/privacy.comp");
var recent_logins_comp_1 = require("./organisation-admin-pages/recent-logins/recent-logins.comp");
var register_comp_1 = require("./home-pages/register/register.comp");
var subscription_comp_1 = require("./home-pages/subscription/subscription.comp");
var terms_comp_1 = require("./home-pages/terms/terms.comp");
//HomePageMasterComponent
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.routing, forms_1.FormsModule, http_1.JsonpModule],
            declarations: [app_master_comp_1.AppComponent,
                home_page_comp_1.HomePage,
                home_page_master_comp_1.HomePageMasterComponent,
                about_trial_period_comp_1.AboutTrialPeriodComponent,
                contact_us_comp_1.ContactUsComponent,
                register_comp_1.RegisterComponent,
                about_member_list_comp_1.AboutMemberListComponent,
                about_reminders_comp_1.AboutRemindersComponent,
                about_finances_comp_1.AboutFinancesComponent,
                about_communicate_comp_1.AboutCommunicateComponent,
                about_events_comp_1.AboutEventsComponent,
                subscription_comp_1.SubscriptionComponent,
                about_help_comp_1.AboutHelpComponent,
                about_us_comp_1.AboutUsComponent,
                terms_comp_1.TermsComponent,
                privacy_comp_1.PrivacyComponent,
                login_comp_1.LoginComponent,
                member_list_comp_1.MembersListComponent,
                change_organisation_comp_1.ChangeOrganisationComponent,
                error_list_comp_1.ErrorListComponent,
                recent_logins_comp_1.RecentLoginsComponent,
                organisation_admin_master_comp_1.OrganisationAdminMasterComponent,
                page_not_found_comp_1.PageNotFoundComponent,
                email_member_comp_1.EmailMemberComponent
            ],
            providers: [
                auth_guard_serv_1.AuthGuard,
                can_deactivate_guard_serv_1.CanDeactivateGuard
            ],
            bootstrap: [app_master_comp_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map