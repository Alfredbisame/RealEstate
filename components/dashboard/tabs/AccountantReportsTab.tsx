import { useState } from 'react';
import AccountantReportsHeader from './reports/AccountantReportsHeader';
import AccountantReportsStats from './reports/AccountantReportsStats';
import AccountantReportsContent from './reports/AccountantReportsContent';

interface AccountantReportsTabProps {
  user: any;
}

export default function AccountantReportsTab({ user }: AccountantReportsTabProps) {
  const [activeView, setActiveView] = useState('financial');

  return (
    <div className="space-y-6">
      <AccountantReportsHeader />
      <AccountantReportsStats />
      <AccountantReportsContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 