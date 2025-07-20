import AuditTrailHeader from './AuditTrailHeader';
import AuditTrailStats from './AuditTrailStats';
import AuditTrailTable from './AuditTrailTable';
import AuditTrailDetailsModal from './AuditTrailDetailsModal';
import { useState, useRef } from 'react';


interface AuditEntry {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

const mockAuditTrail: AuditEntry[] = [
  { id: '1', action: 'User Login', user: 'Auditor A', timestamp: '2024-07-15 09:30', details: 'Logged in from IP 192.168.1.10' },
  { id: '2', action: 'Viewed Report', user: 'Auditor A', timestamp: '2024-07-15 09:35', details: 'Viewed Q2 Compliance Report' },
  { id: '3', action: 'Exported Data', user: 'Auditor B', timestamp: '2024-07-15 10:00', details: 'Exported transactions to CSV' },
  { id: '4', action: 'Session Timeout', user: 'Auditor A', timestamp: '2024-07-15 10:15', details: 'Session timed out after inactivity' },
  { id: '5', action: 'Password Change', user: 'Auditor B', timestamp: '2024-07-15 10:30', details: 'Changed password successfully' },
];

export default function AuditTrailScreen() {
  const [selectedAudit, setSelectedAudit] = useState<AuditEntry | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const tableRef = useRef<HTMLDivElement>(null);

  // Filtering logic
  const filteredAuditTrail = mockAuditTrail.filter(a => {
    const matchesSearch =
      a.action.toLowerCase().includes(search.toLowerCase()) ||
      a.user.toLowerCase().includes(search.toLowerCase()) ||
      a.details.toLowerCase().includes(search.toLowerCase());

    let matchesFilter = true;
    if (filter === 'security') matchesFilter = a.action.toLowerCase().includes('security');
    else if (filter === 'export') matchesFilter = a.action.toLowerCase().includes('export');
    else if (filter === 'user') matchesFilter = a.action.toLowerCase().includes('user');
    // 'all' matches everything

    return matchesSearch && matchesFilter;
  });

  const onExport = async () => {
    if (typeof window === 'undefined') return;
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    if (tableRef.current) {
      html2canvas(tableRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
        pdf.save('audit-trail.pdf');
      });
    }
  };

  const onClear = () => setSearch('');

  const handleViewDetails = (audit: AuditEntry) => {
    setSelectedAudit(audit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAudit(null);
  };

  return (
    <div className="space-y-6">
      <AuditTrailHeader
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        onExport={onExport}
        onClear={onClear}
      />
      <AuditTrailStats auditTrail={filteredAuditTrail} />
      <div ref={tableRef}>
        <AuditTrailTable auditTrail={filteredAuditTrail} onViewDetails={handleViewDetails} />
      </div>
      <AuditTrailDetailsModal audit={selectedAudit} open={showModal} onClose={handleCloseModal} />
    </div>
  );
} 