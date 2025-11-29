'use client';

import { Wrench, Plus, Download, Filter, Truck, Clock, BarChart3, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EquipmentHeaderProps {
  totalEquipment?: number;
  availableEquipment?: number;
  maintenanceDue?: number;
  utilizationRate?: number;
}

export default function EquipmentHeader({
  totalEquipment = 45,
  availableEquipment = 32,
  maintenanceDue = 8,
  utilizationRate = 78.5
}: EquipmentHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Equipment Management</h1>
          <p className="text-blue-100 text-lg">Track construction equipment, maintenance, and utilization</p>
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
          <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Equipment
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Equipment</p>
              <p className="text-2xl font-bold">{totalEquipment}</p>
            </div>
            <Truck className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Available</p>
              <p className="text-2xl font-bold">{availableEquipment}</p>
              <p className="text-blue-200 text-xs">{utilizationRate}% utilization</p>
            </div>
            <Clock className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Maintenance Due</p>
              <p className="text-2xl font-bold">{maintenanceDue}</p>
              <p className="text-blue-200 text-xs">This month</p>
            </div>
            <Wrench className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Utilization Rate</p>
              <p className="text-2xl font-bold">{utilizationRate}%</p>
              <p className="text-blue-200 text-xs">Optimal performance</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 