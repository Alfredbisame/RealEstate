import StatsCard from '../../widgets/StatsCard';
import { Users, Download, Shield, ListChecks } from 'lucide-react';

interface AuditTrailEntry {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

interface AuditTrailStatsProps {
  auditTrail: AuditTrailEntry[];
}

export default function AuditTrailStats({ auditTrail }: AuditTrailStatsProps) {
  const totalEntries = auditTrail.length;
  const uniqueUsers = new Set(auditTrail.map(a => a.user)).size;
  const exports = auditTrail.filter(a => a.action.toLowerCase().includes('export')).length;
  const securityEvents = auditTrail.filter(a => a.action.toLowerCase().includes('password') || a.action.toLowerCase().includes('session')).length;

  const stats = [
    { title: 'Total Entries', value: totalEntries.toString(), change: '+0', changeType: 'neutral' as const, icon: ListChecks, color: 'blue' as const },
    { title: 'Unique Users', value: uniqueUsers.toString(), change: '+0', changeType: 'neutral' as const, icon: Users, color: 'green' as const },
    { title: 'Exports', value: exports.toString(), change: '+0', changeType: 'neutral' as const, icon: Download, color: 'purple' as const },
    { title: 'Security Events', value: securityEvents.toString(), change: '+0', changeType: 'neutral' as const, icon: Shield, color: 'orange' as const },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <StatsCard key={idx} {...stat} />
      ))}
    </div>
  );
} 