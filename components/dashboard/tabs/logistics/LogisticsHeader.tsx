import { Truck, MapPin, Settings } from 'lucide-react';

export default function LogisticsHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Logistics & Transport Cost Optimizer</h2>
        <p className="text-white/80 text-sm">Efficient material delivery planning and cost optimization for real estate projects</p>
      </div>
      <div className="flex space-x-2 mt-4 md:mt-0">
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Truck className="w-4 h-4 mr-2" /> Add Route
        </button>
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <MapPin className="w-4 h-4 mr-2" /> Optimize
        </button>
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Settings className="w-4 h-4 mr-2" /> Settings
        </button>
      </div>
    </div>
  );
} 