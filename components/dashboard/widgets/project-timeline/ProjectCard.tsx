'use client';

import { ProjectCardProps } from './types';
import ProjectHeader from './ProjectHeader';
import ProjectProgress from './ProjectProgress';

export default function ProjectCard({ 
  project, 
  className = "",
  showBudget = true,
  showProgress = true,
  onClick 
}: ProjectCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-lg p-4 transition-all duration-200
        hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600
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
      <ProjectHeader project={project} />
      
      {showProgress && (
        <ProjectProgress 
          progress={project.progress} 
          showPercentage={true}
        />
      )}
      
      {/* Project team preview */}
      {project.team && project.team.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Team ({project.team.length})
            </span>
            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((member, index) => (
                <div 
                  key={index}
                  className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-medium border-2 border-white dark:border-gray-800"
                  title={member}
                >
                  {member.split(' ').map(n => n[0]).join('')}
                </div>
              ))}
              {project.team.length > 3 && (
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-600 dark:text-gray-300 font-medium border-2 border-white dark:border-gray-800">
                  +{project.team.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Milestones preview */}
      {project.milestones && project.milestones.length > 0 && (
        <div className="mt-2">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Milestones</span>
            <span>
              {project.milestones.filter(m => m.completed).length}/{project.milestones.length}
            </span>
          </div>
          <div className="flex space-x-1">
            {project.milestones.map((milestone, index) => (
              <div 
                key={milestone.id}
                className={`
                  flex-1 h-1 rounded-full transition-all duration-300
                  ${milestone.completed 
                    ? 'bg-green-500' 
                    : 'bg-gray-200 dark:bg-gray-700'
                  }
                `}
                title={`${milestone.name}: ${milestone.completed ? 'Completed' : 'Pending'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 