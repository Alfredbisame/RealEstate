'use client';

import { PropertyStatusProps } from './types';
import { getStatusColor } from './utils';
import { 
  Home, 
  Building, 
  Factory, 
  MapPin, 
  Wrench, 
  CheckCircle, 
  Clock 
} from 'lucide-react';

export default function PropertyStatus({ 
  status, 
  className = "",
  showIcon = true 
}: PropertyStatusProps) {
  const colors = getStatusColor(status);
  
  const getStatusIcon = () => {
    if (!showIcon) return null;
    
    switch (status.toLowerCase()) {
      case 'occupied':
        return <Home className="w-3 h-3" />;
      case 'available':
        return <CheckCircle className="w-3 h-3" />;
      case 'under construction':
        return <Wrench className="w-3 h-3" />;
      case 'maintenance':
        return <Wrench className="w-3 h-3" />;
      case 'sold':
        return <CheckCircle className="w-3 h-3" />;
      case 'rented':
        return <Clock className="w-3 h-3" />;
      default:
        return <Building className="w-3 h-3" />;
    }
  };

  const getStatusText = () => {
    switch (status.toLowerCase()) {
      case 'under construction':
        return 'Under Construction';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <div className={`
      inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium
      ${colors.bg} ${colors.text} ${colors.border} border
      transition-all duration-200 hover:scale-105
      ${className}
    `}>
      {getStatusIcon()}
      <span className="capitalize">{getStatusText()}</span>
      
      {/* Animated dot for active statuses */}
      {(status === 'available' || status === 'occupied') && (
        <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
      )}
    </div>
  );
} 