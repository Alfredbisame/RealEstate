'use client';

import { Phone, Mail, MessageCircle } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: 'online' | 'offline';
}

interface ContactCardProps {
  contact: Contact;
  onCall?: (contact: Contact) => void;
  onEmail?: (contact: Contact) => void;
  onMessage?: (contact: Contact) => void;
  className?: string;
}

export default function ContactCard({ contact, onCall, onEmail, onMessage, className = '' }: ContactCardProps) {
  return (
    <div className={`flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all hover:scale-[1.01] ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {contact.name.charAt(0)}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            contact.status === 'online' ? 'bg-blue-500' : 'bg-gray-400'
          }`}></div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{contact.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{contact.role}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onCall?.(contact)}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors hover:scale-110"
        >
          <Phone size={16} />
        </button>
        <button 
          onClick={() => onEmail?.(contact)}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors hover:scale-110"
        >
          <Mail size={16} />
        </button>
        <button 
          onClick={() => onMessage?.(contact)}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors hover:scale-110"
        >
          <MessageCircle size={16} />
        </button>
      </div>
    </div>
  );
}