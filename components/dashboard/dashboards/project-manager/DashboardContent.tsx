'use client';

import StatsGrid from './StatsGrid';
import ProjectTimeline from '../../widgets/ProjectTimeline';
import MaterialTracker from '../../widgets/MaterialTracker';
import BudgetChart from './BudgetChart';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  const projects = [
    {
      id: '1',
      name: 'East Legon Residential Complex',
      progress: 65,
      deadline: '2024-08-15',
      status: 'on track' as const,
      budget: 'GHS 850,000',
      spent: 'GHS 552,500'
    },
    {
      id: '2',
      name: 'Kumasi Shopping Center',
      progress: 45,
      deadline: '2024-10-30',
      status: 'behind schedule' as const,
      budget: 'GHS 1,200,000',
      spent: 'GHS 540,000'
    },
    {
      id: '3',
      name: 'Tema Industrial Warehouse',
      progress: 85,
      deadline: '2024-06-20',
      status: 'ahead of schedule' as const,
      budget: 'GHS 650,000',
      spent: 'GHS 552,500'
    }
  ];

  const materials = [
    { id: '1', name: 'Cement (50kg bags)', current: 450, required: 500, price: 45, unit: 'bags' },
    { id: '2', name: 'Steel Bars (12mm)', current: 25, required: 30, price: 180, unit: 'bundles' },
    { id: '3', name: 'Blocks (6inch)', current: 2800, required: 3000, price: 2.5, unit: 'pieces' },
    { id: '4', name: 'Roofing Sheets', current: 85, required: 100, price: 55, unit: 'sheets' }
  ];

  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'timeline':
      return <ProjectTimeline projects={projects} />;
    case 'materials':
      return <MaterialTracker materials={materials} />;
    case 'budget-chart':
      return <BudgetChart />;
    default:
      return <div>Widget not found</div>;
  }
} 