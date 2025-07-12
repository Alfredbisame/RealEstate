import { Calendar, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProgressTrackingHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
          <p className="text-blue-100 text-lg">Monitor construction progress, milestones, and project timelines</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-gray-700/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/30">
            <Calendar className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700">
            <TrendingUp className="w-4 h-4 mr-2" />
            Update Progress
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Overall Progress</p>
              <p className="text-2xl font-bold">78%</p>
              <p className="text-blue-200 text-xs">+2.5% from last week</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Milestones</p>
              <p className="text-2xl font-bold">24/32</p>
              <p className="text-blue-200 text-xs">75% completion rate</p>
            </div>
            <Clock className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Days Remaining</p>
              <p className="text-2xl font-bold">45</p>
              <p className="text-blue-200 text-xs">Until completion</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Delayed Tasks</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-blue-200 text-xs">Need attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 