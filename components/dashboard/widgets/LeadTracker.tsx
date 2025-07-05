'use client';

import { Users, Phone, Mail, Calendar } from 'lucide-react';

export default function LeadTracker() {
  const leads = [
    {
      id: '1',
      name: 'Dr. Kwame Nkrumah',
      property: 'East Legon Villa',
      stage: 'Qualified',
      value: 'GHS 450,000',
      contact: '+233 24 123 4567',
      lastContact: '2024-02-10',
      priority: 'high'
    },
    {
      id: '2',
      name: 'Mrs. Ama Asante',
      property: 'Kumasi Apartment',
      stage: 'Negotiation',
      value: 'GHS 280,000',
      contact: '+233 20 987 6543',
      lastContact: '2024-02-08',
      priority: 'high'
    },
    {
      id: '3',
      name: 'Mr. John Mensah',
      property: 'Tema Commercial',
      stage: 'Prospecting',
      value: 'GHS 650,000',
      contact: '+233 26 555 7890',
      lastContact: '2024-02-05',
      priority: 'medium'
    },
    {
      id: '4',
      name: 'Ms. Grace Osei',
      property: 'Accra Residential',
      stage: 'Proposal',
      value: 'GHS 380,000',
      contact: '+233 54 321 0987',
      lastContact: '2024-02-12',
      priority: 'high'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'prospecting': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'qualified': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'proposal': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'negotiation': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'w-2 h-2 bg-red-500 rounded-full';
      case 'medium': return 'w-2 h-2 bg-orange-500 rounded-full';
      case 'low': return 'w-2 h-2 bg-green-500 rounded-full';
      default: return 'w-2 h-2 bg-gray-500 rounded-full';
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-purple-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Lead Tracker</h3>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-80">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className={getPriorityColor(lead.priority)} />
                  <h4 className="font-medium text-gray-900 dark:text-white">{lead.name}</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{lead.property}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <Phone size={12} />
                  <span>{lead.contact}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{lead.value}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStageColor(lead.stage)}`}>
                  {lead.stage}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar size={12} />
                <span>Last contact: {new Date(lead.lastContact).toLocaleDateString()}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors">
                  <Phone size={12} />
                </button>
                <button className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors">
                  <Mail size={12} />
                </button>
                <button className="p-1 bg-purple-100 text-purple-600 rounded hover:bg-purple-200 transition-colors">
                  <Calendar size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Summary */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Pipeline Value</h4>
        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <p className="font-semibold text-purple-600">GHS 1.76M</p>
            <p className="text-gray-500 dark:text-gray-400">Total Pipeline</p>
          </div>
          <div>
            <p className="font-semibold text-green-600">32%</p>
            <p className="text-gray-500 dark:text-gray-400">Close Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}