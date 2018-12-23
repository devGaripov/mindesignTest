import {Injectable} from '@angular/core';
import {companies} from '../../../../mocks/companies.mocks';
import {Observable, of, pipe} from 'rxjs';
import {Company} from '../../../shared/models/company';

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    constructor() {
    }


    public getCompanies(): Observable<Company[]> {
        return of(companies.companies);
    }
}
