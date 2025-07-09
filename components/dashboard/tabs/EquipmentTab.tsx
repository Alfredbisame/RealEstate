import { useState } from 'react';
import EquipmentHeader from './equipment/EquipmentHeader';
import EquipmentStats from './equipment/EquipmentStats';
import EquipmentContent from './equipment/EquipmentContent';

interface EquipmentTabProps {
  user: any;
}

export default function EquipmentTab({ user }: EquipmentTabProps) {
  const [activeView, setActiveView] = useState('rental');

  return (
    <div className="space-y-6">
      <EquipmentHeader />
      <EquipmentStats />
      <EquipmentContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 