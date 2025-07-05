import { Project, ProjectStats, ProjectPriority } from './types';
import { Calendar, Clock, AlertTriangle, CheckCircle, Flag } from 'lucide-react';

export const getStatusIcon = (status: Project['status']) => {
  switch (status.toLowerCase()) {
    case 'on track': 
      return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
    case 'behind schedule': 
      return <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />;
    case 'ahead of schedule': 
      return <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    case 'completed': 
      return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
    case 'delayed': 
      return <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
    default: 
      return <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
  }
};

export const getStatusColor = (status: Project['status']): string => {
  switch (status.toLowerCase()) {
    case 'on track': 
      return 'text-green-600 dark:text-green-400';
    case 'behind schedule': 
      return 'text-red-600 dark:text-red-400';
    case 'ahead of schedule': 
      return 'text-blue-600 dark:text-blue-400';
    case 'completed': 
      return 'text-green-600 dark:text-green-400';
    case 'delayed': 
      return 'text-orange-600 dark:text-orange-400';
    default: 
      return 'text-gray-600 dark:text-gray-400';
  }
};

export const getStatusBgColor = (status: Project['status']): string => {
  switch (status.toLowerCase()) {
    case 'on track': 
      return 'bg-green-50 dark:bg-green-900/20';
    case 'behind schedule': 
      return 'bg-red-50 dark:bg-red-900/20';
    case 'ahead of schedule': 
      return 'bg-blue-50 dark:bg-blue-900/20';
    case 'completed': 
      return 'bg-green-50 dark:bg-green-900/20';
    case 'delayed': 
      return 'bg-orange-50 dark:bg-orange-900/20';
    default: 
      return 'bg-gray-50 dark:bg-gray-900/20';
  }
};

export const getProgressColor = (progress: number): string => {
  if (progress >= 80) return 'bg-green-500 dark:bg-green-400';
  if (progress >= 50) return 'bg-blue-500 dark:bg-blue-400';
  if (progress >= 25) return 'bg-orange-500 dark:bg-orange-400';
  return 'bg-red-500 dark:bg-red-400';
};

export const getProgressLabel = (progress: number): string => {
  if (progress >= 90) return 'Excellent';
  if (progress >= 75) return 'Good';
  if (progress >= 50) return 'Fair';
  if (progress >= 25) return 'Poor';
  return 'Critical';
};

export const getPriorityConfig = (priority: Project['priority'] = 'medium'): ProjectPriority => {
  switch (priority) {
    case 'critical':
      return {
        level: 'critical',
        color: 'red',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        textColor: 'text-red-700 dark:text-red-300'
      };
    case 'high':
      return {
        level: 'high',
        color: 'orange',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        textColor: 'text-orange-700 dark:text-orange-300'
      };
    case 'medium':
      return {
        level: 'medium',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300'
      };
    case 'low':
      return {
        level: 'low',
        color: 'green',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        textColor: 'text-green-700 dark:text-green-300'
      };
    default:
      return {
        level: 'medium',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300'
      };
  }
};

export const getPriorityIcon = (priority: Project['priority'] = 'medium') => {
  const config = getPriorityConfig(priority);
  return (
    <Flag 
      className={`w-3 h-3 ${config.textColor}`} 
      style={{ color: config.color }}
    />
  );
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return `${Math.abs(diffDays)} days overdue`;
  } else if (diffDays === 0) {
    return 'Due today';
  } else if (diffDays === 1) {
    return 'Due tomorrow';
  } else if (diffDays <= 7) {
    return `Due in ${diffDays} days`;
  } else {
    return date.toLocaleDateString();
  }
};

export const getDaysUntilDeadline = (deadline: string): number => {
  const date = new Date(deadline);
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const isOverdue = (deadline: string): boolean => {
  return getDaysUntilDeadline(deadline) < 0;
};

export const isDueSoon = (deadline: string, days: number = 7): boolean => {
  const daysUntil = getDaysUntilDeadline(deadline);
  return daysUntil >= 0 && daysUntil <= days;
};

export const calculateProjectStats = (projects: Project[]): ProjectStats => {
  const totalProjects = projects.length;
  const onTrack = projects.filter(p => p.status === 'on track').length;
  const behindSchedule = projects.filter(p => p.status === 'behind schedule').length;
  const aheadOfSchedule = projects.filter(p => p.status === 'ahead of schedule').length;
  const completed = projects.filter(p => p.status === 'completed').length;
  
  const averageProgress = totalProjects > 0 
    ? projects.reduce((sum, p) => sum + p.progress, 0) / totalProjects 
    : 0;

  const totalBudget = projects.reduce((sum, p) => {
    const budget = parseFloat(p.budget.replace(/[^0-9.-]+/g, ''));
    return sum + (isNaN(budget) ? 0 : budget);
  }, 0);

  const totalSpent = projects.reduce((sum, p) => {
    const spent = parseFloat(p.spent.replace(/[^0-9.-]+/g, ''));
    return sum + (isNaN(spent) ? 0 : spent);
  }, 0);

  return {
    totalProjects,
    onTrack,
    behindSchedule,
    aheadOfSchedule,
    completed,
    averageProgress,
    totalBudget,
    totalSpent
  };
};

export const sortProjects = (projects: Project[], sortBy: 'deadline' | 'progress' | 'priority' | 'name' = 'deadline'): Project[] => {
  return [...projects].sort((a, b) => {
    switch (sortBy) {
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'progress':
        return b.progress - a.progress;
      case 'priority':
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return (priorityOrder[b.priority || 'medium'] || 2) - (priorityOrder[a.priority || 'medium'] || 2);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
};

export const filterProjects = (projects: Project[], filters: any): Project[] => {
  return projects.filter(project => {
    if (filters.status && project.status !== filters.status) return false;
    if (filters.priority && project.priority !== filters.priority) return false;
    if (filters.dateRange) {
      const deadline = new Date(project.deadline);
      const start = new Date(filters.dateRange.start);
      const end = new Date(filters.dateRange.end);
      if (deadline < start || deadline > end) return false;
    }
    return true;
  });
};

export const getProjectEfficiency = (project: Project): number => {
  const daysUntilDeadline = getDaysUntilDeadline(project.deadline);
  const progress = project.progress;
  
  // Calculate efficiency based on progress vs time remaining
  if (daysUntilDeadline < 0) {
    return Math.max(0, progress - Math.abs(daysUntilDeadline) * 10);
  }
  
  const expectedProgress = Math.max(0, 100 - (daysUntilDeadline * 5));
  return Math.max(0, progress - expectedProgress);
}; 