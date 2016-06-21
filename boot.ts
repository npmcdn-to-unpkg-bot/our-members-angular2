import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app-master/app-master.comp';
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MODAL_BROWSER_PROVIDERS
]);


