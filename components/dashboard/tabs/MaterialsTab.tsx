import { useState } from 'react';
import MaterialsHeader from './materials/MaterialsHeader';
import MaterialsStats from './materials/MaterialsStats';
import MaterialsContent from './materials/MaterialsContent';

interface MaterialsTabProps {
  user: any;
}

export default function MaterialsTab({ user }: MaterialsTabProps) {
  const [activeView, setActiveView] = useState('cost-breakdown');

  return (
    <div className="space-y-6">
      <MaterialsHeader />
      <MaterialsStats />
      <MaterialsContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 