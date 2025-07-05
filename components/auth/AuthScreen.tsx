'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import AuthBranding from './AuthBranding';
import AuthHeader from './AuthHeader';
import SocialLoginButtons from './SocialLoginButtons';
import AuthDivider from './AuthDivider';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';
import RoleSelectorModal from './RoleSelectorModal';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthScreenProps {
  onLogin: (user: User) => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [selectedSocialProvider, setSelectedSocialProvider] = useState<'google' | 'facebook' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'property-owner' as UserRole,
    company: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      name: formData.name || formData.email.split('@')[0],
      role: formData.role,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || formData.email)}&background=10b981&color=fff`
    };

    onLogin(user);
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    setSelectedSocialProvider(provider);
    setShowRoleSelector(true);
  };

  const handleRoleSelection = async (selectedRole: UserRole) => {
    setIsLoading(true);
    setShowRoleSelector(false);
    
    // Simulate social login with selected role
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: `user@${selectedSocialProvider}.com`,
      name: `${selectedSocialProvider?.charAt(0).toUpperCase()}${selectedSocialProvider?.slice(1)} User`,
      role: selectedRole,
      avatar: `https://ui-avatars.com/api/?name=${selectedSocialProvider}&background=10b981&color=fff`
    };

    onLogin(user);
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const closeRoleSelector = () => {
    setShowRoleSelector(false);
    setSelectedSocialProvider(null);
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding & Features */}
        <AuthBranding />

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            
            {/* Header */}
            <AuthHeader isSignUp={isSignUp} />

            {/* Social Login Buttons */}
            <SocialLoginButtons 
              onSocialLogin={handleSocialLogin}
              isLoading={isLoading}
              className="mb-6"
            />

            {/* Divider */}
            <AuthDivider className="mb-6" />

            {/* Auth Form */}
            <AuthForm
              isSignUp={isSignUp}
              formData={formData}
              onFormDataChange={handleInputChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />

            {/* Footer */}
            <AuthFooter
              isSignUp={isSignUp}
              onToggleMode={toggleAuthMode}
              className="mt-6"
            />
          </div>
        </div>
      </div>

      {/* Role Selection Modal */}
      <RoleSelectorModal
        isOpen={showRoleSelector}
        onClose={closeRoleSelector}
        onRoleSelect={handleRoleSelection}
        isLoading={isLoading}
        selectedProvider={selectedSocialProvider}
      />
    </div>
  );
}