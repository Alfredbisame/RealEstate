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
    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Safety Reports</h1>
          <p className="text-orange-100 text-lg">Monitor incidents and track health & safety compliance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-gray-700/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/30">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-gray-700/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/30">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            Report Incident
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Total Incidents</p>
              <p className="text-2xl font-bold">{totalIncidents}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-200" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Open Cases</p>
              <p className="text-2xl font-bold">{openCases}</p>
            </div>
            <Shield className="w-8 h-8 text-orange-300" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Compliance Rate</p>
              <p className="text-2xl font-bold">{complianceRate}%</p>
              <p className="text-orange-200 text-xs">This month</p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-300" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Resolved Cases</p>
              <p className="text-2xl font-bold">{resolvedCases}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 