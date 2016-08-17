/// <reference path="home-pages/page-not-found/page-not-found.comp.ts" />
/// <reference path="login.routes.ts" />
import {Routes, RouterModule} from "@angular/router";
import {homePagesRoutes} from "./home-pages/home-pages.routes";
import {organisationAdminRoutes} from "./organisation-admin-pages/organisation-admin.routes";
import {loginRoutes} from "./login.routes";
import {PageNotFoundComponent} from "./home-pages/page-not-found/page-not-found.comp";

const routes: Routes = [
    ...homePagesRoutes,
    ...loginRoutes,
    ...organisationAdminRoutes,
    { path: '**', component: PageNotFoundComponent }
];

// const appRouterProviders = [
//     provideRouter(routes),
//     authProviders,
//     CanDeactivateGuard
// ];

export const routing = RouterModule.forRoot(routes);