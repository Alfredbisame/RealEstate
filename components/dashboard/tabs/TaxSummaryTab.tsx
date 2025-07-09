import { useState } from 'react';
import TaxSummaryHeader from './taxsummary/TaxSummaryHeader';
import TaxSummaryStats from './taxsummary/TaxSummaryStats';
import TaxSummaryContent from './taxsummary/TaxSummaryContent';

interface TaxSummaryTabProps {
  user: any;
}

export default function TaxSummaryTab({ user }: TaxSummaryTabProps) {
  const [activeView, setActiveView] = useState('breakdown');

  return (
    <div className="space-y-6">
      <TaxSummaryHeader />
      <TaxSummaryStats />
      <TaxSummaryContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 