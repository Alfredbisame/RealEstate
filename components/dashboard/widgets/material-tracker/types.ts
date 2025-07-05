export interface Material {
  id: string;
  name: string;
  current: number;
  required: number;
  price: number;
  unit: string;
  category?: string;
  supplier?: string;
  lastUpdated?: string;
}

export interface MaterialTrackerProps {
  materials: Material[];
  className?: string;
}

export interface MaterialCardProps {
  material: Material;
  onUpdate?: (material: Material) => void;
  onOrder?: (material: Material) => void;
  className?: string;
}

export interface MaterialHeaderProps {
  title?: string;
  className?: string;
}

export interface MaterialListProps {
  materials: Material[];
  onUpdate?: (material: Material) => void;
  onOrder?: (material: Material) => void;
  className?: string;
}

export interface StockStatus {
  status: 'adequate' | 'low' | 'critical';
  color: string;
  icon: any;
  label: string;
}

export interface MaterialStats {
  totalMaterials: number;
  lowStockCount: number;
  criticalStockCount: number;
  totalValue: number;
  averageStockLevel: number;
}

export interface ProgressBarProps {
  current: number;
  required: number;
  className?: string;
}

export interface StockAlertProps {
  material: Material;
  className?: string;
} 