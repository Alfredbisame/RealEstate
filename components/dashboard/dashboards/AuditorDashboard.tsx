'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import ComplianceTracker from '../widgets/ComplianceTracker';
import AuditReports from '../widgets/AuditReports';
import { 
  Eye, FileText, Shield, CheckCircle, 
  AlertTriangle, BarChart3, Clock, Search 
} from 'lucide-react';

export default function AuditorDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'compliance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'reports', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'transactions', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Compliance Score',
      value: '96%',
      change: '+2%',
      changeType: 'positive' as const,
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Reports Generated',
      value: '24',
      change: '+6',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Issues Identified',
      value: '3',
      change: '-2',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Audit Progress',
      value: '78%',
      change: '+12%',
      changeType: 'positive' as const,
      icon: BarChart3,
      color: 'purple'
    }
  ];

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'stats':
        return (
          <div className="grid grid-cols-2 gap-4 h-full">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        );
      case 'compliance':
        return <ComplianceTracker />;
      case 'reports':
        return <AuditReports />;
      case 'transactions':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Material Purchase</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">INV-2024-001</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">GHS 45,200</p>
                  <p className="text-sm text-green-600">Approved</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Contractor Payment</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">PAY-2024-012</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">GHS 28,500</p>
                  <p className="text-sm text-blue-600">Verified</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Permit Fee</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">PER-2024-003</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">GHS 3,200</p>
                  <p className="text-sm text-orange-600">Pending Review</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Widget not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Auditor Dashboard</h1>
        <p className="opacity-90">Read-only access to all system data</p>
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span className="text-sm">View Only Access</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">GRA Compliant</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">View Reports</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Financial reports</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Search Records</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find transactions</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Compliance Check</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Verify compliance</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Analytics</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Data insights</p>
          </div>
        </button>
      </div>

      {/* Dashboard Grid */}
      <DashboardGrid
        widgets={widgets}
        onWidgetsChange={setWidgets}
        renderWidget={renderWidget}
      />
    </div>
  );
}