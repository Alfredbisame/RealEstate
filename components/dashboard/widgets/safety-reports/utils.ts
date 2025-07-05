import { SafetyMetric, SafetyIncident, SafetyStats, SafetyFilters, SafetyPriority, SafetyAlert } from './types';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Warning,
  Info,
  XCircle,
  User,
  MapPin,
  Calendar,
  DollarSign,
  Clock as TimeIcon
} from 'lucide-react';

export const getSeverityColor = (severity: SafetyIncident['severity']) => {
  switch (severity) {
    case 'critical': 
      return {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-800 dark:text-red-400',
        border: 'border-red-200 dark:border-red-800'
      };
    case 'high': 
      return {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-800 dark:text-red-400',
        border: 'border-red-200 dark:border-red-800'
      };
    case 'medium': 
      return {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-800 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'low': 
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-800'
      };
    default: 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
  }
};

export const getStatusColor = (status: SafetyIncident['status']) => {
  switch (status) {
    case 'Resolved': 
      return {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800'
      };
    case 'Under Review': 
      return {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-800 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'Pending': 
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-800'
      };
    case 'Escalated': 
      return {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-800 dark:text-red-400',
        border: 'border-red-200 dark:border-red-800'
      };
    case 'Closed': 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
    default: 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
  }
};

