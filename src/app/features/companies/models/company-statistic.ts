import {WeekData} from '../../../shared/models/week';

export interface CompanyStatistic {
    id: number;
    name: string;
    category: string;
    weekStats: WeekData;
    balance: number;
    monthBalance: number;
}
