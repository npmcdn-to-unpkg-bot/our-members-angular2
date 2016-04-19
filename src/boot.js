System.register(['angular2/router', 'angular2/http', 'angular2/platform/browser', './app/app-master/app-master.comp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, http_1, browser_1, app_master_comp_1;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_master_comp_1_1) {
                app_master_comp_1 = app_master_comp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_master_comp_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map