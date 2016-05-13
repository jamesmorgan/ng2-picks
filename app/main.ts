import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component/app.component'
import {enableProdMode} from "@angular/core";
import {HTTP_PROVIDERS} from '@angular/http';

/**
 * This will disabled some exceptions!
 */
//enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS]);