'use client';

import { Filter } from 'lucide-react';

interface ProjectFilterProps {
  filterStatus: string;
  onFilterChange: (status: string) => void;
}

export default function ProjectFilter({ filterStatus, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Status:</span>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => onFilterChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
        >
          <option value="all">All Projects</option>
          <option value="on-track">On Track</option>
          <option value="behind-schedule">Behind Schedule</option>
          <option value="ahead-of-schedule">Ahead of Schedule</option>
        </select>
      </div>
    </div>
  );
} 