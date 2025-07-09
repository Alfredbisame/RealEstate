import { useState } from 'react';
import AccountantTaxComplianceHeader from './tax-compliance/AccountantTaxComplianceHeader';
import AccountantTaxComplianceStats from './tax-compliance/AccountantTaxComplianceStats';
import AccountantTaxComplianceContent from './tax-compliance/AccountantTaxComplianceContent';

interface AccountantTaxComplianceTabProps {
  user: any;
}

export default function AccountantTaxComplianceTab({ user }: AccountantTaxComplianceTabProps) {
  const [activeView, setActiveView] = useState('gra');

  return (
    <div className="space-y-6">
      <AccountantTaxComplianceHeader />
      <AccountantTaxComplianceStats />
      <AccountantTaxComplianceContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 