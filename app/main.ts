import { HTTP_PROVIDERS } from '@angular/http';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app-master/app-master.comp';
import { appRouterProviders } from './app.routes';
//import { provideRouter, RouterConfig}  from '@angular/router';

//enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    appRouterProviders
])
    //.catch(err => console.error(err));
