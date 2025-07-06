'use client';

import { useState, useEffect } from 'react';
import { StatsCardProps, StatsCardData } from './types';
import { getVariantClasses, getSizeClasses, getAccessibilityProps, animateValue } from './utils';
import StatsCardHeader from './StatsCardHeader';
import StatsCardContent from './StatsCardContent';
import StatsCardSkeleton from './StatsCardSkeleton';

export default function StatsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  color,
  description,
  trend,
  target,
  period,
  className = "",
  onClick,
  loading = false,
  animated = false,
  showTrend = true,
  size = 'md',
  variant = 'default'
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (onClick) {
      const data: StatsCardData = {
        title,
        value,
        change,
        changeType,
        color,
        trend,
        period
      };
      onClick(data);
    }
  };

  useEffect(() => {
    if (animated && !isAnimating) {
      setIsAnimating(true);
      const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
      if (!isNaN(numericValue)) {
        animateValue(0, numericValue, 1000, (currentValue) => {
          setDisplayValue(formatAnimatedValue(currentValue, value));
        });
      }
    }
  }, [animated, value, isAnimating]);

  const formatAnimatedValue = (currentValue: number, originalValue: string) => {
    if (originalValue.includes('₵')) {
      return `₵${currentValue.toLocaleString()}`;
    }
    if (originalValue.includes('%')) {
      return `${currentValue.toFixed(1)}%`;
    }
    if (originalValue.includes('K')) {
      return `${(currentValue / 1000).toFixed(1)}K`;
    }
    if (originalValue.includes('M')) {
      return `${(currentValue / 1000000).toFixed(1)}M`;
    }
    return currentValue.toLocaleString();
  };

  const variants = getVariantClasses(variant);
  const sizes = getSizeClasses(size);

  if (loading) {
    return <StatsCardSkeleton size={size} variant={variant} className={className} />;
  }

  return (
    <div 
      className={`
        ${variants.container} ${sizes.container} ${className}
        transition-all duration-300 group
        ${onClick ? 'cursor-pointer' : ''}
        ${variants.hover}
      `}
      onClick={handleClick}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
      {...(onClick ? { role: 'button' } : getAccessibilityProps(title, displayValue, change))}
    >
      <StatsCardHeader
        icon={icon}
        color={color}
        change={change}
        changeType={changeType}
        size={size}
        showTrend={showTrend}
        trend={trend}
        className="mb-3"
      />
      
      <StatsCardContent
        title={title}
        value={displayValue}
        description={description}
        target={target}
        period={period}
        size={size}
        variant={variant}
      />
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-300 pointer-events-none" />
    </div>
  );
} 