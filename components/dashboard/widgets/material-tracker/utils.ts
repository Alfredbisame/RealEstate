import { CheckCircle, AlertTriangle, Package } from 'lucide-react';
import { Material, StockStatus, MaterialStats } from './types';

export const getStockStatus = (current: number, required: number): StockStatus => {
  const percentage = (current / required) * 100;
  
  if (percentage >= 90) {
    return {
      status: 'adequate',
      color: 'text-green-600 dark:text-green-400',
      icon: CheckCircle,
      label: 'Adequate Stock'
    };
  }
  
  if (percentage >= 50) {
    return {
      status: 'low',
      color: 'text-orange-600 dark:text-orange-400',
      icon: AlertTriangle,
      label: 'Low Stock'
    };
  }
  
  return {
    status: 'critical',
    color: 'text-red-600 dark:text-red-400',
    icon: AlertTriangle,
    label: 'Critical Stock'
  };
};

export const getProgressBarColor = (current: number, required: number): string => {
  const percentage = (current / required) * 100;
  
  if (percentage >= 90) return 'bg-green-500 dark:bg-green-400';
  if (percentage >= 50) return 'bg-orange-500 dark:bg-orange-400';
  return 'bg-red-500 dark:bg-red-400';
};

export const getProgressBarBackground = (current: number, required: number): string => {
  const percentage = (current / required) * 100;
  
  if (percentage >= 90) return 'bg-green-100 dark:bg-green-900/20';
  if (percentage >= 50) return 'bg-orange-100 dark:bg-orange-900/20';
  return 'bg-red-100 dark:bg-red-900/20';
};

export const calculateStockPercentage = (current: number, required: number): number => {
  return Math.min((current / required) * 100, 100);
};

export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toFixed(2)}`;
};

export const calculateMaterialStats = (materials: Material[]): MaterialStats => {
  const totalMaterials = materials.length;
  const lowStockCount = materials.filter(m => {
    const percentage = calculateStockPercentage(m.current, m.required);
    return percentage >= 50 && percentage < 90;
  }).length;
  
  const criticalStockCount = materials.filter(m => {
    const percentage = calculateStockPercentage(m.current, m.required);
    return percentage < 50;
  }).length;
  
  const totalValue = materials.reduce((sum, material) => {
    return sum + (material.current * material.price);
  }, 0);
  
  const averageStockLevel = materials.length > 0 
    ? materials.reduce((sum, material) => {
        return sum + calculateStockPercentage(material.current, material.required);
      }, 0) / materials.length
    : 0;

  return {
    totalMaterials,
    lowStockCount,
    criticalStockCount,
    totalValue,
    averageStockLevel: Math.round(averageStockLevel)
  };
};

export const getStockLevelLabel = (percentage: number): string => {
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 70) return 'Good';
  if (percentage >= 50) return 'Fair';
  if (percentage >= 30) return 'Poor';
  return 'Critical';
};

export const getStockLevelColor = (percentage: number): string => {
  if (percentage >= 90) return 'text-green-600 dark:text-green-400';
  if (percentage >= 70) return 'text-blue-600 dark:text-blue-400';
  if (percentage >= 50) return 'text-orange-600 dark:text-orange-400';
  if (percentage >= 30) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
};

export const getOrderQuantity = (material: Material): number => {
  return Math.max(material.required - material.current, 0);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getCategoryIcon = (category?: string): any => {
  switch (category?.toLowerCase()) {
    case 'cement': return '🏗️';
    case 'steel': return '🔩';
    case 'wood': return '🪵';
    case 'electrical': return '⚡';
    case 'plumbing': return '🚰';
    default: return Package;
  }
}; 