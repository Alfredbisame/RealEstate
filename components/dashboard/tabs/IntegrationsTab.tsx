'use client';

import { useState } from 'react';
import { 
  Zap, Settings, CheckCircle, AlertCircle, 
  Plus, ExternalLink, Smartphone, CreditCard 
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface IntegrationsTabProps {
  user: User;
}

export default function IntegrationsTab({ user }: IntegrationsTabProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const integrations = [
    {
      id: '1',
      name: 'PayStack',
      description: 'Accept online payments from customers',
      category: 'payments',
      status: 'connected',
      icon: '💳',
      features: ['Card Payments', 'Bank Transfers', 'Mobile Money'],
      setupRequired: false
    },
    {
      id: '2',
      name: 'MTN Mobile Money',
      description: 'Mobile money payment integration',
      category: 'payments',
      status: 'available',
      icon: '📱',
      features: ['MoMo Payments', 'Instant Transfers', 'Payment Notifications'],
      setupRequired: true
    },
    {
      id: '3',
      name: 'GRA Tax Portal',
      description: 'Automated tax filing and compliance',
      category: 'compliance',
      status: 'connected',
      icon: '🏛️',
      features: ['VAT Returns', 'Income Tax', 'PAYE Calculations'],
      setupRequired: false
    },
    {
      id: '4',
      name: 'SSNIT Integration',
      description: 'Social Security contributions management',
      category: 'hr',
      status: 'available',
      icon: '👥',
      features: ['Employee Contributions', 'Employer Contributions', 'Compliance Reports'],
      setupRequired: true
    },
    {
      id: '5',
      name: 'WhatsApp Business',
      description: 'Customer communication via WhatsApp',
      category: 'communication',
      status: 'connected',
      icon: '💬',
      features: ['Automated Messages', 'Customer Support', 'Notifications'],
      setupRequired: false
    },
    {
      id: '6',
      name: 'Google Drive',
      description: 'Document storage and sharing',
      category: 'storage',
      status: 'available',
      icon: '☁️',
      features: ['File Backup', 'Document Sharing', 'Collaboration'],
      setupRequired: true
    },
    {
      id: '7',
      name: 'Lands Commission',
      description: 'Land title verification and search',
      category: 'compliance',
      status: 'coming-soon',
      icon: '🏞️',
      features: ['Title Verification', 'Land Search', 'Ownership History'],
      setupRequired: true
    },
    {
      id: '8',
      name: 'Ghana Post GPS',
      description: 'Digital address integration',
      category: 'location',
      status: 'available',
      icon: '📍',
      features: ['Digital Addresses', 'Location Services', 'Property Mapping'],
      setupRequired: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Integrations', count: integrations.length },
    { id: 'payments', label: 'Payments', count: integrations.filter(i => i.category === 'payments').length },
    { id: 'compliance', label: 'Compliance', count: integrations.filter(i => i.category === 'compliance').length },
    { id: 'communication', label: 'Communication', count: integrations.filter(i => i.category === 'communication').length },
    { id: 'hr', label: 'HR & Payroll', count: integrations.filter(i => i.category === 'hr').length },
    { id: 'storage', label: 'Storage', count: integrations.filter(i => i.category === 'storage').length },
    { id: 'location', label: 'Location', count: integrations.filter(i => i.category === 'location').length }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'available': return <Plus className="w-5 h-5 text-blue-600" />;
      case 'coming-soon': return <AlertCircle className="w-5 h-5 text-orange-600" />;
      default: return <Settings className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'available': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'coming-soon': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getActionButton = (integration: any) => {
    switch (integration.status) {
      case 'connected':
        return (
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Settings size={16} />
            <span>Configure</span>
          </button>
        );
      case 'available':
        return (
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Integrations</h1>
            <p className="opacity-90">Connect with Ghana's leading business services</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">
                {integrations.filter(i => i.status === 'connected').length} Connected
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {integrations.filter(i => i.status === 'connected').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connected</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {integrations.filter(i => i.status === 'available').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Available</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {integrations.filter(i => i.status === 'coming-soon').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{integrations.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Integration Categories</h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <div key={integration.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{integration.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(integration.status)}`}>
                    {integration.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              {getStatusIcon(integration.status)}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{integration.description}</p>

            <div className="space-y-2 mb-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Features:</h4>
              <ul className="space-y-1">
                {integration.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle size={14} className="text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              {getActionButton(integration)}
              {integration.status === 'connected' && (
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <ExternalLink size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Popular Integrations */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular in Ghana</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
            <div className="text-2xl">💳</div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">PayStack</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Most used payment gateway</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
            <div className="text-2xl">📱</div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">MTN MoMo</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Leading mobile money service</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
            <div className="text-2xl">🏛️</div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">GRA Portal</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tax compliance made easy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}