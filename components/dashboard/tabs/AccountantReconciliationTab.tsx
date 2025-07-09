import { useState } from 'react';
import AccountantReconciliationHeader from './reconciliation/AccountantReconciliationHeader';
import AccountantReconciliationStats from './reconciliation/AccountantReconciliationStats';
import AccountantReconciliationContent from './reconciliation/AccountantReconciliationContent';

interface AccountantReconciliationTabProps {
  user: any;
}

export default function AccountantReconciliationTab({ user }: AccountantReconciliationTabProps) {
  const [activeView, setActiveView] = useState('accounts');

  return (
    <div className="space-y-6">
      <AccountantReconciliationHeader />
      <AccountantReconciliationStats />
      <AccountantReconciliationContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 