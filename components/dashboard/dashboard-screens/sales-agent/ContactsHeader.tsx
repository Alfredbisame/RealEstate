import { Search, Plus, Filter } from 'lucide-react';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface ContactsHeaderProps {
  user: User;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

export default function ContactsHeader({ 
  user, 
  searchTerm, 
  setSearchTerm,
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus
}: ContactsHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contacts</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage your clients, investors, and leads
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Contact</span>
          </button>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search contacts by name, email, or phone..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="client">Client</option>
            <option value="investor">Investor</option>
            <option value="lead">Lead</option>
            <option value="vendor">Vendor</option>
          </select>
          
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="potential">Potential</option>
          </select>
        </div>
      </div>
    </div>
  );
}