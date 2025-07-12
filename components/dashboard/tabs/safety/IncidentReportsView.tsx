'use client';

import { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Search, Filter, Download, Eye, FileText, Plus, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface IncidentReport {
  id: string;
  date: string;
  department: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  status: 'open' | 'resolved' | 'closed';
  description: string;
  reportedBy: string;
  actionsTaken: string;
}

const mockIncidents: IncidentReport[] = [
  {
    id: '1',
    date: '2024-06-01',
    department: 'Construction',
    type: 'Slip & Fall',
    severity: 'high',
    status: 'open',
    description: 'Worker slipped on wet surface, minor injury.',
    reportedBy: 'Kwame Mensah',
    actionsTaken: 'First aid administered, area cleaned.'
  },
  {
    id: '2',
    date: '2024-06-03',
    department: 'Electrical',
    type: 'Electric Shock',
    severity: 'medium',
    status: 'resolved',
    description: 'Mild shock during wiring, no injury.',
    reportedBy: 'Ama Osei',
    actionsTaken: 'Inspected wiring, safety briefing held.'
  },
  {
    id: '3',
    date: '2024-06-05',
    department: 'Plumbing',
    type: 'Equipment Malfunction',
    severity: 'low',
    status: 'closed',
    description: 'Pipe cutter malfunctioned, no injury.',
    reportedBy: 'Kofi Addo',
    actionsTaken: 'Tool replaced, inspection scheduled.'
  },
  {
    id: '4',
    date: '2024-06-07',
    department: 'General',
    type: 'Near Miss',
    severity: 'low',
    status: 'resolved',
    description: 'Falling object narrowly missed worker.',
    reportedBy: 'Yaw Darko',
    actionsTaken: 'Secured loose items, safety reminder.'
  }
];

export default function IncidentReportsView() {
  const [incidents, setIncidents] = useState<IncidentReport[]>(mockIncidents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [severityFilter, setSeverityFilter] = useState<string>('all');

  const getStatusBadge = (status: string) => {
    const variants = {
      open: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      resolved: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      closed: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getSeverityBadge = (severity: string) => {
    const variants = {
      low: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[severity as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = incident.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || incident.status === statusFilter;
    const matchesSeverity = severityFilter === 'all' || incident.severity === severityFilter;
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Safety Incident Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Track, review, and manage all reported safety incidents</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search incidents..."
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
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severity</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
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
          <Button size="sm" className="bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-700 dark:text-white dark:hover:bg-orange-800">
            <Plus className="w-4 h-4 mr-2" />
            New Incident
          </Button>
        </div>
      </div>
      {/* Incidents Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Incident Reports</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              {filteredIncidents.length} incidents
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Date</TableHead>
                  <TableHead className="dark:text-gray-300">Department</TableHead>
                  <TableHead className="dark:text-gray-300">Type</TableHead>
                  <TableHead className="dark:text-gray-300">Severity</TableHead>
                  <TableHead className="dark:text-gray-300">Status</TableHead>
                  <TableHead className="dark:text-gray-300">Reported By</TableHead>
                  <TableHead className="dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIncidents.map((incident) => (
                  <TableRow key={incident.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <span className="font-mono text-sm dark:text-gray-300">{incident.date}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                        {incident.department}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{incident.type}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSeverityBadge(incident.severity)}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(incident.status)}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{incident.reportedBy}</span>
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
                          <Download className="w-4 h-4" />
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