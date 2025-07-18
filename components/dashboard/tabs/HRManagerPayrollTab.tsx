import PaymentContent from '../widgets/payment-tracker/PaymentContent';
import { mockPayments } from '../widgets/payment-tracker/mockData';
import { useState } from 'react';
import { Download, FileText, Banknote, Calculator, Users, Eye } from 'lucide-react';
import PayrollSummary from '../widgets/PayrollSummary';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Ghana PAYE tax brackets (2024, for demo)
const ghanaTaxBrackets = [
  { upTo: 402, rate: 0 },
  { upTo: 110, rate: 5 },
  { upTo: 130, rate: 10 },
  { upTo: 3000, rate: 17.5 },
  { upTo: Infinity, rate: 25 },
];

function calculatePAYE(salary: number) {
  let remaining = salary;
  let tax = 0;
  let lastLimit = 0;
  for (const bracket of ghanaTaxBrackets) {
    const taxable = Math.min(remaining, bracket.upTo - lastLimit);
    if (taxable > 0) {
      tax += (taxable * bracket.rate) / 100;
      remaining -= taxable;
    }
    lastLimit = bracket.upTo;
    if (remaining <= 0) break;
  }
  return Math.round(tax);
}

function calculateSSNIT(salary: number) {
  return Math.round(salary * 0.135); // 13.5% (5.5% employee + 13% employer, but use 13.5% for demo)
}

