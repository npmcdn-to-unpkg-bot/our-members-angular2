import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {AboutCommunicateComponent} from "./home-pages/about-communicate/about-communicate.comp";
import {AboutEventsComponent} from "./home-pages/about-events/about-events.comp";
import {AboutFinancesComponent} from "./home-pages/about-finances/about-finances.comp";
import {AboutHelpComponent} from "./home-pages/about-help/about-help.comp";
import {AboutMemberListComponent} from "./home-pages/about-member-list/about-member-list.comp";
import {AboutRemindersComponent} from "./home-pages/about-reminders/about-reminders.comp";
import {AboutTrialPeriodComponent} from "./home-pages/about-trial-period/about-trial-period.comp";
import {AboutUsComponent} from "./home-pages/about-us/about-us.comp";
import {AppComponent} from "./app-master/app-master.comp";
import {AuthGuard} from "./services/auth-guard/auth-guard.serv";
import {CanDeactivateGuard} from "./services/can-deactivate/can-deactivate-guard.serv";
import {ChangeOrganisationComponent} from "./organisation-admin-pages/change-organisation/change-organisation.comp";
import {ContactUsComponent} from "./home-pages/contact-us/contact-us.comp";
import {EmailMemberComponent} from "./organisation-admin-pages/email-member/email-member.comp";
import {ErrorListComponent} from "./organisation-admin-pages/error-list/error-list.comp";
import {HomePage} from "./home-pages/home-page/home-page.comp";
import {HomePageMasterComponent} from "./home-pages/home-page-master/home-page-master.comp";
import {HttpModule, JsonpModule} from "@angular/http";
import {LoginComponent} from "./home-pages/login/login.comp";
import {MembersListComponent} from "./organisation-admin-pages/members/member-list/member-list.comp";
import {OrganisationAdminMasterComponent} from "./organisation-admin-pages/organisation-admin-master/organisation-admin-master.comp";
import {PageNotFoundComponent} from "./home-pages/page-not-found/page-not-found.comp";
import {PrivacyComponent} from "./home-pages/privacy/privacy.comp";
import {RecentLoginsComponent} from "./organisation-admin-pages/recent-logins/recent-logins.comp";
import {RegisterComponent} from "./home-pages/register/register.comp";
import {SubscriptionComponent} from "./home-pages/subscription/subscription.comp";
import {TermsComponent} from "./home-pages/terms/terms.comp";


//HomePageMasterComponent

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule, JsonpModule],
    declarations: [AppComponent,
        HomePage,
        HomePageMasterComponent,
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
        MembersListComponent,
        ChangeOrganisationComponent,
        ErrorListComponent,
        RecentLoginsComponent,
        OrganisationAdminMasterComponent,
        PageNotFoundComponent,
        EmailMemberComponent
    ],
    providers: [
        AuthGuard,
        CanDeactivateGuard
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
