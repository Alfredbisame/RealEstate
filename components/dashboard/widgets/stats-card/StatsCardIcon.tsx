'use client';

import { StatsCardIconProps } from './types';
import { getColorClasses, getSizeClasses } from './utils';

export default function StatsCardIcon({ 
  icon: Icon, 
  color, 
  className = "",
  size = 'md',
  animated = false 
}: StatsCardIconProps) {
  const colors = getColorClasses(color);
  const sizes = getSizeClasses(size);

  return (
    <div className={`
      ${sizes.icon} rounded-xl flex items-center justify-center
      ${colors.bg} ${colors.text}
      transition-all duration-300 group-hover:scale-110
      ${animated ? 'animate-pulse' : ''}
      ${className}
    `}>
      <Icon size={sizes.iconSize} className="transition-transform duration-300 group-hover:rotate-12" />
    </div>
  );
}