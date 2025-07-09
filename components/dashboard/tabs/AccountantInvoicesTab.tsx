import { useState } from 'react';
import AccountantInvoicesHeader from './invoices/AccountantInvoicesHeader';
import AccountantInvoicesStats from './invoices/AccountantInvoicesStats';
import AccountantInvoicesContent from './invoices/AccountantInvoicesContent';

interface AccountantInvoicesTabProps {
  user: any;
}

export default function AccountantInvoicesTab({ user }: AccountantInvoicesTabProps) {
  const [activeView, setActiveView] = useState('table');

  return (
    <div className="space-y-6">
      <AccountantInvoicesHeader />
      <AccountantInvoicesStats />
      <AccountantInvoicesContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 