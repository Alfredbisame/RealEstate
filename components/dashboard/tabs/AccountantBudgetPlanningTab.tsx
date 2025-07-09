import { useState } from 'react';
import AccountantBudgetPlanningHeader from './budget-planning/AccountantBudgetPlanningHeader';
import AccountantBudgetPlanningStats from './budget-planning/AccountantBudgetPlanningStats';
import AccountantBudgetPlanningContent from './budget-planning/AccountantBudgetPlanningContent';

interface AccountantBudgetPlanningTabProps {
  user: any;
}

export default function AccountantBudgetPlanningTab({ user }: AccountantBudgetPlanningTabProps) {
  const [activeView, setActiveView] = useState('petty-cash');

  return (
    <div className="space-y-6">
      <AccountantBudgetPlanningHeader />
      <AccountantBudgetPlanningStats />
      <AccountantBudgetPlanningContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 