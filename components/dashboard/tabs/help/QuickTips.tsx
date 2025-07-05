'use client';

interface QuickTipProps {
  number: number;
  title: string;
  description: string;
  color: string;
}

function QuickTip({ number, title, description, color }: QuickTipProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className={`w-6 h-6 ${color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
        <span className="text-white text-xs font-bold">{number}</span>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function QuickTips() {
  const tips = [
    {
      number: 1,
      title: 'Use keyboard shortcuts',
      description: 'Press Ctrl+K to quickly search',
      color: 'bg-green-500'
    },
    {
      number: 2,
      title: 'Customize your dashboard',
      description: 'Drag and drop widgets to personalize',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
        Quick Tips
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <QuickTip key={index} {...tip} />
        ))}
      </div>
    </div>
  );
} 