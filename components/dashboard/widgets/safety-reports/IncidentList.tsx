'use client';

import { useState } from 'react';
import { IncidentListProps, SafetyIncident } from './types';
import { filterIncidents, sortIncidents } from './utils';
import IncidentCard from './IncidentCard';
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';

export default function IncidentList({ 
  incidents, 
  className = "",
  maxHeight = "32rem",
  onIncidentClick,
  showFilters = true 
}: IncidentListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'severity' | 'status' | 'worker'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Filter and sort incidents
  const filteredIncidents = filterIncidents(incidents, {
    severity: severityFilter as any,
    status: statusFilter as any,
    worker: searchTerm
  });

  const sortedIncidents = sortIncidents(filteredIncidents, sortBy);
  const finalIncidents = sortOrder === 'desc' ? sortedIncidents : sortedIncidents.reverse();

  const handleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Recent Incidents ({finalIncidents.length})
        </h4>
        
        {showFilters && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleSort('date')}
              className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <span>Date</span>
              {sortBy === 'date' ? (
                sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
              ) : <SortAsc className="w-3 h-3 opacity-30" />}
            </button>
            
            <button
              onClick={() => handleSort('severity')}
              className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <span>Severity</span>
              {sortBy === 'severity' ? (
                sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
              ) : <SortAsc className="w-3 h-3 opacity-30" />}
            </button>
          </div>
        )}
      </div>

      {/* Search and Filters */}
      {showFilters && (
        <div className="space-y-3 mb-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search incidents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-3">
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Severities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              <option value="Resolved">Resolved</option>
              <option value="Under Review">Under Review</option>
              <option value="Pending">Pending</option>
              <option value="Escalated">Escalated</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
      )}

      {/* Incidents List */}
      <div 
        className="space-y-3 overflow-y-auto"
        style={{ maxHeight }}
      >
        {finalIncidents.length > 0 ? (
          finalIncidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onClick={onIncidentClick}
              showDetails={true}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <Filter className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No incidents found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
} 