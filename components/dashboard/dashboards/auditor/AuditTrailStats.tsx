import StatsCard from '../../widgets/StatsCard';
import { Users, Download, Shield, ListChecks } from 'lucide-react';

export default function AuditTrailStats({ auditTrail }) {
  const totalEntries = auditTrail.length;
  const uniqueUsers = new Set(auditTrail.map(a => a.user)).size;
  const exports = auditTrail.filter(a => a.action.toLowerCase().includes('export')).length;
  const securityEvents = auditTrail.filter(a => a.action.toLowerCase().includes('password') || a.action.toLowerCase().includes('session')).length;

  const stats = [
    { title: 'Total Entries', value: totalEntries.toString(), change: '+0', changeType: 'neutral', icon: ListChecks, color: 'blue' },
    { title: 'Unique Users', value: uniqueUsers.toString(), change: '+0', changeType: 'neutral', icon: Users, color: 'green' },
    { title: 'Exports', value: exports.toString(), change: '+0', changeType: 'neutral', icon: Download, color: 'purple' },
    { title: 'Security Events', value: securityEvents.toString(), change: '+0', changeType: 'neutral', icon: Shield, color: 'orange' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <StatsCard key={idx} {...stat} />
      ))}
    </div>
  );
} 