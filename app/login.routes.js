"use strict";
var auth_guard_serv_1 = require('./services/auth-guard/auth-guard.serv');
var login_serv_1 = require('./home-pages/login/login.serv');
var login_comp_1 = require('./home-pages/login/login.comp');
exports.loginRoutes = [
    { path: 'login', component: login_comp_1.LoginComponent }
];
exports.authProviders = [auth_guard_serv_1.AuthGuard, login_serv_1.LoginService];
//# sourceMappingURL=login.routes.js.map