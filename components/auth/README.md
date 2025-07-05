# Auth Components

This directory contains the refactored authentication components for the Ghana Real Estate platform. The components have been broken down into smaller, more manageable pieces while maintaining all existing functionality and styling.

## Components Overview

### Main Component
- **`AuthScreen.tsx`** - The main authentication screen that orchestrates all other components

### UI Components
- **`AuthBranding.tsx`** - Left side branding and features section
- **`AuthHeader.tsx`** - Mobile logo and header text
- **`AuthDivider.tsx`** - Reusable divider component
- **`AuthInput.tsx`** - Reusable input component with icon support
- **`AuthSelect.tsx`** - Reusable select component

### Feature Components
- **`SocialLoginButtons.tsx`** - Google and Facebook login buttons
- **`AuthForm.tsx`** - Main authentication form (sign-in/sign-up)
- **`AuthFooter.tsx`** - Footer with mode toggle and demo credentials
- **`RoleSelectorModal.tsx`** - Modal for role selection during social login

## Usage

### Basic Usage
```tsx
import { AuthScreen } from '@/components/auth';

function App() {
  const handleLogin = (user) => {
    // Handle user login
    console.log('User logged in:', user);
  };

  return <AuthScreen onLogin={handleLogin} />;
}
```

### Individual Components
```tsx
import { 
  AuthBranding, 
  AuthHeader, 
  SocialLoginButtons,
  AuthForm 
} from '@/components/auth';

// Use individual components as needed
```

## Features

### ✅ Maintained Functionality
- Email/password authentication
- Social login (Google, Facebook)
- Role-based access control
- Sign-in/Sign-up toggle
- Demo credentials
- Responsive design
- Dark mode support

### 🎨 UI/UX Enhancements
- Improved hover effects and transitions
- Better visual feedback on interactions
- Enhanced accessibility
- Consistent spacing and typography
- Smooth animations

### 🔧 Developer Benefits
- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used independently
- **Maintainability**: Easier to update and debug
- **Type Safety**: Full TypeScript support
- **Consistency**: Standardized props and styling

## Component Props

### AuthScreen
```tsx
interface AuthScreenProps {
  onLogin: (user: User) => void;
}
```

### AuthInput
```tsx
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
```

### SocialLoginButtons
```tsx
interface SocialLoginButtonsProps {
  onSocialLogin: (provider: 'google' | 'facebook') => void;
  isLoading: boolean;
  className?: string;
}
```

## Styling

All components use Tailwind CSS with:
- Consistent color scheme (green/blue gradient)
- Responsive design patterns
- Dark mode support
- Glassmorphism effects
- Smooth transitions and animations

## File Structure
```
components/auth/
├── index.ts                 # Export all components
├── AuthScreen.tsx          # Main component
├── AuthBranding.tsx        # Branding section
├── AuthHeader.tsx          # Header component
├── SocialLoginButtons.tsx  # Social login buttons
├── AuthDivider.tsx         # Divider component
├── AuthInput.tsx           # Input component
├── AuthSelect.tsx          # Select component
├── AuthForm.tsx            # Form component
├── AuthFooter.tsx          # Footer component
├── RoleSelectorModal.tsx   # Role selection modal
└── README.md              # This documentation
``` 