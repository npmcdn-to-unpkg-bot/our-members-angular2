/// <reference path="login.routes.ts" />
import { provideRouter, RouterConfig }  from '@angular/router';
import { HomePagesRoutes } from './home-pages/home-pages.routes';
import { organisationAdminRoutes }       from './organisation-admin-pages/organisation-admin.routes';
import {authProviders}from './login.routes';
import { CanDeactivateGuard } from './services/can-deactivate/can-deactivate-guard.serv';
import { loginRoutes } from './login.routes';

export const routes: RouterConfig = [
    ...HomePagesRoutes,
    ...loginRoutes,
    ...organisationAdminRoutes
];

export const appRouterProviders = [
    provideRouter(routes),
    authProviders,
    CanDeactivateGuard
];
