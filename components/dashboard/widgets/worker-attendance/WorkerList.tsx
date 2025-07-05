'use client';

import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WorkerListProps } from './types';
import { WorkerCard } from './WorkerCard';
import { useState, useMemo } from 'react';
import { filterWorkers, sortWorkers } from './utils';

export function WorkerList({
  workers,
  showDetails = false,
  showActions = false,
  maxWorkers,
  onWorkerClick,
  onStatusChange,
  className = ''
}: WorkerListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [siteFilter, setSiteFilter] = useState<string[]>([]);
  const [roleFilter, setRoleFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Get unique values for filters
  const sites = useMemo(() => [...new Set(workers.map(w => w.site))], [workers]);
  const roles = useMemo(() => [...new Set(workers.map(w => w.role))], [workers]);
  const statuses = ['present', 'late', 'absent'];

  // Filter and sort workers
  const filteredWorkers = useMemo(() => {
    let filtered = workers;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(worker =>
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.site.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    filtered = filterWorkers(filtered, {
      status: statusFilter,
      site: siteFilter,
      role: roleFilter
    });

    // Sort workers
    filtered = sortWorkers(filtered, sortBy, sortOrder);

    // Limit number of workers
    if (maxWorkers) {
      filtered = filtered.slice(0, maxWorkers);
    }

    return filtered;
  }, [workers, searchTerm, statusFilter, siteFilter, roleFilter, sortBy, sortOrder, maxWorkers]);

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'status':
        setStatusFilter(prev => 
          prev.includes(value) 
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'site':
        setSiteFilter(prev => 
          prev.includes(value) 
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
      case 'role':
        setRoleFilter(prev => 
          prev.includes(value) 
            ? prev.filter(v => v !== value)
            : [...prev, value]
        );
        break;
    }
  };

  const clearFilters = () => {
    setStatusFilter([]);
    setSiteFilter([]);
    setRoleFilter([]);
    setSearchTerm('');
  };

  const hasActiveFilters = statusFilter.length > 0 || siteFilter.length > 0 || roleFilter.length > 0 || searchTerm;

  return (
    <div className={className}>
      {/* Search and Filters */}
      <div className="space-y-3 mb-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search workers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters and Sort */}
        <div className="flex items-center space-x-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="role">Role</SelectItem>
              <SelectItem value="site">Site</SelectItem>
              <SelectItem value="checkIn">Check-in</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
          </Button>

          <div className="flex-1" />

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>

        {/* Filter Chips */}
        {(statusFilter.length > 0 || siteFilter.length > 0 || roleFilter.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {statusFilter.map(status => (
              <Button
                key={`status-${status}`}
                variant="secondary"
                size="sm"
                onClick={() => handleFilterChange('status', status)}
                className="text-xs"
              >
                Status: {status} ×
              </Button>
            ))}
            {siteFilter.map(site => (
              <Button
                key={`site-${site}`}
                variant="secondary"
                size="sm"
                onClick={() => handleFilterChange('site', site)}
                className="text-xs"
              >
                Site: {site} ×
              </Button>
            ))}
            {roleFilter.map(role => (
              <Button
                key={`role-${role}`}
                variant="secondary"
                size="sm"
                onClick={() => handleFilterChange('role', role)}
                className="text-xs"
              >
                Role: {role} ×
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Worker Cards */}
      <div className="space-y-3">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              showDetails={showDetails}
              showActions={showActions}
              onClick={onWorkerClick}
              onStatusChange={onStatusChange}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p>No workers found matching your criteria</p>
            {hasActiveFilters && (
              <Button variant="link" onClick={clearFilters} className="mt-2">
                Clear all filters
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      {filteredWorkers.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          Showing {filteredWorkers.length} of {workers.length} workers
        </div>
      )}
    </div>
  );
} 