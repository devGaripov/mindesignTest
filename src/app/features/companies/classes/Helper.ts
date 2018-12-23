import {Company} from '../../../shared/models/company';
import {CompanyStatistic} from '../models/company-statistic';

export class Helper {

    static transformToCompanyStats(companies: Company[]): CompanyStatistic[] {
        return companies.map(company => {
            return {
                id: company.id,
                name: company.name,
                category: company.type,
                weekStats: company.revenuePerWeek,
                balance: company.revenue,
                monthBalance: company.monthRevenue
            };
        });
    }

}
