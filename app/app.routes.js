"use strict";
/// <reference path="login.routes.ts" />
var router_1 = require('@angular/router');
var home_pages_routes_1 = require('./home-pages/home-pages.routes');
var organisation_admin_routes_1 = require('./organisation-admin-pages/organisation-admin.routes');
var login_routes_1 = require('./login.routes');
var can_deactivate_guard_serv_1 = require('./services/can-deactivate/can-deactivate-guard.serv');
var login_routes_2 = require('./login.routes');
exports.routes = home_pages_routes_1.HomePagesRoutes.concat(login_routes_2.loginRoutes, organisation_admin_routes_1.organisationAdminRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes),
    login_routes_1.authProviders,
    can_deactivate_guard_serv_1.CanDeactivateGuard
];
//# sourceMappingURL=app.routes.js.map