'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Shield, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ComplianceItem {
  id: string;
  title: string;
  status: 'compliant' | 'pending' | 'non-compliant';
  description: string;
}

const mockCompliance: ComplianceItem[] = [
  {
    id: '1',
    title: 'PPE Usage',
    status: 'compliant',
    description: 'All workers equipped with helmets, gloves, and boots.'
  },
  {
    id: '2',
    title: 'Site Safety Training',
    status: 'pending',
    description: 'Monthly safety training scheduled for next week.'
  },
  {
    id: '3',
    title: 'Fire Extinguishers',
    status: 'compliant',
    description: 'Fire extinguishers inspected and accessible.'
  },
  {
    id: '4',
    title: 'First Aid Kits',
    status: 'non-compliant',
    description: 'First aid kits need restocking.'
  },
  {
    id: '5',
    title: 'Scaffolding Inspection',
    status: 'compliant',
    description: 'Scaffolding inspected and certified safe.'
  }
];

export default function ComplianceTrackingView() {
  const [compliance, setCompliance] = useState<ComplianceItem[]>(mockCompliance);

  const compliantCount = compliance.filter(c => c.status === 'compliant').length;
  const pendingCount = compliance.filter(c => c.status === 'pending').length;
  const nonCompliantCount = compliance.filter(c => c.status === 'non-compliant').length;
  const progress = (compliantCount / compliance.length) * 100;

  const getStatusBadge = (status: string) => {
    const variants = {
      compliant: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'non-compliant': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'non-compliant':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Shield className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Health & Safety Compliance</h2>
          <p className="text-gray-600 dark:text-gray-300">Track compliance with health and safety standards</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <FileText className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Compliance Checklist</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {compliantCount} / {compliance.length} compliant
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
            <div className="flex space-x-4 mt-2">
              <span className="text-green-600 dark:text-green-400 text-sm">Compliant: {compliantCount}</span>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm">Pending: {pendingCount}</span>
              <span className="text-red-600 dark:text-red-400 text-sm">Non-compliant: {nonCompliantCount}</span>
            </div>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {compliance.map(item => (
              <li key={item.id} className="flex items-center py-4 gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex-shrink-0">
                  {getStatusIcon(item.status)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
                <Badge className={getStatusBadge(item.status)}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 