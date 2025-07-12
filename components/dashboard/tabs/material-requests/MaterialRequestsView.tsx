import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Package, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const materialRequests = [
  {
    id: 1,
    title: 'Steel Beams - Structural Framework',
    description: 'High-grade steel beams for main structural support',
    requester: 'Mike Johnson',
    department: 'Structural',
    priority: 'high',
    status: 'pending',
    requestDate: '2024-03-15',
    dueDate: '2024-03-20',
    quantity: '25 units',
    estimatedCost: 'GH₵12,500',
    approvedCost: null,
    urgency: 'urgent',
    notes: 'Required for next phase of construction. Delayed delivery may impact timeline.'
  },
  {
    id: 2,
    title: 'Electrical Wiring & Conduits',
    description: 'Copper wiring and PVC conduits for electrical installation',
    requester: 'Sarah Wilson',
    department: 'Electrical',
    priority: 'medium',
    status: 'approved',
    requestDate: '2024-03-14',
    dueDate: '2024-03-18',
    quantity: '500m',
    estimatedCost: 'GH₵8,200',
    approvedCost: 'GH₵7,800',
    urgency: 'normal',
    notes: 'Standard electrical materials. Approved with minor cost reduction.'
  },
  {
    id: 3,
    title: 'Concrete Mix - Foundation',
    description: 'High-strength concrete mix for foundation work',
    requester: 'David Brown',
    department: 'Foundation',
    priority: 'high',
    status: 'rejected',
    requestDate: '2024-03-13',
    dueDate: '2024-03-16',
    quantity: '50 cubic meters',
    estimatedCost: 'GH₵15,000',
    approvedCost: null,
    urgency: 'urgent',
    notes: 'Rejected due to budget constraints. Alternative supplier needed.'
  },
  {
    id: 4,
    title: 'Plumbing Fixtures',
    description: 'Bathroom and kitchen plumbing fixtures',
    requester: 'Lisa Davis',
    department: 'Plumbing',
    priority: 'medium',
    status: 'pending',
    requestDate: '2024-03-12',
    dueDate: '2024-03-25',
    quantity: '12 sets',
    estimatedCost: 'GH₵6,800',
    approvedCost: null,
    urgency: 'normal',
    notes: 'Standard fixtures. No rush required.'
  },
  {
    id: 5,
    title: 'Safety Equipment',
    description: 'Hard hats, safety vests, and protective gear',
    requester: 'Tom Wilson',
    department: 'Safety',
    priority: 'high',
    status: 'approved',
    requestDate: '2024-03-11',
    dueDate: '2024-03-15',
    quantity: '50 sets',
    estimatedCost: 'GH₵3,500',
    approvedCost: 'GH₵3,200',
    urgency: 'urgent',
    notes: 'Safety equipment approved. Essential for worker protection.'
  }
];

export default function MaterialRequestsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'rejected':
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

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'normal':
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <Package className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'rejected':
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
              placeholder="Search material requests..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Package className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Material Requests List */}
      <div className="space-y-4">
        {materialRequests.map((request) => (
          <Card key={request.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(request.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{request.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{request.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(request.status)}>
                    {request.status}
                  </Badge>
                  <Badge className={getPriorityColor(request.priority)}>
                    {request.priority}
                  </Badge>
                  {request.urgency === 'urgent' && (
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Urgent
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Requester:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{request.requester}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Department:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{request.department}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Quantity:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{request.quantity}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {request.approvedCost || request.estimatedCost}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Request Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{request.requestDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{request.dueDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Urgency:</span>
                  <div className="flex items-center space-x-1">
                    {getUrgencyIcon(request.urgency)}
                    <span className="font-medium text-gray-900 dark:text-gray-100 capitalize">{request.urgency}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{request.notes}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                {request.status === 'pending' && (
                  <>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Approve
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      Reject
                    </Button>
                  </>
                )}
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  Edit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 