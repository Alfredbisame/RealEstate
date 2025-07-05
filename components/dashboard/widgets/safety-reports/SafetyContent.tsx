'use client';

import { useState } from 'react';
import { SafetyReportsProps, SafetyMetric, SafetyIncident } from './types';
import { mockSafetyMetrics, mockIncidents, mockAlerts } from './mockData';
import SafetyHeader from './SafetyHeader';
import SafetyMetricsGrid from './SafetyMetricsGrid';
import IncidentList from './IncidentList';
import SafetyAlerts from './SafetyAlerts';

export default function SafetyContent({
  className = "",
  showMetrics = true,
  showIncidents = true,
  showTrends = true,
  maxIncidents = 5,
  onIncidentClick,
  onMetricClick
}: SafetyReportsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'incidents' | 'alerts'>('overview');

  const handleIncidentClick = (incident: SafetyIncident) => {
    if (onIncidentClick) {
      onIncidentClick(incident);
    }
    // You could also navigate to a detailed view or open a modal
    console.log('Incident clicked:', incident);
  };

  const handleMetricClick = (metric: SafetyMetric) => {
    if (onMetricClick) {
      onMetricClick(metric);
    }
    // You could also navigate to a detailed analytics view
    console.log('Metric clicked:', metric);
  };

  return (
    <div className={`h-full ${className}`}>
      <SafetyHeader 
        totalIncidents={mockIncidents.length}
        safetyScore="94%"
        showStats={true}
      />

      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
            activeTab === 'overview'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('incidents')}
          className={`flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
            activeTab === 'incidents'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Incidents
        </button>
        <button
          onClick={() => setActiveTab('alerts')}
          className={`flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
            activeTab === 'alerts'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Alerts
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <>
            {showMetrics && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Safety Metrics
                </h4>
                <SafetyMetricsGrid
                  metrics={mockSafetyMetrics}
                  onMetricClick={handleMetricClick}
                  layout="grid"
                />
              </div>
            )}

            {showIncidents && (
              <div>
                <IncidentList
                  incidents={mockIncidents}
                  maxIncidents={maxIncidents}
                  onIncidentClick={handleIncidentClick}
                  showFilters={false}
                  maxHeight="24rem"
                />
              </div>
            )}
          </>
        )}

        {activeTab === 'incidents' && (
          <IncidentList
            incidents={mockIncidents}
            onIncidentClick={handleIncidentClick}
            showFilters={true}
            maxHeight="32rem"
          />
        )}

        {activeTab === 'alerts' && (
          <SafetyAlerts
            alerts={mockAlerts}
            maxAlerts={10}
          />
        )}
      </div>
    </div>
  );
} 