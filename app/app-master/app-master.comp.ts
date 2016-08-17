import {Component, ViewChild} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HelperService} from "../services/helper/helper.serv";
import {HeaderButtons} from "../header-buttons/header-buttons.comp";
import {FooterButtons} from "../home-pages/footer-buttons/footer-buttons.comp";

// import {HomePagesLinks}  from '../home-pages/home-pages-links/home-pages-links.comp';
// import {HomePagesBottomButtons}  from '../home-pages/home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
//import {RuntimeCompiler} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'ib2-app',
    templateUrl: 'app-master.html',
    styleUrls: ['app-master.css'],
    directives: [ROUTER_DIRECTIVES, HeaderButtons, FooterButtons]
    //providers: [RuntimeCompiler]
})

export class AppComponent {

    constructor() {
        //constructor(private runtimeCompiler: RuntimeCompiler) {
        console.log('constructor AppComponent');
        //runtimeCompiler.clearCache();
    }

    public title = 'iB2';
    tokenValid: boolean = HelperService.tokenIsValid();

    @ViewChild(HeaderButtons) headerButtons: HeaderButtons;
    showLoginButton = (loggedIn: boolean) => {
        this.headerButtons.changeLoginState(loggedIn)
    }

    threeLineButtonDisplay: string = 'none';

    showHideThreeLineButton(): void {
        if (this.threeLineButtonDisplay === 'none') {
            this.threeLineButtonDisplay = '';
        } else {
            this.threeLineButtonDisplay = 'none';
        }
    }


}
