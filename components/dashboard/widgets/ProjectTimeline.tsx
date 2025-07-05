'use client';

import { Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  progress: number;
  deadline: string;
  status: string;
  budget: string;
  spent: string;
}

interface ProjectTimelineProps {
  projects: Project[];
}

export default function ProjectTimeline({ projects }: ProjectTimelineProps) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'behind schedule': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'ahead of schedule': return <Clock className="w-4 h-4 text-blue-600" />;
      default: return <Calendar className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return 'text-green-600';
      case 'behind schedule': return 'text-red-600';
      case 'ahead of schedule': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="h-full">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Project Timeline</h3>
      
      <div className="space-y-4 overflow-y-auto max-h-80">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{project.name}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  {getStatusIcon(project.status)}
                  <span className={getStatusColor(project.status)}>{project.status}</span>
                  <span>•</span>
                  <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="font-medium text-gray-900 dark:text-white">{project.budget}</p>
                <p className="text-gray-500 dark:text-gray-400">Spent: {project.spent}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}