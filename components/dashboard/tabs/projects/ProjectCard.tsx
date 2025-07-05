'use client';

import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  progress: number;
  deadline: string;
  status: string;
  budget: string;
  spent: string;
  client: string;
  startDate: string;
  team: number;
  phase: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (projectId: string) => void;
  onEditProject?: (projectId: string) => void;
  onGenerateReport?: (projectId: string) => void;
}

export default function ProjectCard({ project, onViewDetails, onEditProject, onGenerateReport }: ProjectCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'behind schedule': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'ahead of schedule': return <Clock className="w-5 h-5 text-blue-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'behind schedule': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'ahead of schedule': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.name}
            </h3>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
              {getStatusIcon(project.status)}
              <span className="ml-1">{project.status}</span>
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-medium">Client:</span> {project.client}
            </div>
            <div>
              <span className="font-medium">Budget:</span> {project.budget}
            </div>
            <div>
              <span className="font-medium">Team:</span> {project.team} members
            </div>
            <div>
              <span className="font-medium">Phase:</span> {project.phase}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-400">Start Date</p>
            <p className="font-medium text-gray-900 dark:text-white">{new Date(project.startDate).toLocaleDateString()}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-400">Deadline</p>
            <p className="font-medium text-gray-900 dark:text-white">{new Date(project.deadline).toLocaleDateString()}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-400">Spent</p>
            <p className="font-medium text-gray-900 dark:text-white">{project.spent}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => onViewDetails?.(project.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            View Details
          </button>
          <button 
            onClick={() => onEditProject?.(project.id)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            Edit Project
          </button>
          <button 
            onClick={() => onGenerateReport?.(project.id)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
} 