'use client';

interface PopularIntegrationProps {
  icon: string;
  name: string;
  description: string;
}

function PopularIntegration({ icon, name, description }: PopularIntegrationProps) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function PopularIntegrations() {
  const popularIntegrations = [
    {
      icon: '💳',
      name: 'PayStack',
      description: 'Most used payment gateway'
    },
    {
      icon: '📱',
      name: 'MTN MoMo',
      description: 'Leading mobile money service'
    },
    {
      icon: '🏛️',
      name: 'GRA Portal',
      description: 'Tax compliance made easy'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
        Popular in Ghana
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularIntegrations.map((integration, index) => (
          <PopularIntegration key={index} {...integration} />
        ))}
      </div>
    </div>
  );
} 