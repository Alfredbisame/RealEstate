import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Clock, User, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    name: 'Excavation for Foundation',
    description: 'Dig foundation trenches and prepare site for concrete pouring',
    phase: 'Foundation',
    status: 'completed',
    progress: 100,
    priority: 'high',
    assignedWorkers: ['John Smith', 'Mike Johnson', 'Sarah Wilson'],
    startDate: '2024-01-15',
    dueDate: '2024-01-25',
    actualHours: 80,
    estimatedHours: 75,
    budget: '$15,000',
    actual: '$14,200',
    notes: 'Site preparation completed ahead of schedule. Ready for concrete work.'
  },
  {
    id: 2,
    name: 'Steel Framework Installation',
    description: 'Install structural steel beams and columns',
    phase: 'Structural Framework',
    status: 'in-progress',
    progress: 85,
    priority: 'high',
    assignedWorkers: ['Mike Johnson', 'David Brown', 'Lisa Davis', 'Tom Wilson'],
    startDate: '2024-02-16',
    dueDate: '2024-04-15',
    actualHours: 320,
    estimatedHours: 400,
    budget: '$45,000',
    actual: '$38,500',
    notes: 'Main structural beams installed. Secondary framework in progress.'
  },
  {
    id: 3,
    name: 'Electrical Panel Installation',
    description: 'Install main electrical panel and distribution system',
    phase: 'Electrical & Plumbing',
    status: 'in-progress',
    progress: 60,
    priority: 'medium',
    assignedWorkers: ['Sarah Wilson', 'Alex Thompson'],
    startDate: '2024-03-01',
    dueDate: '2024-05-15',
    actualHours: 120,
    estimatedHours: 200,
    budget: '$25,000',
    actual: '$15,000',
    notes: 'Main panel installed. Wiring distribution in progress.'
  },
  {
    id: 4,
    name: 'Plumbing Rough-in',
    description: 'Install main plumbing lines and fixtures',
    phase: 'Electrical & Plumbing',
    status: 'pending',
    progress: 0,
    priority: 'medium',
    assignedWorkers: ['David Brown', 'Emma Garcia'],
    startDate: '2024-04-01',
    dueDate: '2024-05-20',
    actualHours: 0,
    estimatedHours: 160,
    budget: '$20,000',
    actual: '$0',
    notes: 'Materials ordered. Installation to begin next week.'
  },
  {
    id: 5,
    name: 'Interior Wall Framing',
    description: 'Frame interior walls and partitions',
    phase: 'Interior Finishing',
    status: 'pending',
    progress: 0,
    priority: 'low',
    assignedWorkers: ['Lisa Davis', 'Tom Wilson', 'Emma Garcia'],
    startDate: '2024-05-16',
    dueDate: '2024-06-15',
    actualHours: 0,
    estimatedHours: 240,
    budget: '$30,000',
    actual: '$0',
    notes: 'Waiting for electrical and plumbing completion.'
  }
];

export default function TaskProgressView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'delayed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'delayed':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
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
              placeholder="Search tasks..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(task.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{task.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(task.status)}>
                    {task.status.replace('-', ' ')}
                  </Badge>
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Progress: {task.progress}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Due: {task.dueDate}
                </div>
              </div>
              
              <Progress value={task.progress} className="w-full" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Phase:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{task.phase}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{task.startDate} - {task.dueDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Hours:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{task.actualHours}/{task.estimatedHours}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{task.budget} / {task.actual}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Assigned Workers:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {task.assignedWorkers.map((worker, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {worker}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{task.notes}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" variant="outline">
                  Update Progress
                </Button>
                <Button size="sm" variant="outline">
                  Log Hours
                </Button>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 