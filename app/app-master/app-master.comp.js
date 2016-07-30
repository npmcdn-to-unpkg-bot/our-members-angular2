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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var helper_serv_1 = require('../services/helper/helper.serv');
var home_page_master_comp_1 = require('../home-pages/home-page-master/home-page-master.comp');
var about_trial_period_comp_1 = require('../home-pages/about-trial-period/about-trial-period.comp');
var header_buttons_comp_1 = require('../header-buttons/header-buttons.comp');
var footer_buttons_comp_1 = require('../home-pages/footer-buttons/footer-buttons.comp');
var home_page_comp_1 = require('../home-pages/home-page/home-page.comp');
var contact_us_comp_1 = require('../home-pages/contact-us/contact-us.comp');
var register_comp_1 = require('../home-pages/register/register.comp');
var about_member_list_comp_1 = require('../home-pages/about-member-list/about-member-list.comp');
var about_reminders_comp_1 = require('../home-pages/about-reminders/about-reminders.comp');
var about_finances_comp_1 = require('../home-pages/about-finances/about-finances.comp');
var about_communicate_comp_1 = require('../home-pages/about-communicate/about-communicate.comp');
var about_events_comp_1 = require('../home-pages/about-events/about-events.comp');
var subscription_comp_1 = require('../home-pages/subscription/subscription.comp');
var about_help_comp_1 = require('../home-pages/about-help/about-help.comp');
var about_us_comp_1 = require('../home-pages/about-us/about-us.comp');
var terms_comp_1 = require('../home-pages/terms/terms.comp');
var privacy_comp_1 = require('../home-pages/privacy/privacy.comp');
var login_comp_1 = require('../home-pages/login/login.comp');
var member_list_comp_1 = require('../organisation-admin-pages/members/member-list.comp');
var change_organisation_comp_1 = require('../organisation-admin-pages/change-organisation/change-organisation.comp');
var error_list_comp_1 = require('../organisation-admin-pages/error-list/error-list.comp');
var recent_logins_comp_1 = require('../organisation-admin-pages/recent-logins/recent-logins.comp');
var organisation_admin_master_comp_1 = require('../organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'iB2';
        this.tokenValid = helper_serv_1.HelperService.tokenIsValid();
        //showLoginButton = () => {
        //    this.headerButtons.loginComponent.loggedIn = false;
        //}
        this.threeLineButtonDisplay = 'none';
        console.log('constructor AppComponent');
    }
    AppComponent.prototype.showHideThreeLineButton = function () {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        }
        else {
            this.threeLineButtonDisplay = 'none';
        }
    };
    __decorate([
        core_1.ViewChild(header_buttons_comp_1.HeaderButtons), 
        __metadata('design:type', header_buttons_comp_1.HeaderButtons)
    ], AppComponent.prototype, "headerButtons", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ib2-app',
            templateUrl: 'app-master.html',
            styleUrls: ['app-master.css'],
            directives: [router_1.ROUTER_DIRECTIVES, header_buttons_comp_1.HeaderButtons, footer_buttons_comp_1.FooterButtons],
            precompile: [
                home_page_master_comp_1.HomePageMasterComponent,
                member_list_comp_1.MembersListComponent,
                change_organisation_comp_1.ChangeOrganisationComponent,
                recent_logins_comp_1.RecentLoginsComponent,
                error_list_comp_1.ErrorListComponent,
                home_page_comp_1.HomePage,
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
                organisation_admin_master_comp_1.OrganisationAdminMasterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-master.comp.js.map