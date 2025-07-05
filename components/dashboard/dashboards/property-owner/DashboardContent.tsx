'use client';

import StatsGrid from './StatsGrid';
import PortfolioChart from './PortfolioChart';
import PropertiesList from './PropertiesList';
import ProfitCalculator from '../../widgets/ProfitCalculator';
import CashFlowChart from './CashFlowChart';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'chart':
      return <PortfolioChart />;
    case 'properties':
      return <PropertiesList />;
    case 'profit-calc':
      return <ProfitCalculator />;
    case 'cash-flow':
      return <CashFlowChart />;
    default:
      return <div>Widget not found</div>;
  }
} 