function Payslip({ employee, onClose }: { employee: any; onClose: () => void }) {
  const ssnit = calculateSSNIT(employee.salary);
  const paye = calculatePAYE(employee.salary);
  const net = employee.salary + (employee.bonus || 0) + (employee.allowance || 0) - ssnit - paye;
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payslip for {employee.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <div><b>Department:</b> {employee.department}</div>
          <div><b>Base Salary:</b> GHS {employee.salary}</div>
          <div><b>Bonus:</b> GHS {employee.bonus || 0}</div>
          <div><b>Allowance:</b> GHS {employee.allowance || 0}</div>
          <div><b>SSNIT (13.5%):</b> GHS {ssnit}</div>
          <div><b>PAYE Tax:</b> GHS {paye}</div>
          <div><b>Net Salary:</b> <span className="font-bold text-green-600">GHS {net}</span></div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            onClick={() => window.print()}
          >
            Export as PDF
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
            onClick={() => alert('Payslip CSV export coming soon!')}
          >
            Export as CSV
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Move employees mock data to top-level scope
const employees: Array<{
  id: string;
  name: string;
  department: string;
  salary: number;
  bonus?: number;
  allowance?: number;
  history: Array<{ month: string; salary: number; bonus: number; allowance: number; net: number }>;
}> = [
  {
    id: '1',
    name: 'Kwame Asante',
    department: 'Construction',
    salary: 2500,
    bonus: 300,
    allowance: 200,
    history: [
      { month: 'Jan 2024', salary: 2500, bonus: 300, allowance: 200, net: 2000 },
      { month: 'Dec 2023', salary: 2500, bonus: 200, allowance: 150, net: 1950 },
    ],
  },
  {
    id: '2',
    name: 'Ama Osei',
    department: 'Administration',
    salary: 1800,
    bonus: 150,
    allowance: 100,
    history: [
      { month: 'Jan 2024', salary: 1800, bonus: 150, allowance: 100, net: 1450 },
      { month: 'Dec 2023', salary: 1800, bonus: 100, allowance: 80, net: 1400 },
    ],
  },
  {
    id: '3',
    name: 'Kojo Mensah',
    department: 'Sales',
    salary: 2200,
    bonus: 250,
    allowance: 120,
    history: [
      { month: 'Jan 2024', salary: 2200, bonus: 250, allowance: 120, net: 1800 },
      { month: 'Dec 2023', salary: 2200, bonus: 200, allowance: 100, net: 1750 },
    ],
  },
];

function SalaryCalculationTab() {
  const [selected, setSelected] = useState<typeof employees[0] | null>(null);
  return (
    <div>
      <PayrollSummary />
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Employee Payroll Drilldown</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Base Salary</th>
                <th className="p-2 text-left">Bonus</th>
                <th className="p-2 text-left">Allowance</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-b">
                  <td className="p-2">{emp.name}</td>
                  <td className="p-2">{emp.department}</td>
                  <td className="p-2">GHS {emp.salary}</td>
                  <td className="p-2">GHS {emp.bonus || 0}</td>
                  <td className="p-2">GHS {emp.allowance || 0}</td>
                  <td className="p-2">
                    <button
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                      onClick={() => setSelected(emp)}
                    >
                      <Eye className="w-4 h-4" /> View Payslip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selected && <Payslip employee={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}

function HistoryTab() {
  // Combine all employee history for demo
  const allHistory = employees.flatMap((emp) =>
    emp.history.map((h) => ({ ...h, name: emp.name, department: emp.department }))
  );
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><FileText className="w-5 h-5" /> Payroll History</h2>
      <div className="flex justify-end mb-2 gap-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => window.print()}
        >
          Export as PDF
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => alert('CSV export coming soon!')}
        >
          Export as CSV
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => alert('Summary email feature coming soon!')}
        >
          Send Summary Email
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Month</th>
              <th className="p-2 text-left">Salary</th>
              <th className="p-2 text-left">Bonus</th>
              <th className="p-2 text-left">Allowance</th>
              <th className="p-2 text-left">Net Pay</th>
            </tr>
          </thead>
          <tbody>
            {allHistory.map((h, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{h.name}</td>
                <td className="p-2">{h.department}</td>
                <td className="p-2">{h.month}</td>
                <td className="p-2">GHS {h.salary}</td>
                <td className="p-2">GHS {h.bonus}</td>
                <td className="p-2">GHS {h.allowance}</td>
                <td className="p-2 font-bold text-green-700">GHS {h.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SSNITTaxTab() {
  // Demo: show calculation for a sample salary
  const sampleSalary = 2500;
  const ssnit = calculateSSNIT(sampleSalary);
  const paye = calculatePAYE(sampleSalary);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Calculator className="w-5 h-5" /> SSNIT & Tax Calculations</h2>
      <div className="mb-4">Sample Salary: <b>GHS {sampleSalary}</b></div>
      <div className="mb-2">SSNIT (13.5%): <b>GHS {ssnit}</b></div>
      <div className="mb-2">PAYE (Ghana brackets): <b>GHS {paye}</b></div>
      <div className="mb-2">Net Salary: <span className="font-bold text-green-600">GHS {sampleSalary - ssnit - paye}</span></div>
      <PayrollSummary />
    </div>
  );
}

function PayslipTab() {
  // For demo, show payslip for first employee
  const employee = { name: 'Kwame Asante', department: 'Construction', salary: 2500 };
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><FileText className="w-5 h-5" /> Payslip Generation</h2>
      <Payslip employee={employee} onClose={() => {}} />
    </div>
  );
}

function BankTransferTab() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Banknote className="w-5 h-5" /> Bank Transfer Integration</h2>
      <PaymentContent payments={mockPayments} />
    </div>
  );
}

export default function HRManagerPayrollTab() {
  const [activeTab, setActiveTab] = useState('salary');
  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              Payroll Management
            </h1>
            <p className="opacity-90 text-green-50">
              Manage salaries, deductions, taxes, payslips, and direct payments for your staff.
            </p>
          </div>
          <button
            className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download Payroll Report</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="salary" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Users className="w-4 h-4 mr-1" /> Salary Calculation
          </TabsTrigger>
          <TabsTrigger value="ssnit" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Calculator className="w-4 h-4 mr-1" /> SSNIT & Tax
          </TabsTrigger>
          <TabsTrigger value="payslip" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <FileText className="w-4 h-4 mr-1" /> Payslip
          </TabsTrigger>
          <TabsTrigger value="bank" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Banknote className="w-4 h-4 mr-1" /> Bank Transfer
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <FileText className="w-4 h-4 mr-1" /> History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="salary" className="mt-6">
          <SalaryCalculationTab />
        </TabsContent>
        <TabsContent value="ssnit" className="mt-6">
          <SSNITTaxTab />
        </TabsContent>
        <TabsContent value="payslip" className="mt-6">
          <PayslipTab />
        </TabsContent>
        <TabsContent value="bank" className="mt-6">
          <BankTransferTab />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <HistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
} 