'use client';

import { Calendar, User, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import ProjectTimelineHeader from './ProjectTimelineHeader';
import ProjectTimelineContent from './ProjectTimelineContent';

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  progress: number;
  assignee: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface ProjectTimelineWidgetProps {
  milestones?: ProjectMilestone[];
  className?: string;
}

export default function ProjectTimelineWidget({ 
  milestones = [
    { id: '1', title: 'Site Preparation', description: 'Clearing and grading the construction site', startDate: '2023-06-01', endDate: '2023-07-15', status: 'completed', progress: 100, assignee: 'John Smith', priority: 'high' },
    { id: '2', title: 'Foundation Work', description: 'Laying the foundation for the building', startDate: '2023-07-16', endDate: '2023-08-30', status: 'completed', progress: 100, assignee: 'Mike Johnson', priority: 'critical' },
    { id: '3', title: 'Framing', description: 'Constructing the building frame', startDate: '2023-09-01', endDate: '2023-10-15', status: 'in-progress', progress: 65, assignee: 'Robert Davis', priority: 'high' },
  ],
  className = "" 
}: ProjectTimelineWidgetProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}>
      <ProjectTimelineHeader />
      <ProjectTimelineContent milestones={milestones} />
    </div>
  );
}