'use client';

import { TimelineListProps } from './types';
import TimelineList from './TimelineList';

interface TimelineContentProps {
  projects: TimelineListProps['projects'];
  className?: string;
  maxHeight?: string;
  showBudget?: boolean;
  showProgress?: boolean;
  onProjectClick?: (project: any) => void;
}

export default function TimelineContent({
  projects,
  className = "",
  maxHeight = "max-h-80",
  showBudget = true,
  showProgress = true,
  onProjectClick
}: TimelineContentProps) {
  return (
    <div className={`h-full ${className}`}>
      <TimelineList
        projects={projects}
        maxHeight={maxHeight}
        showBudget={showBudget}
        showProgress={showProgress}
        onProjectClick={onProjectClick}
      />
    </div>
  );
} 