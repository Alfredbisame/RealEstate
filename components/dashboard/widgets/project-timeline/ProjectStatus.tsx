'use client';

import { ProjectStatusProps } from './types';
import { getStatusIcon, getStatusColor, getStatusBgColor } from './utils';

export default function ProjectStatus({ 
  status, 
  className = "" 
}: ProjectStatusProps) {
  return (
    <div className={`
      inline-flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium
      ${getStatusBgColor(status)} ${getStatusColor(status)}
      ${className}
    `}>
      {getStatusIcon(status)}
      <span className="capitalize">{status.replace(' ', ' ')}</span>
    </div>
  );
} 