'use client';

import { CheckCircle, AlertTriangle, Clock, Calendar } from 'lucide-react';
import { ComplianceItem as ComplianceItemType, ComplianceStatus } from './types';
import { getStatusIcon, getStatusColor, getStatusLabel, formatDate, getDaysUntilDue, getUrgencyLevel } from './utils';

interface ComplianceItemProps {
  item: ComplianceItemType;
  className?: string;
}

export default function ComplianceItem({ item, className = "" }: ComplianceItemProps) {
  const daysUntilDue = getDaysUntilDue(item.dueDate);
  const urgencyLevel = getUrgencyLevel(item.dueDate, item.status);

  const getUrgencyIndicator = () => {
    if (item.status === 'compliant') return null;
    
    const urgencyColors = {
      low: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
      medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      high: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      critical: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    };

    const urgencyText = {
      low: 'Due Soon',
      medium: 'Due This Week',
      high: 'Due Soon',
      critical: 'Overdue'
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium ${urgencyColors[urgencyLevel]}`}>
        {urgencyText[urgencyLevel]}
      </span>
    );
  };

  return (
    <div className={`flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors ${className}`}>
      <div className="flex items-center space-x-3 flex-1">
        <div className="flex-shrink-0">
          {item.status === 'compliant' && <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />}
          {item.status === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
          {item.status === 'pending' && <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
          {item.status === 'overdue' && <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />}
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
            {item.name}
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>Due: {formatDate(item.dueDate)}</span>
            </div>
            {daysUntilDue !== 0 && item.status !== 'compliant' && (
              <span className={`text-xs ${
                daysUntilDue < 0 ? 'text-red-600 dark:text-red-400' :
                daysUntilDue <= 7 ? 'text-orange-600 dark:text-orange-400' :
                'text-blue-600 dark:text-blue-400'
              }`}>
                {daysUntilDue < 0 ? `${Math.abs(daysUntilDue)} days overdue` :
                 daysUntilDue === 1 ? 'Due tomorrow' :
                 `${daysUntilDue} days left`}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 flex-shrink-0">
        {getUrgencyIndicator()}
        <span className={`px-3 py-1 text-xs rounded-full font-medium border ${getStatusColor(item.status)}`}>
          {getStatusLabel(item.status)}
        </span>
      </div>
    </div>
  );
} 