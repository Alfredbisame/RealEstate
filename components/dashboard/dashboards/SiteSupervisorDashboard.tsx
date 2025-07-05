'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import WorkerAttendance from '../widgets/WorkerAttendance';
import SafetyReports from '../widgets/SafetyReports';
import GPSFeatures from '../../mobile/GPSFeatures';
import VoiceNotes from '../../mobile/VoiceNotes';
import { 
  Hammer, Users, Shield, Clock, 
  AlertTriangle, CheckCircle, UserCheck, Activity,
  MapPin, Mic
} from 'lucide-react';

export default function SiteSupervisorDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'attendance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'safety', x: 0, y: 2, w: 6, h: 3 },
    { id: '4', type: 'daily-log', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Workers Present',
      value: '42/48',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'green'
    },
    {
      title: 'Safety Score',
      value: '94%',
      change: '+2%',
      changeType: 'positive' as const,
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Tasks Completed',
      value: '18/24',
      change: '+5',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'blue'
    },
    {
      title: 'Incidents Today',
      value: '0',
      change: '0',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'green'
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
        return <WorkerAttendance />;
      case 'safety':
        return <SafetyReports />;
      case 'daily-log':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Daily Activity Log</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Foundation completed</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">East Wing - 9:30 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Activity className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Steel work in progress</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">West Wing - 11:45 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Material delivery scheduled</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cement blocks - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
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
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Site Supervisor Dashboard</h1>
              <p className="opacity-90">Field operations and worker management</p>
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">42 Workers Present</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Safety First Priority</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Clock In/Out</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Worker attendance</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Safety Report</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Log incidents</p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('location')}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">GPS Tracking</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location monitoring</p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('voice-notes')}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Voice Reports</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Audio documentation</p>
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
      case 'location':
        return <GPSFeatures user={{ role: 'site-supervisor' }} />;
      case 'voice-notes':
        return <VoiceNotes user={{ role: 'site-supervisor' }} />;
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
              <Hammer size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveView('location')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeView === 'location'
                  ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <MapPin size={20} />
              <span>GPS Tracking</span>
            </button>
            <button
              onClick={() => setActiveView('voice-notes')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeView === 'voice-notes'
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50 dark:bg-purple-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Mic size={20} />
              <span>Voice Reports</span>
            </button>
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
}