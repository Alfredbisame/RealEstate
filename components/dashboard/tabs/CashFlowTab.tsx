import { useState } from 'react';
import CashFlowHeader from './cashflow/CashFlowHeader';
import CashFlowStats from './cashflow/CashFlowStats';
import CashFlowContent from './cashflow/CashFlowContent';

interface CashFlowTabProps {
  user: any;
}

export default function CashFlowTab({ user }: CashFlowTabProps) {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="space-y-6">
      <CashFlowHeader />
      <CashFlowStats />
      <CashFlowContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 