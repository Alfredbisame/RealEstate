'use client';

import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: LucideIcon;
  required?: boolean;
  className?: string;
  rightElement?: React.ReactNode;
}

export default function AuthInput({
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  className = '',
  rightElement
}: AuthInputProps) {
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${Icon ? 'pl-10' : 'pl-4'
          } ${rightElement ? 'pr-12' : 'pr-4'} py-3`}
        placeholder={placeholder}
        required={required}
      />
      {rightElement && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {rightElement}
        </div>
      )}
    </div>
  );
} 