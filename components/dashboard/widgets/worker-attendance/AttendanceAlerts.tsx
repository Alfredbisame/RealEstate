'use client';

import { AlertTriangle, Clock, UserX, TrendingUp, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AttendanceAlertsProps } from './types';
import { cn } from '@/lib/utils';

export function AttendanceAlerts({ alerts, maxAlerts = 5, className = '' }: AttendanceAlertsProps) {
  const displayedAlerts = alerts.slice(0, maxAlerts);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'late':
        return <Clock className="w-4 h-4" />;
      case 'absent':
        return <UserX className="w-4 h-4" />;
      case 'overtime':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          border: 'border-red-200 dark:border-red-800',
          text: 'text-red-800 dark:text-red-200',
          icon: 'text-red-600'
        };
      case 'medium':
        return {
          bg: 'bg-orange-50 dark:bg-orange-900/20',
          border: 'border-orange-200 dark:border-orange-800',
          text: 'text-orange-800 dark:text-orange-200',
          icon: 'text-orange-600'
        };
      case 'low':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          text: 'text-blue-800 dark:text-blue-200',
          icon: 'text-blue-600'
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-900/20',
          border: 'border-gray-200 dark:border-gray-800',
          text: 'text-gray-800 dark:text-gray-200',
          icon: 'text-gray-600'
        };
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffMs = now.getTime() - alertTime.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMinutes > 0) return `${diffMinutes}m ago`;
    return 'Just now';
  };

  if (displayedAlerts.length === 0) {
    return (
      <div className={cn('text-center py-6 text-gray-500 dark:text-gray-400', className)}>
        <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm">No attendance alerts</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900 dark:text-white">Recent Alerts</h4>
        <Badge variant="secondary" className="text-xs">
          {alerts.length}
        </Badge>
      </div>

      <div className="space-y-2">
        {displayedAlerts.map((alert) => {
          const colors = getAlertColor(alert.severity);
          
          return (
            <div
              key={alert.id}
              className={cn(
                'flex items-start space-x-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-sm',
                colors.bg,
                colors.border
              )}
            >
              <div className={cn('flex-shrink-0 mt-0.5', colors.icon)}>
                {getAlertIcon(alert.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={cn('text-sm font-medium', colors.text)}>
                  {alert.message}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {alert.workerName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTimeAgo(alert.timestamp)}
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          );
        })}
      </div>

      {alerts.length > maxAlerts && (
        <div className="mt-3 text-center">
          <Button variant="link" size="sm" className="text-xs">
            View all {alerts.length} alerts
          </Button>
        </div>
      )}
    </div>
  );
} 