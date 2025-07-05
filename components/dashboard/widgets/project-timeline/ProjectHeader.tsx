'use client';

import { Calendar, Flag } from 'lucide-react';
import { ProjectHeaderProps } from './types';
import { formatDate, getDaysUntilDeadline, isOverdue, isDueSoon, getPriorityConfig, getPriorityIcon } from './utils.tsx';
import ProjectStatus from './ProjectStatus';
import ProjectBudget from './ProjectBudget';

export default function ProjectHeader({ 
  project, 
  className = "" 
}: ProjectHeaderProps) {
  const daysUntilDeadline = getDaysUntilDeadline(project.deadline);
  const priorityConfig = getPriorityConfig(project.priority);

  return (
    <div className={`flex items-start justify-between mb-3 ${className}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <h4 className="font-medium text-gray-900 dark:text-white truncate">
            {project.name}
          </h4>
          {project.priority && project.priority !== 'medium' && (
            <div className={`
              inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
              ${priorityConfig.bgColor} ${priorityConfig.textColor}
            `}>
              {getPriorityIcon(project.priority)}
              <span className="ml-1 capitalize">{project.priority}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <ProjectStatus status={project.status} />
          <span>•</span>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span className={`
              ${isOverdue(project.deadline) ? 'text-red-600 dark:text-red-400 font-medium' : ''}
              ${isDueSoon(project.deadline) && !isOverdue(project.deadline) ? 'text-orange-600 dark:text-orange-400 font-medium' : ''}
            `}>
              {formatDate(project.deadline)}
            </span>
          </div>
        </div>
        
        {project.description && (
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
      
      <div className="ml-4 flex-shrink-0">
        <ProjectBudget budget={project.budget} spent={project.spent} />
      </div>
    </div>
  );
} 