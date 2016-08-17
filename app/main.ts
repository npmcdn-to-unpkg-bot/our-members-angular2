import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
platformBrowserDynamic().bootstrapModule(AppModule);



// import { HTTP_PROVIDERS } from '@angular/http';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import {AppComponent} from './app-master/app-master.comp';
// import { appRouterProviders } from './app.routes';
//
// //enableProdMode();
//
// bootstrap(AppComponent, [
//     disableDeprecatedForms(),
//     provideForms(),
//     HTTP_PROVIDERS,
//     appRouterProviders
// ])
