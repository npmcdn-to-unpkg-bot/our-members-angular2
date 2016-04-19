System.register(['angular2/core', '../home-pages-links/home-pages-links.comp', '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp', '../about-trial-period-content/about-trial-period-content.comp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_pages_links_comp_1, home_pages_bottom_buttons_comp_1, about_trial_period_content_comp_1;
    var AboutTrialPeriodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_pages_links_comp_1_1) {
                home_pages_links_comp_1 = home_pages_links_comp_1_1;
            },
            function (home_pages_bottom_buttons_comp_1_1) {
                home_pages_bottom_buttons_comp_1 = home_pages_bottom_buttons_comp_1_1;
            },
            function (about_trial_period_content_comp_1_1) {
                about_trial_period_content_comp_1 = about_trial_period_content_comp_1_1;
            }],
        execute: function() {
            AboutTrialPeriodComponent = (function () {
                function AboutTrialPeriodComponent() {
                }
                AboutTrialPeriodComponent = __decorate([
                    core_1.Component({
                        selector: 'about-trial-period',
                        styleUrls: ['src/app/home-pages/styles/home-pages.css'],
                        templateUrl: 'src/app/home-pages/about-trial-period/about-trial-period.html',
                        directives: [home_pages_links_comp_1.HomePagesLinks, home_pages_bottom_buttons_comp_1.HomePagesBottomButtons, about_trial_period_content_comp_1.AboutTrialPeriodContent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutTrialPeriodComponent);
                return AboutTrialPeriodComponent;
            }());
            exports_1("AboutTrialPeriodComponent", AboutTrialPeriodComponent);
        }
    }
});
//# sourceMappingURL=about-trial-period.comp.js.map