System.register(['angular2/core', '../home-pages-links/home-pages-links.comp', '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp', '../home-page-content/home-page-content.comp'], function(exports_1, context_1) {
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
    var core_1, home_pages_links_comp_1, home_pages_bottom_buttons_comp_1, home_page_content_comp_1;
    var HomePageComponent;
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
            function (home_page_content_comp_1_1) {
                home_page_content_comp_1 = home_page_content_comp_1_1;
            }],
        execute: function() {
            HomePageComponent = (function () {
                function HomePageComponent() {
                }
                HomePageComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        styleUrls: ['src/app/home-pages/styles/home-pages.css'],
                        templateUrl: 'src/app/home-pages/home-page/home-page.html',
                        directives: [home_pages_links_comp_1.HomePagesLinks, home_pages_bottom_buttons_comp_1.HomePagesBottomButtons, home_page_content_comp_1.HomePageContent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePageComponent);
                return HomePageComponent;
            }());
            exports_1("HomePageComponent", HomePageComponent);
        }
    }
});
//# sourceMappingURL=home-page.comp.js.map