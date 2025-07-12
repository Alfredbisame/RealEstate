'use client';

import { useState } from 'react';
import { 
  AlertTriangle, 
  FileText, 
  Clock, 
  UserX, 
  Search, 
  Filter, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Shield,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DisciplinaryAction {
  id: string;
  workerId: string;
  workerName: string;
  avatar?: string;
  position: string;
  actionType: 'warning' | 'suspension' | 'termination' | 'probation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  reason: string;
  description: string;
  issuedBy: string;
  issuedDate: string;
  effectiveDate: string;
  duration?: string;
  status: 'active' | 'resolved' | 'expired' | 'appealed';
  attachments: string[];
  followUpDate?: string;
  notes?: string;
}

const mockDisciplinaryActions: DisciplinaryAction[] = [
  {
    id: '1',
    workerId: 'W001',
    workerName: 'Kwame Mensah',
    position: 'Mason',
    actionType: 'warning',
    severity: 'medium',
    reason: 'Repeated tardiness',
    description: 'Worker has been late to work 5 times in the last 2 weeks, affecting project timeline.',
    issuedBy: 'Site Supervisor John',
    issuedDate: '2024-01-15',
    effectiveDate: '2024-01-15',
    status: 'active',
    attachments: ['warning_letter_001.pdf', 'attendance_record.pdf'],
    followUpDate: '2024-02-15',
    notes: 'Worker acknowledged warning and committed to improvement.'
  },
  {
    id: '2',
    workerId: 'W002',
    workerName: 'Ama Osei',
    position: 'Carpenter',
    actionType: 'suspension',
    severity: 'high',
    reason: 'Safety violation',
    description: 'Worker failed to wear proper safety equipment while operating power tools.',
    issuedBy: 'Safety Officer Sarah',
    issuedDate: '2024-01-10',
    effectiveDate: '2024-01-10',
    duration: '3 days',
    status: 'resolved',
    attachments: ['suspension_notice_002.pdf', 'safety_violation_report.pdf'],
    followUpDate: '2024-01-13',
    notes: 'Suspension completed. Worker has completed safety training.'
  },
  {
    id: '3',
    workerId: 'W003',
    workerName: 'Kofi Addo',
    position: 'Electrician',
    actionType: 'probation',
    severity: 'medium',
    reason: 'Performance issues',
    description: 'Consistent underperformance and quality issues in electrical installations.',
    issuedBy: 'Project Manager Mike',
    issuedDate: '2024-01-08',
    effectiveDate: '2024-01-08',
    duration: '30 days',
    status: 'active',
    attachments: ['probation_letter_003.pdf', 'performance_review.pdf'],
    followUpDate: '2024-02-08',
    notes: 'Under probation period. Weekly performance reviews scheduled.'
  },
  {
    id: '4',
    workerId: 'W004',
    workerName: 'Yaw Darko',
    position: 'Laborer',
    actionType: 'warning',
    severity: 'low',
    reason: 'Inappropriate behavior',
    description: 'Disruptive behavior in the workplace affecting team morale.',
    issuedBy: 'HR Manager Lisa',
    issuedDate: '2024-01-12',
    effectiveDate: '2024-01-12',
    status: 'active',
    attachments: ['warning_letter_004.pdf', 'incident_report.pdf'],
    followUpDate: '2024-02-12',
    notes: 'Worker has shown improvement in behavior.'
  },
  {
    id: '5',
    workerId: 'W005',
    workerName: 'Akosua Boateng',
    position: 'Painter',
    actionType: 'suspension',
    severity: 'critical',
    reason: 'Gross misconduct',
    description: 'Deliberate damage to company property and equipment.',
    issuedBy: 'Site Manager David',
    issuedDate: '2024-01-05',
    effectiveDate: '2024-01-05',
    duration: '7 days',
    status: 'resolved',
    attachments: ['suspension_notice_005.pdf', 'damage_report.pdf', 'witness_statements.pdf'],
    followUpDate: '2024-01-12',
    notes: 'Suspension completed. Worker has apologized and agreed to pay for damages.'
  }
];

export default function DisciplinaryActionsView() {
  const [actions, setActions] = useState<DisciplinaryAction[]>(mockDisciplinaryActions);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedAction, setSelectedAction] = useState<DisciplinaryAction | null>(null);

  const getSeverityColor = (severity: string) => {
    const colors = {
      low: 'bg-blue-100 text-blue-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getActionTypeColor = (type: string) => {
    const colors = {
      warning: 'bg-yellow-100 text-yellow-800',
      suspension: 'bg-orange-100 text-orange-800',
      termination: 'bg-red-100 text-red-800',
      probation: 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
      expired: 'bg-gray-100 text-gray-800',
      appealed: 'bg-purple-100 text-purple-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredActions = actions.filter(action => {
    const matchesSearch = action.workerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         action.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || action.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const actionStats = {
    total: actions.length,
    active: actions.filter(a => a.status === 'active').length,
    resolved: actions.filter(a => a.status === 'resolved').length,
    critical: actions.filter(a => a.severity === 'critical').length
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Disciplinary Actions</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage warning letters, suspensions, and disciplinary records</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search actions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800">
            <Plus className="w-4 h-4 mr-2" />
            New Action
          </Button>
        </div>
      </div>

      {/* Action Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Actions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{actionStats.total}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{actionStats.active}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Resolved</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{actionStats.resolved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Critical</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{actionStats.critical}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Disciplinary Actions</span>
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              {filteredActions.length} actions
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Worker</TableHead>
                  <TableHead className="dark:text-gray-300">Action Type</TableHead>
                  <TableHead className="dark:text-gray-300">Severity</TableHead>
                  <TableHead className="dark:text-gray-300">Reason</TableHead>
                  <TableHead className="dark:text-gray-300">Issued By</TableHead>
                  <TableHead className="dark:text-gray-300">Date</TableHead>
                  <TableHead className="dark:text-gray-300">Status</TableHead>
                  <TableHead className="dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredActions.map((action) => (
                  <TableRow key={action.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={action.avatar} />
                          <AvatarFallback>
                            {action.workerName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{action.workerName}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{action.position}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getActionTypeColor(action.actionType)}>
                        {action.actionType.charAt(0).toUpperCase() + action.actionType.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSeverityColor(action.severity)}>
                        {action.severity.charAt(0).toUpperCase() + action.severity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{action.reason}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{action.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{action.issuedBy}</span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="font-medium dark:text-white">{new Date(action.issuedDate).toLocaleDateString()}</p>
                        <p className="text-gray-500 dark:text-gray-400">{action.duration}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(action.status)}>
                        {action.status.charAt(0).toUpperCase() + action.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedAction(action)}
                              className="dark:text-gray-200 dark:hover:text-white"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl dark:bg-gray-800">
                            <DialogHeader>
                              <DialogTitle className="dark:text-white">Disciplinary Action Details</DialogTitle>
                            </DialogHeader>
                            {selectedAction && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Worker</p>
                                    <p className="text-sm dark:text-gray-200">{selectedAction.workerName}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Position</p>
                                    <p className="text-sm dark:text-gray-200">{selectedAction.position}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Action Type</p>
                                    <Badge className={getActionTypeColor(selectedAction.actionType)}>
                                      {selectedAction.actionType}
                                    </Badge>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Severity</p>
                                    <Badge className={getSeverityColor(selectedAction.severity)}>
                                      {selectedAction.severity}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Reason</p>
                                  <p className="text-sm dark:text-gray-200">{selectedAction.reason}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Description</p>
                                  <p className="text-sm dark:text-gray-200">{selectedAction.description}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Issued By</p>
                                    <p className="text-sm dark:text-gray-200">{selectedAction.issuedBy}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Issued Date</p>
                                    <p className="text-sm dark:text-gray-200">{new Date(selectedAction.issuedDate).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                {selectedAction.notes && (
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Notes</p>
                                    <p className="text-sm dark:text-gray-200">{selectedAction.notes}</p>
                                  </div>
                                )}
                                {selectedAction.attachments.length > 0 && (
                                  <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Attachments</p>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                      {selectedAction.attachments.map((attachment, index) => (
                                        <Badge key={index} variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                                          {attachment}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 