'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import ChartWidget from '../widgets/ChartWidget';
import ProjectTimeline from '../widgets/ProjectTimeline';
import MaterialTracker from '../widgets/MaterialTracker';
import CameraIntegration from '../../mobile/CameraIntegration';
import GPSFeatures from '../../mobile/GPSFeatures';
import { 
  Briefcase, Calendar, Calculator, Hammer, 
  Users, TrendingUp, AlertTriangle, CheckCircle,
  Camera, MapPin
} from 'lucide-react';

export default function ProjectManagerDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'timeline', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'materials', x: 0, y: 2, w: 4, h: 3 },
    { id: '4', type: 'budget-chart', x: 4, y: 4, w: 8, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+3',
      changeType: 'positive' as const,
      icon: Briefcase,
      color: 'blue'
    },
    {
      title: 'Completed This Month',
      value: '8',
      change: '+2',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Budget Utilization',
      value: '74%',
      change: '-5%',
      changeType: 'positive' as const,
      icon: Calculator,
      color: 'orange'
    },
    {
      title: 'Overdue Tasks',
      value: '3',
      change: '-2',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  const budgetChartData = {
    labels: ['Materials', 'Labor', 'Equipment', 'Permits', 'Contingency'],
    datasets: [{
      label: 'Budget Allocation (GHS)',
      data: [450000, 320000, 180000, 50000, 75000],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ]
    }]
  };

  const projects = [
    {
      id: '1',
      name: 'East Legon Residential Complex',
      progress: 65,
      deadline: '2024-08-15',
      status: 'On Track',
      budget: 'GHS 850,000',
      spent: 'GHS 552,500'
    },
    {
      id: '2',
      name: 'Kumasi Shopping Center',
      progress: 45,
      deadline: '2024-10-30',
      status: 'Behind Schedule',
      budget: 'GHS 1,200,000',
      spent: 'GHS 540,000'
    },
    {
      id: '3',
      name: 'Tema Industrial Warehouse',
      progress: 85,
      deadline: '2024-06-20',
      status: 'Ahead of Schedule',
      budget: 'GHS 650,000',
      spent: 'GHS 552,500'
    }
  ];

  const materials = [
    { name: 'Cement (50kg bags)', current: 450, required: 500, price: 45, unit: 'bags' },
    { name: 'Steel Bars (12mm)', current: 25, required: 30, price: 180, unit: 'bundles' },
    { name: 'Blocks (6inch)', current: 2800, required: 3000, price: 2.5, unit: 'pieces' },
    { name: 'Roofing Sheets', current: 85, required: 100, price: 55, unit: 'sheets' }
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
      case 'timeline':
        return <ProjectTimeline projects={projects} />;
      case 'materials':
        return <MaterialTracker materials={materials} />;
      case 'budget-chart':
        return (
          <ChartWidget 
            title="Budget Allocation"
            data={budgetChartData}
            type="doughnut"
          />
        );
      default:
        return <div>Widget not found</div>;
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Project Manager Dashboard</h1>
              <p className="opacity-90">Construction projects and resource management</p>
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">12 Active Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">48 Workers On Site</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">New Project</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Start planning</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Budget Planner</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cost estimation</p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('documentation')}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Photo Documentation</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Progress photos</p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('location')}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Site Management</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location tracking</p>
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
      case 'documentation':
        return <CameraIntegration user={{ role: 'project-manager' }} />;
      case 'location':
        return <GPSFeatures user={{ role: 'project-manager' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      {activeView !== 'dashboard' && (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-2 px-6 py-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              <Briefcase size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveView('documentation')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeView === 'documentation'
                  ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Camera size={20} />
              <span>Documentation</span>
            </button>
            <button
              onClick={() => setActiveView('location')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeView === 'location'
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50 dark:bg-purple-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <MapPin size={20} />
              <span>Site Management</span>
            </button>
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
}