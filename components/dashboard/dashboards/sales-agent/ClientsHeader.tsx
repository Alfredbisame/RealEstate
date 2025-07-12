import { Users, Plus, Download, Filter, MessageSquare, Calendar, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ClientsHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Client Management</h1>
          <p className="text-blue-100 text-lg">Manage client relationships, communications, and sales processes</p>
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
            Add Client
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Active Clients</p>
              <p className="text-2xl font-bold">24</p>
              <p className="text-blue-200 text-xs">+3 this month</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Scheduled Viewings</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-blue-200 text-xs">This week</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Referrals</p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-blue-200 text-xs">+2 this month</p>
            </div>
            <Award className="w-8 h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Documents</p>
              <p className="text-2xl font-bold">156</p>
              <p className="text-blue-200 text-xs">Pending review</p>
            </div>
            <FileText className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
} 