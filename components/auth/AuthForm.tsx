'use client';

import { useState } from 'react';
import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import AuthInput from './AuthInput';
import AuthSelect from './AuthSelect';

interface AuthFormProps {
  isSignUp: boolean;
  formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: UserRole;
    company: string;
    location: string;
  };
  onFormDataChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  className?: string;
}

export default function AuthForm({
  isSignUp,
  formData,
  onFormDataChange,
  onSubmit,
  isLoading,
  className = ''
}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const roleOptions = Object.entries(ROLE_CONFIGS).map(([key, config]) => ({
    value: key,
    label: config.name
  }));

  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <AuthInput
            type="text"
            name="name"
            value={formData.name}
            onChange={onFormDataChange}
            placeholder="Enter your full name"
            icon={User}
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <AuthInput
          type="email"
          name="email"
          value={formData.email}
          onChange={onFormDataChange}
          placeholder="Enter your email"
          icon={Mail}
          required
        />
      </div>

      {isSignUp && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <AuthInput
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onFormDataChange}
              placeholder="+233 XX XXX XXXX"
              icon={Phone}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Role
            </label>
            <AuthSelect
              name="role"
              value={formData.role}
              onChange={onFormDataChange}
              options={roleOptions}
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Password
        </label>
        <AuthInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={onFormDataChange}
          placeholder="Enter your password"
          icon={Lock}
          required
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          }
        />
      </div>

      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Confirm Password
          </label>
          <AuthInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onFormDataChange}
            placeholder="Confirm your password"
            icon={Lock}
            required
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>{isSignUp ? 'Creating Account...' : 'Signing In...'}</span>
          </div>
        ) : (
          isSignUp ? 'Create Account' : 'Sign In'
        )}
      </button>
    </form>
  );
} 