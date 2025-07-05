'use client';

import { Users, TrendingUp, Target, Clock } from 'lucide-react';
import { Lead, LeadStage } from './types';
import { calculatePipelineStats } from './utils';

interface LeadStatsProps {
  leads: Lead[];
  className?: string;
}

export default function LeadStats({ leads, className = "" }: LeadStatsProps) {
  const stats = calculatePipelineStats(leads);
  
  const getStageCount = (stage: LeadStage) => {
    return stats.stageBreakdown[stage] || 0;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Lead Statistics</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-purple-600 dark:text-purple-400 text-lg">
              {stats.totalLeads}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Leads</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-lg">
              {stats.closeRate}%
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Close Rate</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Prospecting</span>
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {getStageCount('Prospecting')}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Qualified</span>
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {getStageCount('Qualified')}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Proposal</span>
          <span className="font-medium text-orange-600 dark:text-orange-400">
            {getStageCount('Proposal')}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Negotiation</span>
          <span className="font-medium text-green-600 dark:text-green-400">
            {getStageCount('Negotiation')}
          </span>
        </div>
      </div>
    </div>
  );
} 