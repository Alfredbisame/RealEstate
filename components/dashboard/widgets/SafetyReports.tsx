'use client';

import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function SafetyReports() {
  const safetyMetrics = [
    {
      label: 'Safety Score',
      value: '94%',
      change: '+2%',
      color: 'text-green-600',
      icon: Shield
    },
    {
      label: 'Incidents (Month)',
      value: '2',
      change: '-1',
      color: 'text-orange-600',
      icon: AlertTriangle
    },
    {
      label: 'Days Without Incident',
      value: '15',
      change: '+15',
      color: 'text-green-600',
      icon: CheckCircle
    }
  ];

  const recentIncidents = [
    {
      id: '1',
      type: 'Minor Cut',
      worker: 'Kwame A.',
      date: '2024-02-01',
      status: 'Resolved',
      severity: 'low'
    },
    {
      id: '2',
      type: 'Equipment Malfunction',
      worker: 'Ama O.',
      date: '2024-01-28',
      status: 'Under Review',
      severity: 'medium'
    },
    {
      id: '3',
      type: 'Near Miss',
      worker: 'Kojo M.',
      date: '2024-01-25',
      status: 'Resolved',
      severity: 'low'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'low': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Safety Reports</h3>
      </div>

      {/* Safety Metrics */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {safetyMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <IconComponent className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">{metric.value}</p>
                  <p className={`text-xs ${metric.color}`}>{metric.change}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Incidents */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Recent Incidents</h4>
        <div className="space-y-2 overflow-y-auto max-h-32">
          {recentIncidents.map((incident) => (
            <div key={incident.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{incident.type}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {incident.worker} • {new Date(incident.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(incident.severity)}`}>
                  {incident.severity}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {incident.status === 'Resolved' ? (
                  <CheckCircle className="w-3 h-3 text-green-600" />
                ) : (
                  <Clock className="w-3 h-3 text-orange-600" />
                )}
                <span className="text-xs text-gray-600 dark:text-gray-400">{incident.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}