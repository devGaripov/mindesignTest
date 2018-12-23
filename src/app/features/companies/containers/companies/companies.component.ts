import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers/index';
import {Observable, pipe} from 'rxjs';
import {Company} from '../../../../shared/models/company';
import {LoadCompanies, SetSelectedCategory, SetSelectedCompanyId} from '../../store/actions/companies.actions';
import {CompanyStatistic} from '../../models/company-statistic';
import {map, pluck} from 'rxjs/operators';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesComponent implements OnInit {

    companies$: Observable<Company[]>;
    companyStats$: Observable<CompanyStatistic[]>;
    selectedCompanyId$: Observable<number>;
    selectedCategory$: Observable<string>;

    constructor(private store: Store<fromStore.CompaniesState>) {
    }

    ngOnInit() {
        /**
         *  Разбиение на companies и companyStats(вместо того, чтобы сразу преобразовать) я сделал исходя из того,
         *  что в реальном проекте обычно рядом с графиком еще и лист или детали о компании
         */
        this.companies$ = this.store.pipe(select(fromStore.selectCompanies));
        this.companyStats$ = this.store.pipe(select(fromStore.selectFilteredCompanyStats, {monthBalance: 0}));
        this.selectedCompanyId$ = this.store.pipe(select(fromStore.selectSelectedCompanyId));
        this.selectedCategory$ = this.store.pipe(select(fromStore.selectSelectedCategory));
        this.store.dispatch(new LoadCompanies());
    }

    categoryFilter(category) {
        this.store.dispatch(new SetSelectedCategory(category));
    }

    companyFilter(companyID) {
        this.store.dispatch(new SetSelectedCompanyId(companyID));
    }


    onItemSelected(companyID) {
        console.log(companyID);
    }
}
