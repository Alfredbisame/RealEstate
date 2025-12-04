import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, AlertTriangle, CheckCircle, Clock, XCircle, Eye, Edit, MessageSquare } from 'lucide-react';

const qualityIssues = [
  {
    id: 1,
    title: 'Plumbing Leak in Unit 3B',
    description: 'Multiple leaks detected in bathroom plumbing fixtures',
    category: 'Plumbing',
    severity: 'critical',
    status: 'open',
    priority: 'high',
    reportedBy: 'Mike Johnson',
    assignedTo: 'David Wilson',
    reportedDate: '2024-03-14',
    dueDate: '2024-03-16',
    estimatedCost: 2500,
    actualCost: 0,
    progress: 0,
    location: 'Unit 3B - Bathroom',
    impact: 'Water damage risk, tenant complaints',
    resolution: 'Replace faulty fixtures and test all connections'
  },
  {
    id: 2,
    title: 'Electrical Panel Overheating',
    description: 'Main electrical panel showing signs of overheating',
    category: 'Electrical',
    severity: 'high',
    status: 'in-progress',
    priority: 'high',
    reportedBy: 'Sarah Wilson',
    assignedTo: 'John Smith',
    reportedDate: '2024-03-13',
    dueDate: '2024-03-15',
    estimatedCost: 1800,
    actualCost: 1200,
    progress: 65,
    location: 'Main Electrical Room',
    impact: 'Fire hazard, power outages',
    resolution: 'Upgrade panel capacity and install cooling system'
  },
  {
    id: 3,
    title: 'Foundation Crack Detection',
    description: 'Minor cracks detected in foundation wall',
    category: 'Structural',
    severity: 'medium',
    status: 'resolved',
    priority: 'medium',
    reportedBy: 'David Brown',
    assignedTo: 'Lisa Davis',
    reportedDate: '2024-03-10',
    dueDate: '2024-03-12',
    estimatedCost: 800,
    actualCost: 750,
    progress: 100,
    location: 'Foundation - North Wall',
    impact: 'Structural integrity concern',
    resolution: 'Crack sealing and monitoring system installed'
  },
  {
    id: 4,
    title: 'HVAC System Noise',
    description: 'Excessive noise from HVAC units in common areas',
    category: 'HVAC',
    severity: 'low',
    status: 'open',
    priority: 'low',
    reportedBy: 'Lisa Davis',
    assignedTo: 'Mike Johnson',
    reportedDate: '2024-03-15',
    dueDate: '2024-03-20',
    estimatedCost: 500,
    actualCost: 0,
    progress: 0,
    location: 'Common Areas',
    impact: 'Tenant comfort, noise complaints',
    resolution: 'Install noise dampening and maintenance check'
  },
  {
    id: 5,
    title: 'Safety Equipment Missing',
    description: 'Several safety equipment items missing from site',
    category: 'Safety',
    severity: 'high',
    status: 'in-progress',
    priority: 'high',
    reportedBy: 'John Smith',
    assignedTo: 'Sarah Wilson',
    reportedDate: '2024-03-12',
    dueDate: '2024-03-14',
    estimatedCost: 1200,
    actualCost: 800,
    progress: 85,
    location: 'Construction Site',
    impact: 'Worker safety, compliance violation',
    resolution: 'Replace missing equipment and implement tracking system'
  }
];

export default function QualityIssuesView() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'high':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200';
      case 'medium':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      case 'low':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in-progress':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200';
      case 'resolved':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'medium':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200';
      case 'low':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
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
              placeholder="Search quality issues..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Quality Issues List */}
      <div className="space-y-4">
        {qualityIssues.map((issue) => (
          <Card key={issue.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(issue.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{issue.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{issue.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getSeverityColor(issue.severity)}>
                    {issue.severity}
                  </Badge>
                  <Badge className={getStatusColor(issue.status)}>
                    {issue.status}
                  </Badge>
                  <Badge className={getPriorityColor(issue.priority)}>
                    {issue.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.category}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.location}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Assigned To:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.assignedTo}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Progress:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.progress}%</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reported By:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.reportedBy}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{issue.dueDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    GH₵{issue.actualCost} / GH₵{issue.estimatedCost}
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Impact:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{issue.impact}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolution:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{issue.resolution}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-gray-900 dark:text-gray-100">{issue.progress}%</span>
                </div>
                <Progress value={issue.progress} className="h-2" />
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                {issue.status === 'open' && (
                  <>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Clock className="h-4 w-4 mr-1" />
                      Start Work
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Mark Resolved
                    </Button>
                  </>
                )}
                {issue.status === 'in-progress' && (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Mark Complete
                  </Button>
                )}
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Issue
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <MessageSquare className="h-4 w-4 mr-1" />
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