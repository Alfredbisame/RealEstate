'use client';

import { Shield, Plus, Download, Filter, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SafetyHeaderProps {
  totalIncidents?: number;
  openCases?: number;
  complianceRate?: number;
  resolvedCases?: number;
}

export default function SafetyHeader({
  totalIncidents = 8,
  openCases = 2,
  complianceRate = 97.5,
  resolvedCases = 6
}: SafetyHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Safety Reports</h1>
          <p className="text-blue-100 text-lg">Monitor incidents and track health & safety compliance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-blue-400 text-white hover:bg-blue-300 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500">
            <Plus className="w-4 h-4 mr-2" />
            Report Incident
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Incidents</p>
              <p className="text-2xl font-bold">{totalIncidents}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Open Cases</p>
              <p className="text-2xl font-bold">{openCases}</p>
            </div>
            <Shield className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Compliance Rate</p>
              <p className="text-2xl font-bold">{complianceRate}%</p>
              <p className="text-blue-200 text-xs">This month</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Resolved Cases</p>
              <p className="text-2xl font-bold">{resolvedCases}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-200" />
          </div>
        </div>
      </div>
    </div>
  );
}