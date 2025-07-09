import React from 'react';

const services = [
  { role: 'Architect', fee: 12000 },
  { role: 'Structural Engineer', fee: 9000 },
  { role: 'Surveyor', fee: 5000 },
  { role: 'Legal Advisor', fee: 4000 },
  { role: 'Project Manager', fee: 10000 },
];

const totalFee = services.reduce((sum, s) => sum + s.fee, 0);

export default function ProfessionalServicesView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Professional Services</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Service</th>
              <th className="px-4 py-2 font-semibold">Fee ($)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{s.role}</td>
                <td className="px-4 py-2">{s.fee.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2">Total</td>
              <td className="px-4 py-2">${totalFee.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
} 