export interface SafetyMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  color: 'green' | 'orange' | 'red' | 'blue' | 'yellow';
  icon: any;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  description?: string;
}

export interface SafetyIncident {
  id: string;
  type: string;
  worker: string;
  date: string;
  status: 'Resolved' | 'Under Review' | 'Pending' | 'Escalated' | 'Closed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description?: string;
  location?: string;
  department?: string;
  supervisor?: string;
  actionTaken?: string;
  followUpRequired?: boolean;
  cost?: number;
  timeLost?: number;
  witnesses?: string[];
  attachments?: string[];
}

export interface SafetyReportsProps {
  className?: string;
  showMetrics?: boolean;
  showIncidents?: boolean;
  showTrends?: boolean;
  maxIncidents?: number;
  onIncidentClick?: (incident: SafetyIncident) => void;
  onMetricClick?: (metric: SafetyMetric) => void;
}

export interface SafetyHeaderProps {
  title?: string;
  totalIncidents?: number;
  safetyScore?: string;
  className?: string;
  showStats?: boolean;
}

export interface SafetyMetricCardProps {
  metric: SafetyMetric;
  className?: string;
  onClick?: (metric: SafetyMetric) => void;
  showTrend?: boolean;
}

export interface SafetyMetricsGridProps {
  metrics: SafetyMetric[];
  className?: string;
  layout?: 'grid' | 'list' | 'compact';
  onMetricClick?: (metric: SafetyMetric) => void;
}

export interface IncidentCardProps {
  incident: SafetyIncident;
  className?: string;
  onClick?: (incident: SafetyIncident) => void;
  showDetails?: boolean;
}

export interface IncidentListProps {
  incidents: SafetyIncident[];
  className?: string;
  maxHeight?: string;
  onIncidentClick?: (incident: SafetyIncident) => void;
  showFilters?: boolean;
}

export interface IncidentSeverityProps {
  severity: SafetyIncident['severity'];
  className?: string;
  showIcon?: boolean;
}

export interface IncidentStatusProps {
  status: SafetyIncident['status'];
  className?: string;
  showIcon?: boolean;
}

export interface SafetyTrendProps {
  data: {
    date: string;
    incidents: number;
    score: number;
  }[];
  className?: string;
  period?: 'week' | 'month' | 'quarter' | 'year';
}

export interface SafetyAlertsProps {
  alerts: SafetyAlert[];
  className?: string;
  maxAlerts?: number;
}

export interface SafetyAlert {
  id: string;
  type: 'warning' | 'critical' | 'info' | 'success';
  title: string;
  message: string;
  date: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  acknowledged?: boolean;
  actionRequired?: boolean;
}

export interface SafetyStats {
  totalIncidents: number;
  resolvedIncidents: number;
  pendingIncidents: number;
  criticalIncidents: number;
  safetyScore: number;
  daysWithoutIncident: number;
  averageResolutionTime: number;
  totalCost: number;
  totalTimeLost: number;
}

export interface SafetyFilters {
  severity?: SafetyIncident['severity'];
  status?: SafetyIncident['status'];
  dateRange?: {
    start: string;
    end: string;
  };
  department?: string;
  worker?: string;
}

export interface SafetyPriority {
  level: 'low' | 'medium' | 'high' | 'critical';
  color: string;
  bgColor: string;
  textColor: string;
  icon: any;
} 