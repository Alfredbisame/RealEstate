import { Package, Plus, Download, Filter, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MaterialRequestsHeader() {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Material Requests</h1>
          <p className="text-blue-100 text-lg">Manage site material requisitions and approvals</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-400 border-blue-300 text-white hover:bg-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Pending Requests</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-blue-200 text-xs">Awaiting approval</p>
            </div>
            <Clock className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Approved Today</p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-blue-200 text-xs">+2 from yesterday</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Value</p>
              <p className="text-2xl font-bold">GH₵45K</p>
              <p className="text-blue-200 text-xs">This month</p>
            </div>
            <Package className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Urgent Requests</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-blue-200 text-xs">Need immediate attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
}