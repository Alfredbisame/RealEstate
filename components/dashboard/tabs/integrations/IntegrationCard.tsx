'use client';

import { CheckCircle, Plus, AlertCircle, Settings, ExternalLink } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'connected' | 'available' | 'coming-soon';
  icon: string;
  features: string[];
  setupRequired: boolean;
}

interface IntegrationCardProps {
  integration: Integration;
  onConnect?: (integration: Integration) => void;
  onConfigure?: (integration: Integration) => void;
  onView?: (integration: Integration) => void;
}

export default function IntegrationCard({ integration, onConnect, onConfigure, onView }: IntegrationCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'available': return <Plus className="w-5 h-5 text-blue-600" />;
      case 'coming-soon': return <AlertCircle className="w-5 h-5 text-blue-600" />;
      default: return <Settings className="w-5 h-5 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'available': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'coming-soon': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400 border-gray-200 dark:border-gray-800';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  const getActionButton = (integration: Integration) => {
    switch (integration.status) {
      case 'connected':
        return (
          <button 
            onClick={() => onConfigure?.(integration)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            <Settings size={16} />
            <span>Configure</span>
          </button>
        );
      case 'available':
        return (
          <button 
            onClick={() => onConnect?.(integration)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Plus size={16} />
            <span>Connect</span>
          </button>
        );
      case 'coming-soon':
        return (
          <button disabled className="flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
            <span>Coming Soon</span>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{integration.icon}</div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {integration.name}
            </h3>
            <span className={`inline-block px-2 py-1 text-xs rounded-full border ${getStatusColor(integration.status)}`}>
              {integration.status.replace('-', ' ')}
            </span>
          </div>
        </div>
        {getStatusIcon(integration.status)}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
        {integration.description}
      </p>

      <div className="space-y-2 mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Features:</h4>
        <ul className="space-y-1">
          {integration.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle size={14} className="text-blue-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        {getActionButton(integration)}
        {integration.status === 'connected' && (
          <button 
            onClick={() => onView?.(integration)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
          >
            <ExternalLink size={16} />
          </button>
        )}
      </div>
    </div>
  );
}