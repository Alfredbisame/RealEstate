import { Award, Plus, Download, Filter, AlertCircle, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function QualityControlHeader() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Quality Control</h1>
          <p className="text-emerald-100 text-lg">Monitor construction quality, inspections, and compliance standards</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-gray-700/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/30">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-gray-700/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/30">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-white text-emerald-600 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            New Inspection
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Pass Rate</p>
              <p className="text-2xl font-bold">94%</p>
              <p className="text-emerald-200 text-xs">+2% from last month</p>
            </div>
            <CheckCircle className="w-8 h-8 text-emerald-200" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Pending Inspections</p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-emerald-200 text-xs">Due this week</p>
            </div>
            <Clock className="w-8 h-8 text-emerald-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Issues Found</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-emerald-200 text-xs">Require attention</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-emerald-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Compliance Score</p>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-emerald-200 text-xs">Above standard</p>
            </div>
            <Award className="w-8 h-8 text-emerald-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 