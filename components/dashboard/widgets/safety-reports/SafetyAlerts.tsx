'use client';

import { SafetyAlertsProps, SafetyAlert } from './types';
import { getAlertIcon, getAlertColor } from './utils';
import { formatDate } from './utils';
import { X, Bell } from 'lucide-react';

export default function SafetyAlerts({ 
  alerts, 
  className = "",
  maxAlerts = 5 
}: SafetyAlertsProps) {
  const displayAlerts = alerts.slice(0, maxAlerts);

  if (displayAlerts.length === 0) {
    return (
      <div className={`text-center py-6 text-gray-500 dark:text-gray-400 ${className}`}>
        <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No active alerts</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Safety Alerts ({displayAlerts.length})
        </h4>
        {alerts.length > maxAlerts && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{alerts.length - maxAlerts} more
          </span>
        )}
      </div>

      <div className="space-y-2">
        {displayAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`
              bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
              rounded-lg p-3 transition-all duration-200 hover:shadow-md
              ${alert.actionRequired ? 'border-l-4 border-l-orange-500' : ''}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`mt-0.5 ${getAlertColor(alert.type)}`}>
                  {getAlertIcon(alert.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                      {alert.title}
                    </h5>
                    {alert.priority === 'urgent' && (
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs px-2 py-0.5 rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {alert.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(alert.date)}
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      {alert.actionRequired && (
                        <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded-full">
                          Action Required
                        </span>
                      )}
                      
                      {!alert.acknowledged && (
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 