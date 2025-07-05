'use client';

import { Phone, Mail, Calendar, Building, User } from 'lucide-react';
import { Lead } from './types';
import { getStageColor, getPriorityColor, formatDate, getPriorityLabel } from './utils';

interface LeadCardProps {
  lead: Lead;
  onCall?: (lead: Lead) => void;
  onEmail?: (lead: Lead) => void;
  onSchedule?: (lead: Lead) => void;
  className?: string;
}

export default function LeadCard({ 
  lead, 
  onCall, 
  onEmail, 
  onSchedule, 
  className = "" 
}: LeadCardProps) {
  const handleCall = () => {
    onCall?.(lead);
  };

  const handleEmail = () => {
    onEmail?.(lead);
  };

  const handleSchedule = () => {
    onSchedule?.(lead);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <div 
              className={getPriorityColor(lead.priority)} 
              title={getPriorityLabel(lead.priority)}
            />
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3 text-gray-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">{lead.name}</h4>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
            <Building className="w-3 h-3" />
            <span>{lead.property}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <Phone className="w-3 h-3" />
            <span>{lead.contact}</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
            {lead.value}
          </p>
          <span className={`inline-block px-2 py-1 text-xs rounded-full border ${getStageColor(lead.stage)}`}>
            {lead.stage}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
          <Calendar className="w-3 h-3" />
          <span>Last contact: {formatDate(lead.lastContact)}</span>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleCall}
            className="p-1.5 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 transition-all duration-200 hover:scale-110"
            title="Call lead"
          >
            <Phone className="w-3 h-3" />
          </button>
          
          <button 
            onClick={handleEmail}
            className="p-1.5 bg-green-100 text-green-600 rounded hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 transition-all duration-200 hover:scale-110"
            title="Send email"
          >
            <Mail className="w-3 h-3" />
          </button>
          
          <button 
            onClick={handleSchedule}
            className="p-1.5 bg-purple-100 text-purple-600 rounded hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/40 transition-all duration-200 hover:scale-110"
            title="Schedule meeting"
          >
            <Calendar className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
} 