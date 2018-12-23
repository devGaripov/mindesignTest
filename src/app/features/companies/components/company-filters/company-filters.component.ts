import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CompanyStatistic} from '../../models/company-statistic';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-company-filters',
    templateUrl: './company-filters.component.html',
    styleUrls: ['./company-filters.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyFiltersComponent implements OnInit, OnChanges {

    @Input() companyStats: CompanyStatistic[];
    @Output() categoryFilter = new EventEmitter<string>();
    @Output() companyFilter = new EventEmitter<string>();
    categories: string[];
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            category: new FormControl(''),
            company: new FormControl(''),
        });
        this.categories = [];

        this.companyStats.map(company => {
            if (this.categories.indexOf(company.category) === -1) {
                this.categories.push(company.category);
            }
        });

        this.form.controls.category.valueChanges.subscribe(category => {
            this.categoryFilter.emit(category);
        });

        this.form.controls.company.valueChanges.subscribe(company => {
            this.companyFilter.emit(company);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.companyStats || changes.companyStats.firstChange) {
            return;
        }
        const selectedCompany = this.companyStats.find(company => company.id === +this.form.controls.company.value);
        if (!selectedCompany) {
            this.form.controls.company.setValue('');
        }
    }
}
