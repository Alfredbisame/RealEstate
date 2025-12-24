import { Phone, User, TrendingUp, DollarSign } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'client' | 'investor' | 'lead' | 'vendor';
  status: 'active' | 'inactive' | 'potential';
  lastContacted: string;
  propertyInterest?: string;
  avatar?: string;
}

interface ContactsStatsProps {
  contacts: Contact[];
}

export default function ContactsStats({ contacts }: ContactsStatsProps) {
  // Calculate stats
  const totalContacts = contacts.length;
  const activeContacts = contacts.filter(contact => contact.status === 'active').length;
  const clientContacts = contacts.filter(contact => contact.type === 'client').length;
  const investorContacts = contacts.filter(contact => contact.type === 'investor').length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Contacts</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalContacts}</p>
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Contacts</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{activeContacts}</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Clients</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{clientContacts}</p>
          </div>
          <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
            <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Investors</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{investorContacts}</p>
          </div>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
            <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}