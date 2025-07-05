import { SafetyMetric, SafetyIncident, SafetyAlert } from './types';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export const mockSafetyMetrics: SafetyMetric[] = [
  {
    id: '1',
    label: 'Safety Score',
    value: '94%',
    change: '+2%',
    color: 'green',
    icon: Shield,
    trend: 'up',
    target: '95%',
    description: 'Overall safety performance score'
  },
  {
    id: '2',
    label: 'Incidents (Month)',
    value: '2',
    change: '-1',
    color: 'orange',
    icon: AlertTriangle,
    trend: 'down',
    target: '0',
    description: 'Total incidents this month'
  },
  {
    id: '3',
    label: 'Days Without Incident',
    value: '15',
    change: '+15',
    color: 'green',
    icon: CheckCircle,
    trend: 'up',
    target: '30',
    description: 'Consecutive days without incidents'
  },
  {
    id: '4',
    label: 'Response Time',
    value: '2.3 hrs',
    change: '-0.5 hrs',
    color: 'blue',
    icon: Clock,
    trend: 'up',
    target: '2.0 hrs',
    description: 'Average incident response time'
  }
];

export const mockIncidents: SafetyIncident[] = [
  {
    id: '1',
    type: 'Minor Cut',
    worker: 'Kwame A.',
    date: '2024-02-01',
    status: 'Resolved',
    severity: 'low',
    description: 'Minor cut on finger while handling construction materials',
    location: 'Site A - Building 2',
    department: 'Construction',
    supervisor: 'John Smith',
    actionTaken: 'First aid applied, worker returned to work',
    followUpRequired: false,
    cost: 50,
    timeLost: 30,
    witnesses: ['Ama O.', 'Kojo M.'],
    attachments: ['incident_report_001.pdf', 'photo_001.jpg']
  },
  {
    id: '2',
    type: 'Equipment Malfunction',
    worker: 'Ama O.',
    date: '2024-01-28',
    status: 'Under Review',
    severity: 'medium',
    description: 'Crane malfunction during lifting operation',
    location: 'Site B - Loading Area',
    department: 'Operations',
    supervisor: 'Sarah Johnson',
    actionTaken: 'Equipment stopped, investigation ongoing',
    followUpRequired: true,
    cost: 5000,
    timeLost: 480,
    witnesses: ['Kwame A.', 'Kojo M.', 'Lisa Chen'],
    attachments: ['incident_report_002.pdf', 'equipment_log.pdf']
  },
  {
    id: '3',
    type: 'Near Miss',
    worker: 'Kojo M.',
    date: '2024-01-25',
    status: 'Resolved',
    severity: 'low',
    description: 'Worker almost fell from scaffolding',
    location: 'Site A - Building 1',
    department: 'Construction',
    supervisor: 'John Smith',
    actionTaken: 'Safety briefing conducted, harness policy reinforced',
    followUpRequired: false,
    cost: 0,
    timeLost: 60,
    witnesses: ['Kwame A.', 'Ama O.'],
    attachments: ['safety_briefing_notes.pdf']
  },
  {
    id: '4',
    type: 'Chemical Spill',
    worker: 'Lisa Chen',
    date: '2024-01-20',
    status: 'Closed',
    severity: 'high',
    description: 'Small chemical spill in storage area',
    location: 'Site C - Storage Facility',
    department: 'Maintenance',
    supervisor: 'David Brown',
    actionTaken: 'Hazmat team called, area cleaned and secured',
    followUpRequired: false,
    cost: 2000,
    timeLost: 240,
    witnesses: ['Emma Wilson', 'Michael Chen'],
    attachments: ['hazmat_report.pdf', 'cleanup_log.pdf']
  },
  {
    id: '5',
    type: 'Electrical Hazard',
    worker: 'Emma Wilson',
    date: '2024-01-15',
    status: 'Resolved',
    severity: 'medium',
    description: 'Exposed electrical wiring discovered',
    location: 'Site A - Electrical Room',
    department: 'Electrical',
    supervisor: 'Robert Davis',
    actionTaken: 'Area cordoned off, electrician called immediately',
    followUpRequired: false,
    cost: 800,
    timeLost: 120,
    witnesses: ['Lisa Chen'],
    attachments: ['electrical_inspection.pdf']
  }
];

export const mockAlerts: SafetyAlert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Safety Equipment Check Due',
    message: 'Monthly safety equipment inspection is due in 3 days',
    date: '2024-02-01',
    priority: 'medium',
    acknowledged: false,
    actionRequired: true
  },
  {
    id: '2',
    type: 'critical',
    title: 'High Incident Rate Alert',
    message: 'Incident rate has increased by 25% this week',
    date: '2024-01-30',
    priority: 'high',
    acknowledged: true,
    actionRequired: true
  },
  {
    id: '3',
    type: 'info',
    title: 'Safety Training Completed',
    message: 'All workers have completed mandatory safety training',
    date: '2024-01-28',
    priority: 'low',
    acknowledged: false,
    actionRequired: false
  },
  {
    id: '4',
    type: 'success',
    title: 'Safety Goal Achieved',
    message: '30 days without incident milestone reached',
    date: '2024-01-25',
    priority: 'low',
    acknowledged: true,
    actionRequired: false
  }
];

export const sampleTrendData = [
  { date: '2024-01-01', incidents: 0, score: 95 },
  { date: '2024-01-08', incidents: 1, score: 92 },
  { date: '2024-01-15', incidents: 2, score: 88 },
  { date: '2024-01-22', incidents: 1, score: 91 },
  { date: '2024-01-29', incidents: 0, score: 94 }
]; 