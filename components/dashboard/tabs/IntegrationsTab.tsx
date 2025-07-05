'use client';

import { useState } from 'react';
import IntegrationsHeader from './integrations/IntegrationsHeader';
import IntegrationStats from './integrations/IntegrationStats';
import CategoryFilter from './integrations/CategoryFilter';
import IntegrationsGrid from './integrations/IntegrationsGrid';
import PopularIntegrations from './integrations/PopularIntegrations';

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
      status: 'connected' as const,
      icon: '💳',
      features: ['Card Payments', 'Bank Transfers', 'Mobile Money'],
      setupRequired: false
    },
    {
      id: '2',
      name: 'MTN Mobile Money',
      description: 'Mobile money payment integration',
      category: 'payments',
      status: 'available' as const,
      icon: '📱',
      features: ['MoMo Payments', 'Instant Transfers', 'Payment Notifications'],
      setupRequired: true
    },
    {
      id: '3',
      name: 'GRA Tax Portal',
      description: 'Automated tax filing and compliance',
      category: 'compliance',
      status: 'connected' as const,
      icon: '🏛️',
      features: ['VAT Returns', 'Income Tax', 'PAYE Calculations'],
      setupRequired: false
    },
    {
      id: '4',
      name: 'SSNIT Integration',
      description: 'Social Security contributions management',
      category: 'hr',
      status: 'available' as const,
      icon: '👥',
      features: ['Employee Contributions', 'Employer Contributions', 'Compliance Reports'],
      setupRequired: true
    },
    {
      id: '5',
      name: 'WhatsApp Business',
      description: 'Customer communication via WhatsApp',
      category: 'communication',
      status: 'connected' as const,
      icon: '💬',
      features: ['Automated Messages', 'Customer Support', 'Notifications'],
      setupRequired: false
    },
    {
      id: '6',
      name: 'Google Drive',
      description: 'Document storage and sharing',
      category: 'storage',
      status: 'available' as const,
      icon: '☁️',
      features: ['File Backup', 'Document Sharing', 'Collaboration'],
      setupRequired: true
    },
    {
      id: '7',
      name: 'Lands Commission',
      description: 'Land title verification and search',
      category: 'compliance',
      status: 'coming-soon' as const,
      icon: '🏞️',
      features: ['Title Verification', 'Land Search', 'Ownership History'],
      setupRequired: true
    },
    {
      id: '8',
      name: 'Ghana Post GPS',
      description: 'Digital address integration',
      category: 'location',
      status: 'available' as const,
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

  const connectedCount = integrations.filter(i => i.status === 'connected').length;

  const handleConnect = (integration: any) => {
    // TODO: Implement connect functionality
    console.log('Connect integration:', integration.name);
  };

  const handleConfigure = (integration: any) => {
    // TODO: Implement configure functionality
    console.log('Configure integration:', integration.name);
  };

  const handleView = (integration: any) => {
    // TODO: Implement view functionality
    console.log('View integration:', integration.name);
  };

  return (
    <div className="space-y-6">
      <IntegrationsHeader connectedCount={connectedCount} />
      <IntegrationStats integrations={integrations} />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <IntegrationsGrid
        integrations={filteredIntegrations}
        onConnect={handleConnect}
        onConfigure={handleConfigure}
        onView={handleView}
      />
      <PopularIntegrations />
    </div>
  );
}