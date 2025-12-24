import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

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

interface TimelineStatsProps {
  milestones: ProjectMilestone[];
}

export default function TimelineStats({ milestones }: TimelineStatsProps) {
  // Calculate stats
  const totalMilestones = milestones.length;
  const completedMilestones = milestones.filter(milestone => milestone.status === 'completed').length;
  const inProgressMilestones = milestones.filter(milestone => milestone.status === 'in-progress').length;
  const delayedMilestones = milestones.filter(milestone => milestone.status === 'delayed').length;
  
  // Calculate overall progress
  const overallProgress = totalMilestones > 0 
    ? Math.round(milestones.reduce((sum, milestone) => sum + milestone.progress, 0) / totalMilestones)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Milestones</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalMilestones}</p>
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Completed</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{completedMilestones}</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">In Progress</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{inProgressMilestones}</p>
          </div>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
            <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Delayed</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{delayedMilestones}</p>
          </div>
          <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}