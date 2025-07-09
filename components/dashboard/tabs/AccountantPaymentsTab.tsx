import { useState } from 'react';
import AccountantPaymentsHeader from './payments/AccountantPaymentsHeader';
import AccountantPaymentsStats from './payments/AccountantPaymentsStats';
import AccountantPaymentsContent from './payments/AccountantPaymentsContent';

interface AccountantPaymentsTabProps {
  user: any;
}

export default function AccountantPaymentsTab({ user }: AccountantPaymentsTabProps) {
  const [activeView, setActiveView] = useState('table');

  return (
    <div className="space-y-6">
      <AccountantPaymentsHeader />
      <AccountantPaymentsStats />
      <AccountantPaymentsContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 