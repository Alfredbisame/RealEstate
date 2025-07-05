import { ProfitData } from './types';

export const mockProfitData: ProfitData = {
  materials: 125000,
  labor: 85000,
  permits: 15000,
  clientBudget: 280000
};

export const sampleProjects = [
  {
    name: 'Residential Complex',
    materials: 150000,
    labor: 95000,
    permits: 18000,
    clientBudget: 320000,
    profitMargin: 17.8
  },
  {
    name: 'Commercial Building',
    materials: 200000,
    labor: 120000,
    permits: 25000,
    clientBudget: 420000,
    profitMargin: 17.9
  },
  {
    name: 'Renovation Project',
    materials: 80000,
    labor: 60000,
    permits: 10000,
    clientBudget: 180000,
    profitMargin: 16.7
  }
]; 