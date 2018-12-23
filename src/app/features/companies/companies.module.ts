import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromCompanies from './store/reducers/';
import {EffectsModule} from '@ngrx/effects';
import { ChartsModule } from 'ng2-charts';
import {CompaniesEffects} from './store/effects/companies.effects';
import {CompaniesComponent} from './containers/companies/companies.component';
import {CompanyStatsComponent} from './components/company-stats/company-stats.component';
import { CompanyFiltersComponent } from './components/company-filters/company-filters.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [CompaniesComponent, CompanyStatsComponent, CompanyFiltersComponent],
    imports: [
        CommonModule,
        ChartsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('companies', fromCompanies.reducers),
        EffectsModule.forFeature([CompaniesEffects])
    ],
    exports: [
        CompaniesComponent,
        CompanyStatsComponent
    ]
})
export class CompaniesModule {
}
