import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app-master/app-master.comp';

//enableProdMode();


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //disableDeprecatedForms(),
    //provideForms()

]);


