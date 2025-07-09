import { useState } from 'react';
import QualityControlHeader from './quality-control/QualityControlHeader';
import QualityControlStats from './quality-control/QualityControlStats';
import QualityControlContent from './quality-control/QualityControlContent';

interface QualityControlTabProps {
  user: any;
}

export default function QualityControlTab({ user }: QualityControlTabProps) {
  const [activeView, setActiveView] = useState('foundation');

  return (
    <div className="space-y-6">
      <QualityControlHeader />
      <QualityControlStats />
      <QualityControlContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 