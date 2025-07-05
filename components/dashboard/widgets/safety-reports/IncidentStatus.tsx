'use client';

import { IncidentStatusProps } from './types';
import { getStatusColor, getStatusIcon } from './utils';

export default function IncidentStatus({ 
  status, 
  className = "",
  showIcon = true 
}: IncidentStatusProps) {
  const colors = getStatusColor(status);

  return (
    <div className={`
      inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium
      ${colors.bg} ${colors.text} ${colors.border} border
      transition-all duration-200 hover:scale-105
      ${className}
    `}>
      {showIcon && getStatusIcon(status)}
      <span>{status}</span>
    </div>
  );
} 