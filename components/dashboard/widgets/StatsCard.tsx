'use client';

import { StatsCard as StatsCardComponent } from './stats-card';

export default function StatsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  color 
}: {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: any;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink';
}) {
  return (
    <StatsCardComponent
      title={title}
      value={value}
      change={change}
      changeType={changeType}
      icon={icon}
      color={color}
    />
  );
}