'use client';

import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

interface CostInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  icon?: any;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function CostInput({
  label,
  value,
  onChange,
  placeholder,
  icon: Icon = FaCediSign,
  className = "",
  min = 0,
  max,
  step = 1000
}: CostInputProps) {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    const valid = newValue >= min && (!max || newValue <= max) && !isNaN(newValue);
    setIsValid(valid);
    
    if (valid) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (!isValid) {
      onChange(min);
      setIsValid(true);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          min={min}
          max={max}
          step={step}
          className={`
            w-full pl-10 pr-4 py-3 border rounded-lg 
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-white 
            focus:ring-2 focus:ring-green-500 focus:border-transparent 
            transition-all duration-200
            ${isValid 
              ? 'border-gray-300 dark:border-gray-600' 
              : 'border-red-300 dark:border-red-600'
            }
            hover:border-green-400 dark:hover:border-green-500
          `}
          placeholder={placeholder}
        />
        {!isValid && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      {!isValid && (
        <p className="text-xs text-red-600 dark:text-red-400">
          Please enter a valid amount between {min} and {max || 'unlimited'}
        </p>
      )}
    </div>
  );
} 