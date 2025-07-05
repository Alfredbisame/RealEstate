'use client';

import DashboardGrid from '../../DashboardGrid';
import StatsGrid from './StatsGrid';
import RevenueChart from './RevenueChart';
import InvoiceWidget from './InvoiceWidget';
import PaymentWidget from './PaymentWidget';

interface DashboardContentProps {
  widgets: Array<{ id: string; type: string; x: number; y: number; w: number; h: number }>;
  onWidgetsChange: (widgets: Array<{ id: string; type: string; x: number; y: number; w: number; h: number }>) => void;
  className?: string;
}

export default function DashboardContent({ widgets, onWidgetsChange, className = '' }: DashboardContentProps) {
  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'stats':
        return <StatsGrid />;
      case 'revenue-chart':
        return <RevenueChart />;
      case 'invoice-generator':
        return <InvoiceWidget />;
      case 'payment-tracker':
        return <PaymentWidget />;
      default:
        return <div>Widget not found</div>;
    }
  };

  return (
    <DashboardGrid
      widgets={widgets}
      onWidgetsChange={onWidgetsChange}
      renderWidget={renderWidget}
      className={className}
    />
  );
} 