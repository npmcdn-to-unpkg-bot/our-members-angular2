/// <reference path="iblong2.d.ts" />
/// <reference path="node_modules/@angular/core/index.d.ts" />

import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app-master/app-master.comp';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);


