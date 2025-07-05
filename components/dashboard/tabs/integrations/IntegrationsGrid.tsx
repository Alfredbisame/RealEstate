'use client';

import IntegrationCard from './IntegrationCard';

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

interface IntegrationsGridProps {
  integrations: Integration[];
  onConnect?: (integration: Integration) => void;
  onConfigure?: (integration: Integration) => void;
  onView?: (integration: Integration) => void;
}

export default function IntegrationsGrid({ integrations, onConnect, onConfigure, onView }: IntegrationsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {integrations.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No integrations found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try selecting a different category or check back later for new integrations
          </p>
        </div>
      ) : (
        integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            integration={integration}
            onConnect={onConnect}
            onConfigure={onConfigure}
            onView={onView}
          />
        ))
      )}
    </div>
  );
} 