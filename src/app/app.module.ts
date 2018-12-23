import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {CoreModule} from './core/core.module';
import {CompaniesComponent} from './features/companies/containers/companies/companies.component';
import {CompaniesModule} from './features/companies/companies.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        CompaniesModule,
        EffectsModule.forRoot([AppEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
