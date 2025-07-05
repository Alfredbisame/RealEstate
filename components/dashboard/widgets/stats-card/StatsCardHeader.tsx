'use client';

import { StatsCardHeaderProps } from './types';
import StatsCardIcon from './StatsCardIcon';
import StatsCardChange from './StatsCardChange';

export default function StatsCardHeader({ 
  icon, 
  color, 
  change, 
  changeType, 
  className = "",
  size = 'md',
  showTrend = true,
  trend 
}: StatsCardHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <StatsCardIcon 
        icon={icon} 
        color={color} 
        size={size}
        animated={false}
      />
      
      <StatsCardChange
        change={change}
        changeType={changeType}
        size={size}
        showTrend={showTrend}
        trend={trend}
      />
    </div>
  );
} 