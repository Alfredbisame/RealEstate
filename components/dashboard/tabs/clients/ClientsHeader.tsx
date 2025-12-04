import { Users, Plus, Download, Filter, MessageSquare, Calendar, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ClientsHeader() {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Client Management</h1>
          <p className="text-blue-100 text-lg">Manage client relationships, communications, and sales processes</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-white text-blue-500 border-white hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-300 dark:text-blue-500 dark:hover:bg-gray-300">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-white text-blue-500 border-white hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-300 dark:text-blue-500 dark:hover:bg-gray-300">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-white text-blue-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Active Clients</p>
              <p className="text-2xl font-bold">24</p>
              <p className="text-blue-100 text-xs">+3 this month</p>
            </div>
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Scheduled Viewings</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-blue-100 text-xs">This week</p>
            </div>
            <Calendar className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Referrals</p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-blue-100 text-xs">+2 this month</p>
            </div>
            <Award className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="bg-blue-400 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-medium">Documents</p>
              <p className="text-2xl font-bold">156</p>
              <p className="text-blue-100 text-xs">Pending review</p>
            </div>
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}