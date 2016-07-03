import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {environment} from "./app/environment";
import {AppComponent} from "./app/app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [

  /**
   * This apps router config
   */
  APP_ROUTER_PROVIDERS,

  /**
   * Http libs
   */
  HTTP_PROVIDERS,

  /**
   * Forms Module
   */
  disableDeprecatedForms(),
  provideForms(),
]).catch((err:any) => console.error(err));




