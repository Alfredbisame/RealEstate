'use client';

import { Calendar, Users, Clock, TrendingUp, Plus, Download, Filter, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AttendanceHeaderProps {
  totalWorkers?: number;
  presentToday?: number;
  attendanceRate?: number;
  averageHours?: number;
}

export default function AttendanceHeader({ 
  totalWorkers = 156,
  presentToday = 142,
  attendanceRate = 91.0,
  averageHours = 8.5
}: AttendanceHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Attendance Management</h1>
          <p className="text-green-100 text-lg">Track daily attendance and generate comprehensive reports</p>
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
          <Button size="sm" className="bg-white text-green-600 hover:bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Record
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Total Workers</p>
              <p className="text-2xl font-bold">{totalWorkers}</p>
            </div>
            <Users className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Present Today</p>
              <p className="text-2xl font-bold">{presentToday}</p>
              <p className="text-green-200 text-xs">{attendanceRate}% attendance</p>
            </div>
            <Clock className="w-8 h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Attendance Rate</p>
              <p className="text-2xl font-bold">{attendanceRate}%</p>
              <p className="text-green-200 text-xs">This month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Avg. Hours</p>
              <p className="text-2xl font-bold">{averageHours}h</p>
              <p className="text-green-200 text-xs">Per worker</p>
            </div>
            <BarChart3 className="w-8 h-8 text-green-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 