export const getStatusIcon = (status: SafetyIncident['status']) => {
  switch (status) {
    case 'Resolved':
      return <CheckCircle className="w-3 h-3" />;
    case 'Under Review':
      return <Clock className="w-3 h-3" />;
    case 'Pending':
      return <Clock className="w-3 h-3" />;
    case 'Escalated':
      return <AlertTriangle className="w-3 h-3" />;
    case 'Closed':
      return <CheckCircle className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

export const getMetricColor = (color: SafetyMetric['color']) => {
  switch (color) {
    case 'green':
      return 'text-green-600 dark:text-green-400';
    case 'orange':
      return 'text-orange-600 dark:text-orange-400';
    case 'red':
      return 'text-red-600 dark:text-red-400';
    case 'blue':
      return 'text-blue-600 dark:text-blue-400';
    case 'yellow':
      return 'text-yellow-600 dark:text-yellow-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
};

export const getMetricBgColor = (color: SafetyMetric['color']) => {
  switch (color) {
    case 'green':
      return 'bg-green-50 dark:bg-green-900/20';
    case 'orange':
      return 'bg-orange-50 dark:bg-orange-900/20';
    case 'red':
      return 'bg-red-50 dark:bg-red-900/20';
    case 'blue':
      return 'bg-blue-50 dark:bg-blue-900/20';
    case 'yellow':
      return 'bg-yellow-50 dark:bg-yellow-900/20';
    default:
      return 'bg-gray-50 dark:bg-gray-900/20';
  }
};

export const getTrendIcon = (trend: 'up' | 'down' | 'stable' = 'stable') => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />;
    case 'down':
      return <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />;
    case 'stable':
      return <Minus className="w-3 h-3 text-gray-600 dark:text-gray-400" />;
    default:
      return <Minus className="w-3 h-3 text-gray-600 dark:text-gray-400" />;
  }
};

export const getTrendDirection = (change: string): 'up' | 'down' | 'stable' => {
  if (change.startsWith('+')) return 'up';
  if (change.startsWith('-')) return 'down';
  return 'stable';
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
};

export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toLocaleString()}`;
};

export const formatTime = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  } else if (minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    return `${hours} hr${hours > 1 ? 's' : ''}`;
  } else {
    const days = Math.floor(minutes / 1440);
    return `${days} day${days > 1 ? 's' : ''}`;
  }
};

export const calculateSafetyStats = (incidents: SafetyIncident[]): SafetyStats => {
  const totalIncidents = incidents.length;
  const resolvedIncidents = incidents.filter(i => i.status === 'Resolved' || i.status === 'Closed').length;
  const pendingIncidents = incidents.filter(i => i.status === 'Under Review' || i.status === 'Pending').length;
  const criticalIncidents = incidents.filter(i => i.severity === 'critical' || i.severity === 'high').length;
  
  const safetyScore = totalIncidents > 0 ? Math.max(0, 100 - (totalIncidents * 5)) : 100;
  
  const daysWithoutIncident = incidents.length > 0 
    ? Math.floor((new Date().getTime() - new Date(incidents[0].date).getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  
  const totalCost = incidents.reduce((sum, i) => sum + (i.cost || 0), 0);
  const totalTimeLost = incidents.reduce((sum, i) => sum + (i.timeLost || 0), 0);
  
  const resolvedIncidentsWithTime = incidents.filter(i => 
    i.status === 'Resolved' || i.status === 'Closed'
  );
  
  const averageResolutionTime = resolvedIncidentsWithTime.length > 0
    ? resolvedIncidentsWithTime.reduce((sum, i) => sum + (i.timeLost || 0), 0) / resolvedIncidentsWithTime.length
    : 0;

  return {
    totalIncidents,
    resolvedIncidents,
    pendingIncidents,
    criticalIncidents,
    safetyScore,
    daysWithoutIncident,
    averageResolutionTime,
    totalCost,
    totalTimeLost
  };
};

export const filterIncidents = (incidents: SafetyIncident[], filters: SafetyFilters): SafetyIncident[] => {
  return incidents.filter(incident => {
    if (filters.severity && incident.severity !== filters.severity) return false;
    if (filters.status && incident.status !== filters.status) return false;
    if (filters.department && incident.department !== filters.department) return false;
    if (filters.worker && !incident.worker.toLowerCase().includes(filters.worker.toLowerCase())) return false;
    if (filters.dateRange) {
      const incidentDate = new Date(incident.date);
      const start = new Date(filters.dateRange.start);
      const end = new Date(filters.dateRange.end);
      if (incidentDate < start || incidentDate > end) return false;
    }
    return true;
  });
};

export const sortIncidents = (incidents: SafetyIncident[], sortBy: 'date' | 'severity' | 'status' | 'worker' = 'date'): SafetyIncident[] => {
  return [...incidents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'severity':
        const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return (severityOrder[b.severity] || 1) - (severityOrder[a.severity] || 1);
      case 'status':
        const statusOrder = { 'Under Review': 4, 'Pending': 3, 'Escalated': 2, 'Resolved': 1, 'Closed': 0 };
        return (statusOrder[b.status] || 0) - (statusOrder[a.status] || 0);
      case 'worker':
        return a.worker.localeCompare(b.worker);
      default:
        return 0;
    }
  });
};

export const getIncidentPriority = (incident: SafetyIncident): SafetyPriority => {
  switch (incident.severity) {
    case 'critical':
      return {
        level: 'critical',
        color: 'red',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        textColor: 'text-red-700 dark:text-red-300',
        icon: XCircle
      };
    case 'high':
      return {
        level: 'high',
        color: 'red',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        textColor: 'text-red-700 dark:text-red-300',
        icon: AlertTriangle
      };
    case 'medium':
      return {
        level: 'medium',
        color: 'orange',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        textColor: 'text-orange-700 dark:text-orange-300',
        icon: Warning
      };
    case 'low':
      return {
        level: 'low',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300',
        icon: Info
      };
    default:
      return {
        level: 'low',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300',
        icon: Info
      };
  }
};

export const getAlertIcon = (type: SafetyAlert['type']) => {
  switch (type) {
    case 'warning':
      return <Warning className="w-4 h-4" />;
    case 'critical':
      return <XCircle className="w-4 h-4" />;
    case 'info':
      return <Info className="w-4 h-4" />;
    case 'success':
      return <CheckCircle className="w-4 h-4" />;
    default:
      return <Info className="w-4 h-4" />;
  }
};

export const getAlertColor = (type: SafetyAlert['type']) => {
  switch (type) {
    case 'warning':
      return 'text-yellow-600 dark:text-yellow-400';
    case 'critical':
      return 'text-red-600 dark:text-red-400';
    case 'info':
      return 'text-blue-600 dark:text-blue-400';
    case 'success':
      return 'text-green-600 dark:text-green-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
}; 