'use client';

interface IntegrationsHeaderProps {
  connectedCount: number;
}

export default function IntegrationsHeader({ connectedCount }: IntegrationsHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-400"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 text-white">
            Integrations
          </h1>
          <p className="text-blue-100">
            Connect with Ghana's leading business services
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-400 rounded-xl px-4 py-2 border border-blue-300">
            <span className="text-sm font-medium">
              {connectedCount} Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}