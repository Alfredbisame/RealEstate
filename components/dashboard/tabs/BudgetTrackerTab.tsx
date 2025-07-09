import { useState } from 'react';
import BudgetTrackerHeader from './budget-tracker/BudgetTrackerHeader';
import BudgetTrackerStats from './budget-tracker/BudgetTrackerStats';
import BudgetTrackerContent from './budget-tracker/BudgetTrackerContent';

interface BudgetTrackerTabProps {
  user: any;
}

export default function BudgetTrackerTab({ user }: BudgetTrackerTabProps) {
  const [activeView, setActiveView] = useState('table');

  return (
    <div className="space-y-6">
      <BudgetTrackerHeader />
      <BudgetTrackerStats />
      <BudgetTrackerContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 