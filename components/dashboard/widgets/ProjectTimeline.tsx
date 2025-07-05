'use client';

import { ProjectTimelineProps } from './project-timeline/types';
import TimelineHeader from './project-timeline/TimelineHeader';
import TimelineContent from './project-timeline/TimelineContent';

export default function ProjectTimeline({ 
  projects, 
  className = "",
  maxHeight = "max-h-80",
  showBudget = true,
  showProgress = true
}: ProjectTimelineProps) {
  return (
    <div className={`h-full ${className}`}>
      <TimelineHeader 
        title="Project Timeline" 
        totalProjects={projects.length}
      />
      <TimelineContent
        projects={projects}
        maxHeight={maxHeight}
        showBudget={showBudget}
        showProgress={showProgress}
      />
    </div>
  );
}