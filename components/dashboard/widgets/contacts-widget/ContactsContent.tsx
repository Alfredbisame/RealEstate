import { Phone, User, Mail, MessageSquare } from 'lucide-react';

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

interface ContactsContentProps {
  contacts: Contact[];
}

export default function ContactsContent({ contacts }: ContactsContentProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'client': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'investor': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'lead': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'vendor': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="p-4">
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</p>
                <div className="flex items-center mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(contact.type)}`}>
                    {contact.type}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800 text-green-600 dark:text-green-400">
                <Mail className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-full bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800 text-purple-600 dark:text-purple-400">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}