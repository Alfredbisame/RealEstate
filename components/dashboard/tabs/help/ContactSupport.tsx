'use client';

import ContactOption from './ContactOption';
import { MessageCircle, Phone, Mail, Video } from 'lucide-react';

interface ContactOption {
  type: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: string;
  available: boolean;
}

interface ContactSupportProps {
  contactOptions: ContactOption[];
  onContactClick?: (option: ContactOption) => void;
}

export default function ContactSupport({ contactOptions, onContactClick }: ContactSupportProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Contact Support
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Can't find what you're looking for? Get in touch with our support team.
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactOptions.map((option, index) => (
            <ContactOption
              key={index}
              {...option}
              onClick={() => onContactClick?.(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 