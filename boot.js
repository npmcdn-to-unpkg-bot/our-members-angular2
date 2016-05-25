/// <reference path="../node_modules/@angular/core/index.d.ts" />
System.register(['@angular/router-deprecated', '@angular/http', '@angular/platform-browser-dynamic', './app/app-master/app-master.comp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_deprecated_1, http_1, platform_browser_dynamic_1, app_master_comp_1;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_master_comp_1_1) {
                app_master_comp_1 = app_master_comp_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_master_comp_1.AppComponent, [
                router_deprecated_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map