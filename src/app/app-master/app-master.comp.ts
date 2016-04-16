/// <reference path="../home-pages/home-page/home-page.comp.ts" />
/// <reference path="../helper/helper.serv.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HelperService} from '../helper/helper.serv';
import {HomePageComponent} from '../home-pages/home-page/home-page.comp';


@Component({
    selector: 'ib2-app',
    templateUrl: 'src/app/app-master/app-master.html',
    styleUrls: ['src/app/app-master/app-master.css'],
    directives: [ROUTER_DIRECTIVES]

})
@RouteConfig([
        { path: '/', redirectTo: ['HomePageComponent'] },
        { path: '/home', name: 'HomePageComponent', component: HomePageComponent }
])
export class AppComponent {
    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    //static deviceCutoffWidth: number = 768;

    ngOnInit() {
        //this.tokenValid = HelperService.tokenIsValid();

        //this.navbarWithoutJquery()
    }

}
