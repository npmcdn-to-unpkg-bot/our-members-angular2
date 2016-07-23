"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
//import { disableDeprecatedForms, provideForms } from '@angular/forms';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_master_comp_1 = require('./app-master/app-master.comp');
platform_browser_dynamic_1.bootstrap(app_master_comp_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
]);
//# sourceMappingURL=boot_.js.map