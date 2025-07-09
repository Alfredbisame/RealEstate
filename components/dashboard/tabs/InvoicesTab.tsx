import { useState } from 'react';
import InvoicesHeader from './invoices/InvoicesHeader';
import InvoicesStats from './invoices/InvoicesStats';
import InvoicesContent from './invoices/InvoicesContent';

interface InvoicesTabProps {
  user: any;
}

export default function InvoicesTab({ user }: InvoicesTabProps) {
  const [activeView, setActiveView] = useState('table');

  return (
    <div className="space-y-6">
      <InvoicesHeader />
      <InvoicesStats />
      <InvoicesContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 