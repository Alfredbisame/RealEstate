import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useRef } from 'react';

const monthlyData = [
  { month: 'Jan', Revenue: 40000, Expenses: 24000, NetProfit: 16000 },
  { month: 'Feb', Revenue: 30000, Expenses: 13900, NetProfit: 16100 },
  { month: 'Mar', Revenue: 20000, Expenses: 9800, NetProfit: 10200 },
  { month: 'Apr', Revenue: 27800, Expenses: 3908, NetProfit: 23892 },
  { month: 'May', Revenue: 18900, Expenses: 4800, NetProfit: 14100 },
  { month: 'Jun', Revenue: 23900, Expenses: 3800, NetProfit: 20100 },
  { month: 'Jul', Revenue: 34900, Expenses: 4300, NetProfit: 30600 },
];

const assetData = [
  { name: 'Cash', value: 50000 },
  { name: 'Accounts Receivable', value: 20000 },
  { name: 'Properties', value: 300000 },
];

const departmentExpenses = [
  { department: 'Audit', value: 12000 },
  { department: 'Compliance', value: 8000 },
  { department: 'IT', value: 5000 },
  { department: 'HR', value: 4000 },
  { department: 'Operations', value: 9000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

export default function ReportsAnalyticsView({ user }: { user: any }) {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportPNG = async () => {
    if (typeof window === 'undefined') return;
    const html2canvas = (await import('html2canvas')).default;
    if (chartRef.current) {
      html2canvas(chartRef.current).then(canvas => {
        const link = document.createElement('a');
        link.download = 'auditor-analytics.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const handleExportPDF = async () => {
    if (typeof window === 'undefined') return;
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    if (chartRef.current) {
      html2canvas(chartRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        // Fit image to page
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
        pdf.save('auditor-analytics.pdf');
      });
    }
  };

  const handleExportCSV = () => {
    // Helper to convert array of objects to CSV
    const toCSV = (arr: Record<string, any>[], columns: string[]) => {
      const header = columns.join(',');
      const rows = arr.map(obj => columns.map(col => obj[col]).join(','));
      return [header, ...rows].join('\n');
    };
    let csv = '';
    // Monthly Data
    csv += 'Monthly Revenue/Expenses/NetProfit\n';
    csv += toCSV(monthlyData, ['month', 'Revenue', 'Expenses', 'NetProfit']) + '\n\n';
    // Asset Data
    csv += 'Asset Allocation\n';
    csv += toCSV(assetData, ['name', 'value']) + '\n\n';
    // Department Expenses
    csv += 'Department Expenses\n';
    csv += toCSV(departmentExpenses, ['department', 'value']) + '\n';
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'auditor-analytics.csv';
    link.click();
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Reports Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded-xl border border-indigo-200 dark:border-indigo-700">
          <div className="font-semibold mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">GHS 2,400,000</div>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="font-semibold mb-2">Total Expenses</div>
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-200">GHS 1,200,000</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-semibold mb-2">Net Profit</div>
          <div className="text-3xl font-bold text-green-700 dark:text-green-200">GHS 1,200,000</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-xl border border-purple-200 dark:border-purple-700">
          <div className="font-semibold mb-2">Reports Generated</div>
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-200">24</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-end mb-4">
        <button
          onClick={handleExportPNG}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-fuchsia-700 hover:to-blue-700 transition shadow"
        >
          Export as PNG
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-green-700 hover:to-blue-700 transition shadow"
        >
          Export as PDF
        </button>
        <button
          onClick={handleExportCSV}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold text-sm hover:from-yellow-700 hover:to-orange-700 transition shadow"
        >
          Export as CSV
        </button>
      </div>
      <div ref={chartRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow">
          <h4 className="font-semibold mb-2">Monthly Revenue vs Expenses</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#0088FE" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Expenses" fill="#FF8042" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow">
          <h4 className="font-semibold mb-2">Asset Allocation</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={assetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {assetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow">
          <h4 className="font-semibold mb-2">Net Profit Trend</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="NetProfit" stroke="#A020F0" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Area Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow">
          <h4 className="font-semibold mb-2">Cumulative Revenue & Expenses</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8042" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF8042" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Revenue" stroke="#0088FE" fillOpacity={1} fill="url(#colorRev)" />
              <Area type="monotone" dataKey="Expenses" stroke="#FF8042" fillOpacity={1} fill="url(#colorExp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Radar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow">
          <h4 className="font-semibold mb-2">Department Expense Comparison</h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={departmentExpenses}>
              <PolarGrid />
              <PolarAngleAxis dataKey="department" />
              <PolarRadiusAxis />
              <Radar name="Expenses" dataKey="value" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 