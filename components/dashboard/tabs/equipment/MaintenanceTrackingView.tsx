'use client';

import { useState } from 'react';
import { 
  Wrench, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Search, 
  Filter, 
  Download,
  Calendar,
  FileText,
  Plus,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MaintenanceRecord {
  id: string;
  equipmentName: string;
  equipmentType: string;
  maintenanceType: 'scheduled' | 'emergency' | 'preventive' | 'repair';
  status: 'scheduled' | 'in-progress' | 'completed' | 'overdue';
  scheduledDate: string;
  completedDate?: string;
  technician: string;
  description: string;
  cost: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

const mockMaintenance: MaintenanceRecord[] = [
  {
    id: '1',
    equipmentName: 'Excavator CAT 320',
    equipmentType: 'Excavator',
    maintenanceType: 'scheduled',
    status: 'scheduled',
    scheduledDate: '2024-07-15',
    technician: 'John Mechanic',
    description: 'Regular oil change and filter replacement',
    cost: 250,
    priority: 'medium'
  },
  {
    id: '2',
    equipmentName: 'Concrete Mixer',
    equipmentType: 'Mixer',
    maintenanceType: 'preventive',
    status: 'in-progress',
    scheduledDate: '2024-06-20',
    technician: 'Mike Technician',
    description: 'Motor inspection and belt replacement',
    cost: 180,
    priority: 'high'
  },
  {
    id: '3',
    equipmentName: 'Scaffolding Set',
    equipmentType: 'Scaffolding',
    maintenanceType: 'repair',
    status: 'completed',
    scheduledDate: '2024-06-10',
    completedDate: '2024-06-12',
    technician: 'Sarah Engineer',
    description: 'Replaced damaged support beams',
    cost: 320,
    priority: 'critical'
  },
  {
    id: '4',
    equipmentName: 'Crane Tower',
    equipmentType: 'Crane',
    maintenanceType: 'scheduled',
    status: 'overdue',
    scheduledDate: '2024-06-25',
    technician: 'David Specialist',
    description: 'Annual safety inspection and certification',
    cost: 450,
    priority: 'critical'
  },
  {
    id: '5',
    equipmentName: 'Bulldozer',
    equipmentType: 'Bulldozer',
    maintenanceType: 'emergency',
    status: 'scheduled',
    scheduledDate: '2024-07-05',
    technician: 'Alex Mechanic',
    description: 'Engine repair and hydraulic system check',
    cost: 800,
    priority: 'high'
  }
];

export default function MaintenanceTrackingView() {
  const [maintenance, setMaintenance] = useState<MaintenanceRecord[]>(mockMaintenance);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');

  const getStatusBadge = (status: string) => {
    const variants = {
      scheduled: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      overdue: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      medium: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      high: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      critical: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[priority as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      scheduled: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      emergency: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      preventive: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      repair: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    };
    return variants[type as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const filteredMaintenance = maintenance.filter(item => {
    const matchesSearch = item.equipmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.equipmentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technician.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || item.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const maintenanceStats = {
    total: maintenance.length,
    scheduled: maintenance.filter(m => m.status === 'scheduled').length,
    inProgress: maintenance.filter(m => m.status === 'in-progress').length,
    completed: maintenance.filter(m => m.status === 'completed').length,
    overdue: maintenance.filter(m => m.status === 'overdue').length
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Maintenance Tracking</h2>
          <p className="text-gray-600 dark:text-gray-300">Schedule, track, and manage equipment maintenance</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search maintenance..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Maintenance
          </Button>
        </div>
      </div>

      {/* Maintenance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Total</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{maintenanceStats.total}</p>
              </div>
              <Wrench className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Scheduled</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{maintenanceStats.scheduled}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">{maintenanceStats.inProgress}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Completed</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">{maintenanceStats.completed}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Overdue</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">{maintenanceStats.overdue}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Maintenance Records</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {filteredMaintenance.length} records
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Equipment</TableHead>
                  <TableHead className="dark:text-gray-300">Type</TableHead>
                  <TableHead className="dark:text-gray-300">Status</TableHead>
                  <TableHead className="dark:text-gray-300">Priority</TableHead>
                  <TableHead className="dark:text-gray-300">Scheduled Date</TableHead>
                  <TableHead className="dark:text-gray-300">Technician</TableHead>
                  <TableHead className="dark:text-gray-300">Cost</TableHead>
                  <TableHead className="dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMaintenance.map((item) => (
                  <TableRow key={item.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{item.equipmentName}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.equipmentType}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeBadge(item.maintenanceType)}>
                        {item.maintenanceType.charAt(0).toUpperCase() + item.maintenanceType.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(item.status)}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityBadge(item.priority)}>
                        {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono text-sm dark:text-gray-300">{item.scheduledDate}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item.technician}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium dark:text-gray-300">${item.cost}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <Wrench className="w-4 h-4" />
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