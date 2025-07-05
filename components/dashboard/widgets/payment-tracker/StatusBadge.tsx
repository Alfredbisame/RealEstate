'use client';

import { StatusBadgeProps } from './types';
import { getStatusIcon, getStatusColor, getStatusLabel } from './utils';

export default function StatusBadge({ 
  status, 
  className = "" 
}: StatusBadgeProps) {
  const { icon: Icon, className: iconClassName } = getStatusIcon(status);
  const statusColor = getStatusColor(status);
  const statusLabel = getStatusLabel(status);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Icon size={16} className={iconClassName} />
      <span className={`text-sm px-2 py-1 rounded-full border ${statusColor}`}>
        {statusLabel}
      </span>
    </div>
  );
} 