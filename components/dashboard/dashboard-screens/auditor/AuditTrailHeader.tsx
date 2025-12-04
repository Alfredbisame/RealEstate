import { Search, Download, Filter } from 'lucide-react';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Security', value: 'security' },
  { label: 'Export', value: 'export' },
  { label: 'User', value: 'user' },
];

type AuditTrailHeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  onExport: () => void;
  onClear: () => void;
};

export default function AuditTrailHeader({
  search,
  setSearch,
  filter,
  setFilter,
  onExport,
  onClear,
}: AuditTrailHeaderProps) {
  return (
    <div className="sticky top-0 z-20 bg-blue-500 rounded-xl p-6 mb-4 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight drop-shadow">Audit Trail</h2>
          <p className="text-white text-base">Comprehensive log of all system activities for compliance and transparency.</p>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg font-semibold text-sm hover:bg-white hover:bg-opacity-30 transition shadow-md" onClick={onExport}>
            <Download className="w-4 h-4 mr-2" /> Export
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search audit trail..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" onClick={onClear}>
              ×
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <Filter className="w-4 h-4 text-gray-400 mt-1" />
          {filters.map(f => (
            <button
              key={f.value}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${filter === f.value ? 'bg-blue-600 text-white border-blue-600 shadow' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 