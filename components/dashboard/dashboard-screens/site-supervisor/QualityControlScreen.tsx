'use client';

import { useState } from 'react';
import QualityControlHeader from './QualityControlHeader';
import QualityControlStats from './QualityControlStats';
import QualityControlContent from './QualityControlContent';

interface QualityControlScreenProps {
  user: any;
}

export default function QualityControlScreen({ user }: QualityControlScreenProps) {
  const [activeView, setActiveView] = useState('inspections');

  return (
    <div className="space-y-6">
      <QualityControlHeader />
      <QualityControlStats />
      <QualityControlContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 