import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download, Calendar } from 'lucide-react';

const projectPhases = [
  {
    id: 1,
    name: 'Foundation',
    progress: 100,
    status: 'completed',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    workers: 12,
    budget: '$45,000',
    actual: '$42,500'
  },
  {
    id: 2,
    name: 'Structural Framework',
    progress: 85,
    status: 'in-progress',
    startDate: '2024-02-16',
    endDate: '2024-04-15',
    workers: 18,
    budget: '$120,000',
    actual: '$98,000'
  },
  {
    id: 3,
    name: 'Electrical & Plumbing',
    progress: 60,
    status: 'in-progress',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    workers: 8,
    budget: '$85,000',
    actual: '$52,000'
  },
  {
    id: 4,
    name: 'Interior Finishing',
    progress: 0,
    status: 'pending',
    startDate: '2024-05-16',
    endDate: '2024-07-15',
    workers: 15,
    budget: '$95,000',
    actual: '$0'
  }
];

const recentActivities = [
  {
    id: 1,
    activity: 'Foundation inspection completed',
    phase: 'Foundation',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    id: 2,
    activity: 'Steel framework installation started',
    phase: 'Structural Framework',
    time: '4 hours ago',
    status: 'in-progress'
  },
  {
    id: 3,
    activity: 'Electrical rough-in 60% complete',
    phase: 'Electrical & Plumbing',
    time: '6 hours ago',
    status: 'in-progress'
  },
  {
    id: 4,
    activity: 'Material delivery for interior work',
    phase: 'Interior Finishing',
    time: '1 day ago',
    status: 'pending'
  }
];

export default function ProgressOverviewView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search phases or activities..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Project Phases */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
            <span>Project Phases Progress</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              On Schedule
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {projectPhases.map((phase) => (
            <div key={phase.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{phase.name}</h3>
                  <Badge className={getStatusColor(phase.status)}>
                    {phase.status.replace('-', ' ')}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {phase.progress}% Complete
                </div>
              </div>
              
              <Progress value={phase.progress} className="mb-3" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{phase.startDate} - {phase.endDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Workers:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{phase.workers}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{phase.budget}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Actual:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{phase.actual}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'completed' ? 'bg-green-500' :
                    activity.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{activity.activity}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{activity.phase}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 