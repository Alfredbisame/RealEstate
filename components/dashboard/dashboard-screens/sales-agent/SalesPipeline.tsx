'use client';

interface PipelineStage {
  id: string;
  name: string;
  leads: number;
  percentage: number;
  color: string;
}

export default function SalesPipeline() {
  const pipelineStages: PipelineStage[] = [
    {
      id: '1',
      name: 'Prospecting',
      leads: 12,
      percentage: 60,
      color: 'bg-purple-500'
    },
    {
      id: '2',
      name: 'Qualified',
      leads: 8,
      percentage: 40,
      color: 'bg-blue-500'
    },
    {
      id: '3',
      name: 'Negotiation',
      leads: 4,
      percentage: 20,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Sales Pipeline</h3>
      <div className="space-y-4">
        {pipelineStages.map((stage) => (
          <div key={stage.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{stage.name}</span>
              <span className="font-medium text-gray-900 dark:text-white">{stage.leads} leads</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className={`${stage.color} h-2 rounded-full transition-all duration-500 ease-out`} 
                style={{ width: `${stage.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 