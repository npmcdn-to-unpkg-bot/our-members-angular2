import { RouterConfig }          from '@angular/router';
import {MembersListComponent} from './members/member-list.comp';
import {ChangeOrganisationComponent} from './change-organisation/change-organisation.comp';
import {ErrorListComponent} from './error-list/error-list.comp';
import {RecentLoginsComponent} from './recent-logins/recent-logins.comp';
import { CanDeactivateGuard }    from '../services/can-deactivate/can-deactivate-guard.serv';
//import { AuthGuard }             from '../services/auth-guard/auth-guard.serv';
import { OrganisationAdminMasterComponent }             from './organisation-admin-master/organisation-admin-master.comp';


export const organisationAdminRoutes: RouterConfig = [
    {
        path: 'organisation-admin-master',
        component: OrganisationAdminMasterComponent,
        //canActivate: [AuthGuard],
        children: [
            { path: '', component: MembersListComponent },
            { path: 'member-list', component: MembersListComponent },
            { path: 'change-organisation', component: ChangeOrganisationComponent },
            { path: 'recent-logins', component: RecentLoginsComponent },
            { path: 'error-list', component: ErrorListComponent }
        ]
    }
];
