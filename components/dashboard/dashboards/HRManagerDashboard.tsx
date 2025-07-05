'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import EmployeeAttendance from '../widgets/EmployeeAttendance';
import PayrollSummary from '../widgets/PayrollSummary';
import { 
  Users, Clock, DollarSign, UserCheck, 
  Calendar, Award, AlertCircle, TrendingUp 
} from 'lucide-react';

export default function HRManagerDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'attendance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'payroll', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'performance', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Total Employees',
      value: '48',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'pink'
    },
    {
      title: 'Present Today',
      value: '42',
      change: '87.5%',
      changeType: 'positive' as const,
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Monthly Payroll',
      value: 'GHS 85,400',
      change: '+5.2%',
      changeType: 'neutral' as const,
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Leave Requests',
      value: '6',
      change: '+2',
      changeType: 'neutral' as const,
      icon: Calendar,
      color: 'orange'
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
      case 'attendance':
        return <EmployeeAttendance />;
      case 'payroll':
        return <PayrollSummary />;
      case 'performance':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Performance Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900 dark:text-white">Top Performers</span>
                </div>
                <span className="text-green-600 font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900 dark:text-white">Avg Performance</span>
                </div>
                <span className="text-blue-600 font-semibold">84%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900 dark:text-white">Need Improvement</span>
                </div>
                <span className="text-orange-600 font-semibold">3</span>
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
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">HR Manager Dashboard</h1>
        <p className="opacity-90">Employee management and payroll oversight</p>
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">48 Total Employees</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm">SSNIT Compliant</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Add Employee</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">New hire</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Process Payroll</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly payment</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Leave Management</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Approve requests</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Performance Review</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Evaluate staff</p>
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