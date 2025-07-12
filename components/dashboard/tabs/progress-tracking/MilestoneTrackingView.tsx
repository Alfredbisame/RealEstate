import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const milestones = [
  {
    id: 1,
    name: 'Foundation Completion',
    description: 'Complete foundation work including excavation, footings, and concrete pouring',
    phase: 'Foundation',
    dueDate: '2024-02-15',
    status: 'completed',
    progress: 100,
    priority: 'high',
    assignedTo: 'John Smith',
    budget: '$45,000',
    actual: '$42,500',
    dependencies: ['Site preparation', 'Permits approved'],
    notes: 'Foundation inspection passed. Ready for structural work.'
  },
  {
    id: 2,
    name: 'Structural Framework',
    description: 'Install steel framework and structural components',
    phase: 'Structural Framework',
    dueDate: '2024-04-15',
    status: 'in-progress',
    progress: 85,
    priority: 'high',
    assignedTo: 'Mike Johnson',
    budget: '$120,000',
    actual: '$98,000',
    dependencies: ['Foundation completed'],
    notes: 'Steel delivery delayed by 2 days. Framework installation 85% complete.'
  },
  {
    id: 3,
    name: 'Electrical Rough-in',
    description: 'Complete electrical wiring and system installation',
    phase: 'Electrical & Plumbing',
    dueDate: '2024-05-15',
    status: 'in-progress',
    progress: 60,
    priority: 'medium',
    assignedTo: 'Sarah Wilson',
    budget: '$85,000',
    actual: '$52,000',
    dependencies: ['Structural framework'],
    notes: 'Main electrical panel installed. Wiring 60% complete.'
  },
  {
    id: 4,
    name: 'Plumbing Installation',
    description: 'Install plumbing systems and fixtures',
    phase: 'Electrical & Plumbing',
    dueDate: '2024-05-20',
    status: 'pending',
    progress: 0,
    priority: 'medium',
    assignedTo: 'David Brown',
    budget: '$65,000',
    actual: '$0',
    dependencies: ['Structural framework'],
    notes: 'Materials ordered. Installation to begin next week.'
  },
  {
    id: 5,
    name: 'Interior Finishing',
    description: 'Complete interior walls, flooring, and finishing touches',
    phase: 'Interior Finishing',
    dueDate: '2024-07-15',
    status: 'pending',
    progress: 0,
    priority: 'low',
    assignedTo: 'Lisa Davis',
    budget: '$95,000',
    actual: '$0',
    dependencies: ['Electrical & Plumbing completed'],
    notes: 'Materials being sourced. Team assigned.'
  }
];

export default function MilestoneTrackingView() {
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
              placeholder="Search milestones..."
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

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <Card key={milestone.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(milestone.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{milestone.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(milestone.status)}>
                    {milestone.status.replace('-', ' ')}
                  </Badge>
                  <Badge className={getPriorityColor(milestone.priority)}>
                    {milestone.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Progress: {milestone.progress}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Due: {milestone.dueDate}
                </div>
              </div>
              
              <Progress value={milestone.progress} className="w-full" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Phase:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{milestone.phase}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Assigned to:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{milestone.assignedTo}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{milestone.budget}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Actual:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{milestone.actual}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Dependencies:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {milestone.dependencies.map((dep, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {dep}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{milestone.notes}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" variant="outline">
                  Update Progress
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