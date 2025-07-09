import { useState } from 'react';
import AccountantAuditTrailHeader from './audit-trail/AccountantAuditTrailHeader';
import AccountantAuditTrailStats from './audit-trail/AccountantAuditTrailStats';
import AccountantAuditTrailContent from './audit-trail/AccountantAuditTrailContent';

interface AccountantAuditTrailTabProps {
  user: any;
}

export default function AccountantAuditTrailTab({ user }: AccountantAuditTrailTabProps) {
  const [activeView, setActiveView] = useState('transactions');

  return (
    <div className="space-y-6">
      <AccountantAuditTrailHeader />
      <AccountantAuditTrailStats />
      <AccountantAuditTrailContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 