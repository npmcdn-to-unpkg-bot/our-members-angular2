"use strict";
/// <reference path="home-pages/page-not-found/page-not-found.comp.ts" />
/// <reference path="login.routes.ts" />
var router_1 = require("@angular/router");
var home_pages_routes_1 = require("./home-pages/home-pages.routes");
var organisation_admin_routes_1 = require("./organisation-admin-pages/organisation-admin.routes");
var login_routes_1 = require("./login.routes");
var page_not_found_comp_1 = require("./home-pages/page-not-found/page-not-found.comp");
var routes = home_pages_routes_1.homePagesRoutes.concat(login_routes_1.loginRoutes, organisation_admin_routes_1.organisationAdminRoutes, [
    { path: '**', component: page_not_found_comp_1.PageNotFoundComponent }
]);
// const appRouterProviders = [
//     provideRouter(routes),
//     authProviders,
//     CanDeactivateGuard
// ];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map