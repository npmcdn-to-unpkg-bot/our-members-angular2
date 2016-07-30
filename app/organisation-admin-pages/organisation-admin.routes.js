"use strict";
var member_list_comp_1 = require('./members/member-list.comp');
var change_organisation_comp_1 = require('./change-organisation/change-organisation.comp');
var error_list_comp_1 = require('./error-list/error-list.comp');
var recent_logins_comp_1 = require('./recent-logins/recent-logins.comp');
//import { AuthGuard }             from '../services/auth-guard/auth-guard.serv';
var organisation_admin_master_comp_1 = require('./organisation-admin-master/organisation-admin-master.comp');
exports.organisationAdminRoutes = [
    {
        path: 'organisation-admin-master',
        component: organisation_admin_master_comp_1.OrganisationAdminMasterComponent,
        //canActivate: [AuthGuard],
        children: [
            { path: '', component: member_list_comp_1.MembersListComponent },
            { path: 'member-list', component: member_list_comp_1.MembersListComponent },
            { path: 'change-organisation', component: change_organisation_comp_1.ChangeOrganisationComponent },
            { path: 'recent-logins', component: recent_logins_comp_1.RecentLoginsComponent },
            { path: 'error-list', component: error_list_comp_1.ErrorListComponent }
        ]
    }
];
//# sourceMappingURL=organisation-admin.routes.js.map