import * as fromCompanies from './companies.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {Helper} from '../../classes/Helper';


export interface CompaniesState {
    state: fromCompanies.State;
}

export const reducers: ActionReducerMap<CompaniesState> = {
    state: fromCompanies.reducer
};

export const selectFeatureState = createFeatureSelector<CompaniesState>('companies');

export const selectCompaniesState = createSelector(selectFeatureState, (state) => state.state);
export const selectCompanies = createSelector(selectCompaniesState, (state) => state.companies);
export const selectCompanyStats = createSelector(selectCompaniesState, (state) => Helper.transformToCompanyStats(state.companies));
export const selectSelectedCategory = createSelector(selectCompaniesState, (state) => state.selectedCategory);
export const selectSelectedCompanyId = createSelector(selectCompaniesState, (state) => state.selectedCompanyId);
export const selectFilteredCompanyStats = createSelector(selectCompanyStats, selectSelectedCategory, (companyStats, category, props) => {

    if (category) {
        return companyStats.filter(company => company.category === category && company.monthBalance > props.monthBalance);
    }

    return companyStats.filter(company => company.monthBalance > props.monthBalance);
});
