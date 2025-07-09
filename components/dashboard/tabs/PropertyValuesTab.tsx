import { useState } from 'react';
import PropertyValuesHeader from './property-values/PropertyValuesHeader';
import PropertyValuesStats from './property-values/PropertyValuesStats';
import PropertyValuesContent from './property-values/PropertyValuesContent';

interface PropertyValuesTabProps {
  user: any;
}

export default function PropertyValuesTab({ user }: PropertyValuesTabProps) {
  const [activeView, setActiveView] = useState('chart');

  return (
    <div className="space-y-6">
      <PropertyValuesHeader />
      <PropertyValuesStats />
      <PropertyValuesContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 