'use client';

import { IncidentCardProps } from './types';
import { formatDate, formatCurrency, formatTime } from './utils';
import IncidentSeverity from './IncidentSeverity';
import IncidentStatus from './IncidentStatus';
import { User, MapPin, Calendar, DollarSign, TimerIcon, FileText } from 'lucide-react';

export default function IncidentCard({ 
  incident, 
  className = "",
  onClick,
  showDetails = false 
}: IncidentCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(incident);
    }
  };

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-xl p-4 transition-all duration-300 group
        hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
            {incident.type}
          </h4>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{incident.worker}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(incident.date)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <IncidentSeverity severity={incident.severity} />
        </div>
      </div>

      {/* Description */}
      {incident.description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {incident.description}
        </p>
      )}

      {/* Location and Department */}
      {(incident.location || incident.department) && (
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
          {incident.location && (
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{incident.location}</span>
            </div>
          )}
          {incident.department && (
            <div className="flex items-center space-x-1">
              <span>{incident.department}</span>
            </div>
          )}
        </div>
      )}

      {/* Cost and Time Lost */}
      {(incident.cost || incident.timeLost) && (
        <div className="flex items-center space-x-4 mb-3 text-xs">
          {incident.cost !== undefined && (
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <DollarSign className="w-3 h-3" />
              <span>{formatCurrency(incident.cost)}</span>
            </div>
          )}
          {incident.timeLost !== undefined && (
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <TimerIcon className="w-3 h-3" />
              <span>{formatTime(incident.timeLost)} lost</span>
            </div>
          )}
        </div>
      )}

      {/* Status and Actions */}
      <div className="flex items-center justify-between">
        <IncidentStatus status={incident.status} />
        
        <div className="flex items-center space-x-2">
          {incident.attachments && incident.attachments.length > 0 && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <FileText className="w-3 h-3" />
              <span>{incident.attachments.length}</span>
            </div>
          )}
          
          {incident.followUpRequired && (
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          )}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-300 pointer-events-none" />
    </div>
  );
} 