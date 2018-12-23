import {Action} from '@ngrx/store';
import {Company} from '../../../../shared/models/company';
import {CompanyStatistic} from '../../models/company-statistic';

export enum CompaniesActionTypes {
    LoadCompanies = '[Companies] Load Companies',
    SetCompanies = '[Companies] Set Companies',
    SetCompanyStats = '[Companies] Set Company Stats',
    SetSelectedCategory = '[Companies] Set Selected Category',
    SetSelectedCompanyId = '[Companies] Set Selected Company Id'
}

export class LoadCompanies implements Action {
    readonly type = CompaniesActionTypes.LoadCompanies;
}

export class SetCompanies implements Action {
    readonly type = CompaniesActionTypes.SetCompanies;

    constructor(public payload: Company[]) {
    }
}

export class SetCompanyStats implements Action {
    readonly type = CompaniesActionTypes.SetCompanyStats;

    constructor(public payload: CompanyStatistic[]) {
    }
}

export class SetSelectedCategory implements Action {
    readonly type = CompaniesActionTypes.SetSelectedCategory;

    constructor(public payload: string) {
    }
}

export class SetSelectedCompanyId implements Action {
    readonly type = CompaniesActionTypes.SetSelectedCompanyId;

    constructor(public payload: number) {
    }
}

export type CompaniesActions = LoadCompanies | SetCompanies | SetCompanyStats | SetSelectedCategory | SetSelectedCompanyId;
