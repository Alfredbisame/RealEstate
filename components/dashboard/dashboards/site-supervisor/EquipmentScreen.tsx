'use client';

import { useState } from 'react';
import EquipmentHeader from './EquipmentHeader';
import EquipmentStats from './EquipmentStats';
import EquipmentContent from './EquipmentContent';

interface EquipmentScreenProps {
  user: any;
}

export default function EquipmentScreen({ user }: EquipmentScreenProps) {
  const [activeView, setActiveView] = useState('inventory');

  return (
    <div className="space-y-6">
      <EquipmentHeader />
      <EquipmentStats />
      <EquipmentContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 