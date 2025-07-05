'use client';

interface IntegrationsHeaderProps {
  connectedCount: number;
}

export default function IntegrationsHeader({ connectedCount }: IntegrationsHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Integrations
          </h1>
          <p className="opacity-90 text-purple-50">
            Connect with Ghana's leading business services
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
            <span className="text-sm font-medium">
              {connectedCount} Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 