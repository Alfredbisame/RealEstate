'use client';

import { useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactsContent from './ContactsContent';
import ContactsStats from './ContactsStats';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

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

export default function ContactsScreen({ user }: { user: User }) {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      type: 'client',
      status: 'active',
      lastContacted: '2023-05-15',
      propertyInterest: 'Luxury Condo',
      avatar: '/avatars/john-smith.jpg'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      type: 'investor',
      status: 'active',
      lastContacted: '2023-06-20',
      propertyInterest: 'Commercial Property',
      avatar: '/avatars/sarah-johnson.jpg'
    },
    {
      id: '3',
      name: 'Michael Williams',
      email: 'mike.w@email.com',
      phone: '+1 (555) 456-7890',
      type: 'lead',
      status: 'potential',
      lastContacted: '2023-07-10',
      propertyInterest: 'Family Home',
      avatar: '/avatars/michael-williams.jpg'
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 234-5678',
      type: 'client',
      status: 'active',
      lastContacted: '2023-07-22',
      propertyInterest: 'Beachfront Villa',
      avatar: '/avatars/emily-davis.jpg'
    },
    {
      id: '5',
      name: 'Robert Brown',
      email: 'robert.b@email.com',
      phone: '+1 (555) 876-5432',
      type: 'investor',
      status: 'inactive',
      lastContacted: '2023-04-05',
      propertyInterest: 'Apartment Complex',
      avatar: '/avatars/robert-brown.jpg'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contact.phone.includes(searchTerm);
    const matchesType = filterType === 'all' || contact.type === filterType;
    const matchesStatus = filterStatus === 'all' || contact.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <ContactsHeader 
        user={user} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <ContactsStats contacts={contacts} />
      <ContactsContent contacts={filteredContacts} />
    </div>
  );
}