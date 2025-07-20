import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Search, Filter, FileText, Download, Eye, FileSignature, Receipt, Landmark, File, X } from 'lucide-react';

const typeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'contract':
      return <FileSignature className="h-5 w-5 text-fuchsia-600 mr-2" />;
    case 'receipt':
      return <Receipt className="h-5 w-5 text-blue-500 mr-2" />;
    case 'permit':
      return <Landmark className="h-5 w-5 text-green-600 mr-2" />;
    default:
      return <File className="h-5 w-5 text-gray-400 mr-2" />;
  }
};

const navTabs = [
  {
    value: 'all',
    label: 'All',
    icon: <File className="h-5 w-5 text-gray-500 mr-2" />,
    tooltip: 'Show all documents',
  },
  {
    value: 'contract',
    label: 'Contracts',
    icon: <FileSignature className="h-5 w-5 text-fuchsia-600 mr-2" />,
    tooltip: 'Show contract documents',
  },
  {
    value: 'receipt',
    label: 'Receipts',
    icon: <Receipt className="h-5 w-5 text-blue-500 mr-2" />,
    tooltip: 'Show receipt documents',
  },
  {
    value: 'permit',
    label: 'Permits',
    icon: <Landmark className="h-5 w-5 text-green-600 mr-2" />,
    tooltip: 'Show permit documents',
  },
  {
    value: 'other',
    label: 'Others',
    icon: <FileText className="h-5 w-5 text-gray-600 mr-2" />,
    tooltip: 'Show other documents',
  },
];

const auditorDocuments = [
  {
    id: 1,
    documentType: 'Contract',
    documentName: 'Vendor Agreement - 2024',
    status: 'active',
    dateCreated: '2024-03-01',
    lastModified: '2024-03-10',
    description: 'Signed contract with vendor for Q1 2024.',
    fileSize: '1.2 MB',
    tags: ['Contract', 'Vendor', '2024'],
    fileContent: 'This is a simulated PDF content for Vendor Agreement - 2024.'
  },
  {
    id: 2,
    documentType: 'Receipt',
    documentName: 'Payment Receipt - Invoice #1234',
    status: 'archived',
    dateCreated: '2024-02-15',
    lastModified: '2024-02-16',
    description: 'Receipt for payment of invoice #1234.',
    fileSize: '0.5 MB',
    tags: ['Receipt', 'Payment', 'Finance'],
    fileContent: 'This is a simulated PDF content for Payment Receipt - Invoice #1234.'
  },
  {
    id: 3,
    documentType: 'Permit',
    documentName: 'Building Permit - East Legon Project',
    status: 'active',
    dateCreated: '2024-01-20',
    lastModified: '2024-01-22',
    description: 'Official building permit for East Legon construction.',
    fileSize: '2.0 MB',
    tags: ['Permit', 'Construction', 'Legal'],
    fileContent: 'This is a simulated PDF content for Building Permit - East Legon Project.'
  },
  {
    id: 4,
    documentType: 'Other',
    documentName: 'Insurance Certificate - Cantonments',
    status: 'active',
    dateCreated: '2024-03-05',
    lastModified: '2024-03-06',
    description: 'Insurance certificate for Cantonments property.',
    fileSize: '0.8 MB',
    tags: ['Insurance', 'Certificate'],
    fileContent: 'This is a simulated PDF content for Insurance Certificate - Cantonments.'
  },
];

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'active', label: 'Active' },
  { value: 'archived', label: 'Archived' },
];

