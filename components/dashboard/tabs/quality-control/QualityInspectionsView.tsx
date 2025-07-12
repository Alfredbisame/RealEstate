import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Award, Clock, CheckCircle, XCircle, AlertTriangle, Eye } from 'lucide-react';

const qualityInspections = [
  {
    id: 1,
    title: 'Foundation Inspection',
    description: 'Structural foundation quality and compliance check',
    inspector: 'John Smith',
    area: 'Foundation',
    status: 'completed',
    priority: 'high',
    inspectionDate: '2024-03-15',
    dueDate: '2024-03-15',
    score: 95,
    compliance: 'compliant',
    issues: 1,
    notes: 'Foundation meets all structural requirements. Minor concrete curing issue noted.'
  },
  {
    id: 2,
    title: 'Electrical Rough-in Inspection',
    description: 'Electrical wiring and system installation quality check',
    inspector: 'Sarah Wilson',
    area: 'Electrical',
    status: 'pending',
    priority: 'medium',
    inspectionDate: null,
    dueDate: '2024-03-18',
    score: null,
    compliance: 'pending',
    issues: 0,
    notes: 'Scheduled for next week. All materials ready.'
  },
  {
    id: 3,
    title: 'Plumbing Installation Inspection',
    description: 'Plumbing system quality and leak testing',
    inspector: 'Mike Johnson',
    area: 'Plumbing',
    status: 'failed',
    priority: 'high',
    inspectionDate: '2024-03-14',
    dueDate: '2024-03-14',
    score: 65,
    compliance: 'non-compliant',
    issues: 3,
    notes: 'Multiple leaks detected. Requires immediate repair and reinspection.'
  },
  {
    id: 4,
    title: 'Structural Framework Inspection',
    description: 'Steel framework and structural integrity check',
    inspector: 'David Brown',
    area: 'Structural',
    status: 'completed',
    priority: 'high',
    inspectionDate: '2024-03-12',
    dueDate: '2024-03-12',
    score: 98,
    compliance: 'compliant',
    issues: 0,
    notes: 'Excellent structural work. All welds and connections meet standards.'
  },
  {
    id: 5,
    title: 'Safety Equipment Inspection',
    description: 'Safety gear and protective equipment quality check',
    inspector: 'Lisa Davis',
    area: 'Safety',
    status: 'pending',
    priority: 'medium',
    inspectionDate: null,
    dueDate: '2024-03-20',
    score: null,
    compliance: 'pending',
    issues: 0,
    notes: 'Safety equipment delivery scheduled. Inspection to follow.'
  }
];

export default function QualityInspectionsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'failed':
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

  const getComplianceColor = (compliance: string) => {
    switch (compliance) {
      case 'compliant':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'non-compliant':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />;
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
              placeholder="Search inspections..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <Award className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Quality Inspections List */}
      <div className="space-y-4">
        {qualityInspections.map((inspection) => (
          <Card key={inspection.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(inspection.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{inspection.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{inspection.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(inspection.status)}>
                    {inspection.status}
                  </Badge>
                  <Badge className={getPriorityColor(inspection.priority)}>
                    {inspection.priority}
                  </Badge>
                  <Badge className={getComplianceColor(inspection.compliance)}>
                    {inspection.compliance}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Inspector:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{inspection.inspector}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Area:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{inspection.area}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Score:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {inspection.score ? `${inspection.score}%` : 'Pending'}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Issues:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{inspection.issues}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Inspection Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {inspection.inspectionDate || 'Scheduled'}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{inspection.dueDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Compliance:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 capitalize">{inspection.compliance}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{inspection.notes}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                {inspection.status === 'pending' && (
                  <>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Start Inspection
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Clock className="h-4 w-4 mr-1" />
                      Reschedule
                    </Button>
                  </>
                )}
                {inspection.status === 'failed' && (
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Reinspect
                  </Button>
                )}
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  Edit Inspection
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 