import { Calendar, User, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

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

interface ProjectTimelineContentProps {
  milestones: ProjectMilestone[];
}

export default function ProjectTimelineContent({ milestones }: ProjectTimelineContentProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'planned': return <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
      case 'delayed': return <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />;
      default: return <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'planned': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'delayed': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="p-4">
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg max-w-full">
            <div className="flex items-center min-w-0 flex-1">
              <div className="mr-3 flex-shrink-0">
                {getStatusIcon(milestone.status)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{milestone.title}</p>
                <div className="flex items-center mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(milestone.status)}`}>
                    {milestone.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2 flex-shrink-0">
              {milestone.startDate} - {milestone.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}