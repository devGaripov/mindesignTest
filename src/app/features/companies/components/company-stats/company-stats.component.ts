import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CompanyStatistic} from '../../models/company-statistic';
import {from, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-company-stats',
    templateUrl: './company-stats.component.html',
    styleUrls: ['./company-stats.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyStatsComponent implements OnInit, OnChanges {

    @Input() companyStats: CompanyStatistic[] = [];
    @Input() selectedCompanyId: number;
    @Output() onItemSelected = new EventEmitter<number>();

    public lineChartData = [
        {data: [0, 0, 0, 0, 0, 0, 0]},
    ];
    public lineChartOptions: any = {
        responsive: false
    };
    public week: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.calculateChart();
    }


    calculateChart() {
        this.companyStats.forEach(company => {
            this.week.forEach((day, index) => {
                this.lineChartData[0].data[index] = company.weekStats[day];
            });
        });
    }

    getLabels(): String[] {
        return this.week.map(day => {
            return day[0];
        });
    }

    printSelectedCompany() {
        this.onItemSelected.emit(this.selectedCompanyId);
    }


}
