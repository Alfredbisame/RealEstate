'use client';

import { useState } from 'react';
import { 
  Truck, 
  Wrench, 
  Clock, 
  Search, 
  Filter, 
  Download,
  Eye,
  FileText,
  Plus,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Equipment {
  id: string;
  name: string;
  type: string;
  model: string;
  status: 'available' | 'in-use' | 'maintenance' | 'out-of-service';
  location: string;
  assignedTo: string;
  lastMaintenance: string;
  nextMaintenance: string;
  utilization: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
}

const mockEquipment: Equipment[] = [
  {
    id: '1',
    name: 'Excavator CAT 320',
    type: 'Excavator',
    model: 'CAT 320',
    status: 'available',
    location: 'Site A - Block 2',
    assignedTo: 'Kwame Mensah',
    lastMaintenance: '2024-05-15',
    nextMaintenance: '2024-07-15',
    utilization: 85,
    condition: 'excellent'
  },
  {
    id: '2',
    name: 'Concrete Mixer',
    type: 'Mixer',
    model: 'Honda 350L',
    status: 'in-use',
    location: 'Site B - Foundation',
    assignedTo: 'Ama Osei',
    lastMaintenance: '2024-05-20',
    nextMaintenance: '2024-07-20',
    utilization: 92,
    condition: 'good'
  },
  {
    id: '3',
    name: 'Scaffolding Set',
    type: 'Scaffolding',
    model: 'Aluminum 3m',
    status: 'maintenance',
    location: 'Site C - Block 1',
    assignedTo: 'Kofi Addo',
    lastMaintenance: '2024-05-10',
    nextMaintenance: '2024-06-10',
    utilization: 78,
    condition: 'fair'
  },
  {
    id: '4',
    name: 'Crane Tower',
    type: 'Crane',
    model: 'Tower 25T',
    status: 'in-use',
    location: 'Site A - Block 3',
    assignedTo: 'Yaw Darko',
    lastMaintenance: '2024-05-25',
    nextMaintenance: '2024-07-25',
    utilization: 95,
    condition: 'excellent'
  },
  {
    id: '5',
    name: 'Bulldozer',
    type: 'Bulldozer',
    model: 'CAT D6',
    status: 'out-of-service',
    location: 'Site B - Clearing',
    assignedTo: 'Efua Tetteh',
    lastMaintenance: '2024-05-05',
    nextMaintenance: '2024-06-05',
    utilization: 45,
    condition: 'poor'
  }
];

export default function EquipmentInventoryView() {
  const [equipment, setEquipment] = useState<Equipment[]>(mockEquipment);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const getStatusBadge = (status: string) => {
    const variants = {
      available: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'in-use': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      maintenance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'out-of-service': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getConditionBadge = (condition: string) => {
    const variants = {
      excellent: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      good: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      fair: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      poor: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[condition as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const inventoryStats = {
    total: equipment.length,
    available: equipment.filter(e => e.status === 'available').length,
    inUse: equipment.filter(e => e.status === 'in-use').length,
    maintenance: equipment.filter(e => e.status === 'maintenance').length,
    outOfService: equipment.filter(e => e.status === 'out-of-service').length
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Equipment Inventory</h2>
          <p className="text-gray-600 dark:text-gray-300">Track all construction equipment, status, and utilization</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search equipment..."
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
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="in-use">In Use</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="out-of-service">Out of Service</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-40 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Excavator">Excavator</SelectItem>
              <SelectItem value="Mixer">Mixer</SelectItem>
              <SelectItem value="Scaffolding">Scaffolding</SelectItem>
              <SelectItem value="Crane">Crane</SelectItem>
              <SelectItem value="Bulldozer">Bulldozer</SelectItem>
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
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Total</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{inventoryStats.total}</p>
              </div>
              <Truck className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Available</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">{inventoryStats.available}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">In Use</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{inventoryStats.inUse}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">{inventoryStats.maintenance}</p>
              </div>
              <Wrench className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Out of Service</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">{inventoryStats.outOfService}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Equipment Inventory</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {filteredEquipment.length} items
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
                  <TableHead className="dark:text-gray-300">Location</TableHead>
                  <TableHead className="dark:text-gray-300">Assigned To</TableHead>
                  <TableHead className="dark:text-gray-300">Utilization</TableHead>
                  <TableHead className="dark:text-gray-300">Condition</TableHead>
                  <TableHead className="dark:text-gray-300">Next Maintenance</TableHead>
                  <TableHead className="dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEquipment.map((item) => (
                  <TableRow key={item.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.model}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(item.status)}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item.location}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item.assignedTo}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${item.utilization}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium dark:text-gray-300">{item.utilization}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getConditionBadge(item.condition)}>
                        {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono text-sm dark:text-gray-300">{item.nextMaintenance}</span>
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