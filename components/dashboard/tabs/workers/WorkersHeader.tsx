'use client';

import { Users, Clock, Award, AlertTriangle, Plus, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkersHeaderProps {
  totalWorkers?: number;
  presentToday?: number;
  onTimeRate?: number;
  recognitionCount?: number;
}

export default function WorkersHeader({ 
  totalWorkers = 156,
  presentToday = 142,
  onTimeRate = 94.2,
  recognitionCount = 23
}: WorkersHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Workforce Management</h1>
          <p className="text-blue-100 text-lg">Comprehensive worker tracking and performance management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:text-white dark:hover:bg-blue-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-blue-400 text-white hover:bg-blue-300 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500">
            <Plus className="w-4 h-4 mr-2" />
            Add Worker
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Workers</p>
              <p className="text-2xl font-bold">{totalWorkers}</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Present Today</p>
              <p className="text-2xl font-bold">{presentToday}</p>
              <p className="text-blue-200 text-xs">{((presentToday / totalWorkers) * 100).toFixed(1)}% attendance</p>
            </div>
            <Clock className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">On-Time Rate</p>
              <p className="text-2xl font-bold">{onTimeRate}%</p>
              <p className="text-blue-200 text-xs">This month</p>
            </div>
            <Award className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-blue-400/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Recognitions</p>
              <p className="text-2xl font-bold">{recognitionCount}</p>
              <p className="text-blue-200 text-xs">This quarter</p>
            </div>
            <Award className="w-8 h-8 text-blue-200" />
          </div>
        </div>
      </div>
    </div>
  );
}