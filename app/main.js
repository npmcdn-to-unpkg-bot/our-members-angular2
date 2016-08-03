"use strict";
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_master_comp_1 = require('./app-master/app-master.comp');
var app_routes_1 = require('./app.routes');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(app_master_comp_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    app_routes_1.appRouterProviders
]);
//# sourceMappingURL=main.js.map