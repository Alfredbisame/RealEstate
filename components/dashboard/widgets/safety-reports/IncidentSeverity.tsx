'use client';

import { IncidentSeverityProps } from './types';
import { getSeverityColor } from './utils';
import { AlertTriangle, XCircle, Warning, Info } from 'lucide-react';

export default function IncidentSeverity({ 
  severity, 
  className = "",
  showIcon = true 
}: IncidentSeverityProps) {
  const colors = getSeverityColor(severity);
  
  const getIcon = () => {
    switch (severity) {
      case 'critical':
        return <XCircle className="w-3 h-3" />;
      case 'high':
        return <AlertTriangle className="w-3 h-3" />;
      case 'medium':
        return <Warning className="w-3 h-3" />;
      case 'low':
        return <Info className="w-3 h-3" />;
      default:
        return <Info className="w-3 h-3" />;
    }
  };

  return (
    <span className={`
      inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium
      ${colors.bg} ${colors.text} ${colors.border} border
      transition-all duration-200 hover:scale-105
      ${className}
    `}>
      {showIcon && getIcon()}
      <span className="capitalize">{severity}</span>
    </span>
  );
} 