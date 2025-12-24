'use client';

import { Phone, User, Mail, MessageSquare } from 'lucide-react';
import ContactsHeader from './contacts-widget/ContactsHeader';
import ContactsContent from './contacts-widget/ContactsContent';

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

interface ContactsWidgetProps {
  contacts?: Contact[];
  className?: string;
}

export default function ContactsWidget({ 
  contacts = [
    { id: '1', name: 'John Smith', email: 'john@example.com', phone: '(555) 123-4567', type: 'client', status: 'active', lastContacted: '2023-05-15' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(555) 987-6543', type: 'investor', status: 'active', lastContacted: '2023-06-20' },
    { id: '3', name: 'Mike Williams', email: 'mike@example.com', phone: '(555) 456-7890', type: 'lead', status: 'potential', lastContacted: '2023-07-10' },
  ],
  className = "" 
}: ContactsWidgetProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}>
      <ContactsHeader />
      <ContactsContent contacts={contacts} />
    </div>
  );
}