import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, CheckCircle, XCircle, Clock, DollarSign, User } from 'lucide-react';

const approvalHistory = [
  {
    id: 1,
    title: 'Steel Beams - Structural Framework',
    requester: 'Mike Johnson',
    department: 'Structural',
    status: 'pending',
    requestDate: '2024-03-15',
    reviewDate: null,
    reviewer: null,
    estimatedCost: 'GH₵12,500',
    approvedCost: null,
    decision: null,
    notes: 'High-priority request for structural work. Requires immediate attention.',
    urgency: 'urgent',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Electrical Wiring & Conduits',
    requester: 'Sarah Wilson',
    department: 'Electrical',
    status: 'approved',
    requestDate: '2024-03-14',
    reviewDate: '2024-03-15',
    reviewer: 'John Smith',
    estimatedCost: 'GH₵8,200',
    approvedCost: 'GH₵7,800',
    decision: 'approved',
    notes: 'Standard electrical materials. Approved with 5% cost reduction.',
    urgency: 'normal',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Concrete Mix - Foundation',
    requester: 'David Brown',
    department: 'Foundation',
    status: 'rejected',
    requestDate: '2024-03-13',
    reviewDate: '2024-03-14',
    reviewer: 'John Smith',
    estimatedCost: 'GH₵15,000',
    approvedCost: null,
    decision: 'rejected',
    notes: 'Rejected due to budget constraints. Alternative supplier needed.',
    urgency: 'urgent',
    priority: 'high'
  },
  {
    id: 4,
    title: 'Plumbing Fixtures',
    requester: 'Lisa Davis',
    department: 'Plumbing',
    status: 'pending',
    requestDate: '2024-03-12',
    reviewDate: null,
    reviewer: null,
    estimatedCost: 'GH₵6,800',
    approvedCost: null,
    decision: null,
    notes: 'Standard fixtures. No rush required.',
    urgency: 'normal',
    priority: 'medium'
  },
  {
    id: 5,
    title: 'Safety Equipment',
    requester: 'Tom Wilson',
    department: 'Safety',
    status: 'approved',
    requestDate: '2024-03-11',
    reviewDate: '2024-03-12',
    reviewer: 'John Smith',
    estimatedCost: 'GH₵3,500',
    approvedCost: 'GH₵3,200',
    decision: 'approved',
    notes: 'Safety equipment approved. Essential for worker protection.',
    urgency: 'urgent',
    priority: 'high'
  }
];

export default function MaterialApprovalsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200';
      case 'rejected':
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
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
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
              placeholder="Search approvals..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <DollarSign className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Approval History */}
      <div className="space-y-4">
        {approvalHistory.map((approval) => (
          <Card key={approval.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(approval.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{approval.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Requested by {approval.requester} - {approval.department}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(approval.status)}>
                    {approval.status}
                  </Badge>
                  <Badge className={getPriorityColor(approval.priority)}>
                    {approval.priority}
                  </Badge>
                  {approval.urgency === 'urgent' && (
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
                  <span className="text-gray-600 dark:text-gray-400">Request Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{approval.requestDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Review Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{approval.reviewDate || 'Pending'}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reviewer:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{approval.reviewer || 'Unassigned'}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {approval.approvedCost || approval.estimatedCost}
                  </div>
                </div>
              </div>
              
              {approval.status !== 'pending' && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Decision:</span>
                    <div className="font-medium text-gray-900 dark:text-gray-100 capitalize">{approval.decision}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Cost Savings:</span>
                                      <div className="font-medium text-green-600 dark:text-green-400">
                    {approval.approvedCost && approval.estimatedCost ? 
                      `GH₵${parseInt(approval.estimatedCost.replace(/[^0-9]/g, '')) - parseInt(approval.approvedCost.replace(/[^0-9]/g, ''))}` : 
                      'N/A'
                    }
                  </div>
                  </div>
                </div>
              )}
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{approval.notes}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                {approval.status === 'pending' && (
                  <>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                      <User className="h-4 w-4 mr-1" />
                      Assign Reviewer
                    </Button>
                  </>
                )}
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  Edit Decision
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 