interface AuditorDocumentsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AuditorDocumentsContent({ activeView, onViewChange, user }: AuditorDocumentsContentProps) {
  // Filter state
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  // View modal state
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewDoc, setViewDoc] = useState<any>(null);

  // Filter logic
  let filteredDocs = activeView === 'all'
    ? auditorDocuments
    : auditorDocuments.filter(doc => doc.documentType.toLowerCase() === activeView);
  if (statusFilter !== 'all') {
    filteredDocs = filteredDocs.filter(doc => doc.status === statusFilter);
  }
  if (dateFrom) {
    filteredDocs = filteredDocs.filter(doc => doc.dateCreated >= dateFrom);
  }
  if (dateTo) {
    filteredDocs = filteredDocs.filter(doc => doc.dateCreated <= dateTo);
  }

  // Download logic
  const handleDownload = (doc: any) => {
    const blob = new Blob([doc.fileContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.documentName + '.pdf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  // View logic
  const handleView = (doc: any) => {
    setViewDoc(doc);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-2xl p-0 mt-4 border border-gray-200 dark:border-gray-800 shadow-xl">
      <div className="bg-gradient-to-r from-fuchsia-600 to-blue-500 rounded-t-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg mb-0">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight">Document Repository</h2>
          <p className="text-white/80 text-base font-medium">Access contracts, receipts, permits, and other important documents. <span className='opacity-80'>Read-only access for auditors.</span></p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button className="flex items-center px-5 py-2 bg-white/20 text-white rounded-lg font-semibold text-base hover:bg-white/30 transition shadow-md">
            <FileText className="h-5 w-5 mr-2" />
            Export
          </Button>
        </div>
      </div>
      <div className="px-8 pt-6 pb-0">
        <Tabs value={activeView} onValueChange={onViewChange} className="w-full mb-6">
          <TabsList className="flex w-full gap-3 bg-transparent p-0 shadow-none">
            <TooltipProvider>
              {navTabs.map(tab => (
                (() => {
                  let activeColor = '';
                  if (tab.value === 'all' || tab.value === 'contract') {
                    activeColor = 'data-[state=active]:bg-fuchsia-600 data-[state=active]:border-fuchsia-600';
                  } else if (tab.value === 'receipt') {
                    activeColor = 'data-[state=active]:bg-blue-600 data-[state=active]:border-blue-600';
                  } else if (tab.value === 'permit') {
                    activeColor = 'data-[state=active]:bg-green-600 data-[state=active]:border-green-600';
                  } else if (tab.value === 'other') {
                    activeColor = 'data-[state=active]:bg-gray-600 data-[state=active]:border-gray-600';
                  }
                  return (
                    <Tooltip key={tab.value} delayDuration={200}>
                      <TooltipTrigger asChild>
                        <TabsTrigger
                          value={tab.value}
                          className={`text-sm font-semibold rounded-lg px-5 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2
                            ${tab.value === 'all' || tab.value === 'contract' ? 'focus:ring-fuchsia-500' : ''}
                            ${tab.value === 'receipt' ? 'focus:ring-blue-500' : ''}
                            ${tab.value === 'permit' ? 'focus:ring-green-500' : ''}
                            ${tab.value === 'other' ? 'focus:ring-gray-500' : ''}
                            data-[state=active]:shadow-lg data-[state=active]:text-white ` + activeColor
                          }
                          data-state={activeView === tab.value ? 'active' : undefined}
                        >
                          <span className="flex items-center">
                            {tab.icon}
                            {tab.label}
                          </span>
                        </TabsTrigger>
                      </TooltipTrigger>
                      <TooltipContent>{tab.tooltip}</TooltipContent>
                    </Tooltip>
                  );
                })()
              ))}
            </TooltipProvider>
          </TabsList>
        </Tabs>
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search documents..." className="pl-11 pr-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <Popover open={filterPopoverOpen} onOpenChange={setFilterPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg px-4 py-2">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Status</label>
                  <select
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 py-1 text-sm"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                  >
                    {statusOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Date From</label>
                  <Input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Date To</label>
                  <Input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full" />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button size="sm" variant="ghost" onClick={() => { setStatusFilter('all'); setDateFrom(''); setDateTo(''); setFilterPopoverOpen(false); }}>Clear</Button>
                  <Button size="sm" onClick={() => setFilterPopoverOpen(false)}>Apply</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-800 mb-6" />
        {/* Documents List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((document) => (
            <Card key={document.id} className="border-0 shadow-lg dark:bg-gray-900 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-200 rounded-xl group cursor-pointer">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  {typeIcon(document.documentType)}
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-fuchsia-600 transition-colors duration-150">{document.documentName}</CardTitle>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{document.documentType}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-semibold px-2 py-0.5 rounded-md text-xs capitalize">{document.status}</Badge>
                  <Badge variant="outline" className="text-xs font-medium border-gray-300 dark:border-gray-700">{document.fileSize}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 pb-4">
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div>
                    <span>Date Created:</span>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">{document.dateCreated}</div>
                  </div>
                  <div>
                    <span>Last Modified:</span>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">{document.lastModified}</div>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Tags:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {document.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-medium border-gray-300 dark:border-gray-700">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Description:</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-normal leading-relaxed">{document.description}</p>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-lg px-3 py-1.5 shadow" onClick={() => handleView(document)}>
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 shadow" onClick={() => handleDownload(document)}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredDocs.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8 col-span-full">No documents found for this category.</div>
          )}
        </div>
      </div>
      {/* View Modal */}
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {viewDoc && typeIcon(viewDoc.documentType)}
              {viewDoc?.documentName}
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 dark:text-gray-400">
              {viewDoc?.documentType} &middot; {viewDoc?.fileSize} &middot; {viewDoc?.dateCreated}
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 my-4 min-h-[120px] text-gray-700 dark:text-gray-200 text-sm whitespace-pre-line">
            {viewDoc?.fileContent || 'No preview available.'}
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setViewModalOpen(false)} variant="outline">
              <X className="h-4 w-4 mr-1" /> Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 