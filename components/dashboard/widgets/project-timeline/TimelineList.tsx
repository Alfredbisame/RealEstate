'use client';

import { TimelineListProps } from './types';
import ProjectCard from './ProjectCard';

export default function TimelineList({
  projects,
  className = "",
  maxHeight = "max-h-80",
  showBudget = true,
  showProgress = true,
  onProjectClick
}: TimelineListProps) {
  if (projects.length === 0) {
    return (
      <div className={`
        flex flex-col items-center justify-center py-8 text-center
        ${className}
      `}>
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No Projects Found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          There are no projects in the timeline. Projects will appear here once they are added to the system.
        </p>
      </div>
    );
  }

  return (
    <div className={`
      space-y-4 overflow-y-auto ${maxHeight}
      scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
      scrollbar-track-gray-100 dark:scrollbar-track-gray-800
      ${className}
    `}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          showBudget={showBudget}
          showProgress={showProgress}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
} 