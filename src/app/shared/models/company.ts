import {WeekData} from './week';

export interface Company {
    id:  number;
    name: string;
    type: string;
    revenuePerWeek: WeekData;
    revenue: number;
    monthRevenue: number;
}
