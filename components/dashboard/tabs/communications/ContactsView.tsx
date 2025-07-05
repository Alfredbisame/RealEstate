'use client';

import ContactCard from './ContactCard';

interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: 'online' | 'offline';
}

interface ContactsViewProps {
  contacts: Contact[];
  onCall?: (contact: Contact) => void;
  onEmail?: (contact: Contact) => void;
  onMessage?: (contact: Contact) => void;
  className?: string;
}

export default function ContactsView({ contacts, onCall, onEmail, onMessage, className = '' }: ContactsViewProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onCall={onCall}
          onEmail={onEmail}
          onMessage={onMessage}
        />
      ))}
    </div>
  );
} 