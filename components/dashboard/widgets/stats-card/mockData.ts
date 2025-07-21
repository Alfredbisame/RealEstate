import { StatsCardMetric, StatsCardCategory } from './types';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Home, 
  Building2, 
  Car, 
  ShoppingCart,
  CreditCard,
  PiggyBank,
  Target,
  BarChart3,
  Activity,
  Calendar,
  Clock,
  Star,
  Award,
  Trophy,
  Zap,
  Heart
} from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

export const mockStatsCards: StatsCardMetric[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '₵2.4M',
    change: '+12.5%',
    changeType: 'positive',
    icon: FaCediSign,
    color: 'green',
    description: 'Monthly revenue from all properties',
    trend: 'up',
    target: '₵2.5M',
    period: 'This month',
    category: 'financial',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '2',
    title: 'Active Properties',
    value: '156',
    change: '+8',
    changeType: 'positive',
    icon: Home,
    color: 'blue',
    description: 'Properties currently under management',
    trend: 'up',
    target: '160',
    period: 'This month',
    category: 'properties',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '3',
    title: 'New Clients',
    value: '24',
    change: '+3',
    changeType: 'positive',
    icon: Users,
    color: 'purple',
    description: 'New clients acquired this month',
    trend: 'up',
    target: '25',
    period: 'This month',
    category: 'clients',
    priority: 'medium',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '4',
    title: 'Occupancy Rate',
    value: '94.2%',
    change: '+2.1%',
    changeType: 'positive',
    icon: Building2,
    color: 'orange',
    description: 'Average property occupancy rate',
    trend: 'up',
    target: '95%',
    period: 'This month',
    category: 'properties',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '5',
    title: 'Maintenance Costs',
    value: '₵45.2K',
    change: '-5.3%',
    changeType: 'positive',
    icon: Car,
    color: 'green',
    description: 'Total maintenance expenses',
    trend: 'down',
    target: '₵50K',
    period: 'This month',
    category: 'financial',
    priority: 'medium',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '6',
    title: 'Pending Sales',
    value: '12',
    change: '-2',
    changeType: 'negative',
    icon: ShoppingCart,
    color: 'red',
    description: 'Properties pending sale completion',
    trend: 'down',
    target: '10',
    period: 'This month',
    category: 'sales',
    priority: 'medium',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '7',
    title: 'Average Rent',
    value: '₵3.2K',
    change: '+8.7%',
    changeType: 'positive',
    icon: CreditCard,
    color: 'blue',
    description: 'Average monthly rent per property',
    trend: 'up',
    target: '₵3.5K',
    period: 'This month',
    category: 'financial',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '8',
    title: 'Profit Margin',
    value: '23.4%',
    change: '+1.2%',
    changeType: 'positive',
    icon: PiggyBank,
    color: 'green',
    description: 'Overall profit margin',
    trend: 'up',
    target: '25%',
    period: 'This month',
    category: 'financial',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '9',
    title: 'Client Satisfaction',
    value: '4.8/5',
    change: '+0.2',
    changeType: 'positive',
    icon: Star,
    color: 'yellow',
    description: 'Average client satisfaction score',
    trend: 'up',
    target: '5.0',
    period: 'This month',
    category: 'clients',
    priority: 'high',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '10',
    title: 'Market Share',
    value: '18.3%',
    change: '+0.5%',
    changeType: 'positive',
    icon: Target,
    color: 'indigo',
    description: 'Market share in target region',
    trend: 'up',
    target: '20%',
    period: 'This month',
    category: 'market',
    priority: 'medium',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '11',
    title: 'Response Time',
    value: '2.3 hrs',
    change: '-0.5 hrs',
    changeType: 'positive',
    icon: Clock,
    color: 'teal',
    description: 'Average response time to inquiries',
    trend: 'up',
    target: '2.0 hrs',
    period: 'This month',
    category: 'service',
    priority: 'medium',
    lastUpdated: '2024-02-01T10:30:00Z'
  },
  {
    id: '12',
    title: 'Energy Efficiency',
    value: '87.2%',
    change: '+3.1%',
    changeType: 'positive',
    icon: Zap,
    color: 'cyan',
    description: 'Average energy efficiency rating',
    trend: 'up',
    target: '90%',
    period: 'This month',
    category: 'sustainability',
    priority: 'low',
    lastUpdated: '2024-02-01T10:30:00Z'
  }
];

export const mockCategories: StatsCardCategory[] = [
  {
    id: 'financial',
    name: 'Financial Metrics',
    description: 'Revenue, costs, and profitability indicators',
    color: 'green',
    icon: FaCediSign,
    metrics: mockStatsCards.filter(m => m.category === 'financial')
  },
  {
    id: 'properties',
    name: 'Property Management',
    description: 'Property performance and occupancy metrics',
    color: 'blue',
    icon: Home,
    metrics: mockStatsCards.filter(m => m.category === 'properties')
  },
  {
    id: 'clients',
    name: 'Client Relations',
    description: 'Client acquisition and satisfaction metrics',
    color: 'purple',
    icon: Users,
    metrics: mockStatsCards.filter(m => m.category === 'clients')
  },
  {
    id: 'sales',
    name: 'Sales Performance',
    description: 'Sales pipeline and conversion metrics',
    color: 'orange',
    icon: ShoppingCart,
    metrics: mockStatsCards.filter(m => m.category === 'sales')
  },
  {
    id: 'market',
    name: 'Market Analysis',
    description: 'Market position and competitive metrics',
    color: 'indigo',
    icon: Target,
    metrics: mockStatsCards.filter(m => m.category === 'market')
  },
  {
    id: 'service',
    name: 'Service Quality',
    description: 'Service delivery and response metrics',
    color: 'teal',
    icon: Clock,
    metrics: mockStatsCards.filter(m => m.category === 'service')
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description: 'Environmental and efficiency metrics',
    color: 'cyan',
    icon: Zap,
    metrics: mockStatsCards.filter(m => m.category === 'sustainability')
  }
];

export const sampleTrendData = [
  { date: '2024-01-01', revenue: 2100000, properties: 148, clients: 21, occupancy: 92.1 },
  { date: '2024-01-08', revenue: 2150000, properties: 150, clients: 22, occupancy: 92.8 },
  { date: '2024-01-15', revenue: 2200000, properties: 152, clients: 23, occupancy: 93.2 },
  { date: '2024-01-22', revenue: 2250000, properties: 154, clients: 23, occupancy: 93.8 },
  { date: '2024-01-29', revenue: 2400000, properties: 156, clients: 24, occupancy: 94.2 }
];

export const performanceData = {
  current: {
    revenue: 2400000,
    properties: 156,
    clients: 24,
    occupancy: 94.2
  },
  previous: {
    revenue: 2130000,
    properties: 148,
    clients: 21,
    occupancy: 92.1
  },
  targets: {
    revenue: 2500000,
    properties: 160,
    clients: 25,
    occupancy: 95.0
  }
}; 