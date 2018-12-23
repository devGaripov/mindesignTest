import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CompaniesActionTypes, SetCompanies} from '../actions/companies.actions';
import {
    map, mapTo,
    switchMap,
} from 'rxjs/operators';
import {CompaniesService} from '../../services/companies.service';

@Injectable()
export class CompaniesEffects {

    @Effect()
    loadCompanies$ = this.actions$.pipe(
        ofType(CompaniesActionTypes.LoadCompanies),
        switchMap(() => this.companiesService.getCompanies().pipe(
            map(companies => new SetCompanies(companies))
            )
        )
    );

    constructor(private actions$: Actions, private companiesService: CompaniesService) {
    }
}
