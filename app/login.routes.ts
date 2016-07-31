import { RouterConfig }       from '@angular/router';
import { AuthGuard }          from './services/auth-guard/auth-guard.serv';
import { LoginService }        from './services/login/login.serv';
import { LoginComponent }     from './home-pages/login/login.comp';

export const loginRoutes: RouterConfig = [
    { path: 'login', component: LoginComponent }
];

export const authProviders = [AuthGuard, LoginService];

