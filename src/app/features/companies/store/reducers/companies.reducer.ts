import {Action} from '@ngrx/store';
import {CompaniesActions, CompaniesActionTypes} from '../actions/companies.actions';
import {Company} from '../../../../shared/models/company';
import {companies} from '../../../../../mocks/companies.mocks';
import {CompanyStatistic} from '../../models/company-statistic';
import {Helper} from '../../classes/Helper';

export interface State {
    companies: Company[];
    selectedCategory: string;
    selectedCompanyId: number;
}

export const initialState: State = {
    companies: [],
    selectedCategory: '',
    selectedCompanyId: null
};

export function reducer(state = initialState, action: CompaniesActions): State {
    switch (action.type) {

        case CompaniesActionTypes.LoadCompanies:
            return state;

        case CompaniesActionTypes.SetCompanies:
            return {
                ...state,
                companies: action.payload,
            };

        case CompaniesActionTypes.SetSelectedCategory:
            return {
                ...state,
                selectedCategory: action.payload,
            };

        case CompaniesActionTypes.SetSelectedCompanyId:
            return {
                ...state,
                selectedCompanyId: action.payload
            };

        default:
            return state;
    }
}


