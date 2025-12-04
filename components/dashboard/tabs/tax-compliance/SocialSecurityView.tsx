const ssnitContributions = [
  { id: 1, employee: 'Alfred Fianyo', salary: 5000, employeeContribution: 250, employerContribution: 250, total: 500, due: '2024-07-15', status: 'Paid' },
  { id: 2, employee: 'Alfreda Fianyo', salary: 6000, employeeContribution: 300, employerContribution: 300, total: 600, due: '2024-07-15', status: 'Paid' },
];

export default function SocialSecurityView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Social Security Integration</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Employee</th>
            <th className="px-4 py-2 text-left">Salary (GHS)</th>
            <th className="px-4 py-2 text-left">Employee Contribution</th>
            <th className="px-4 py-2 text-left">Employer Contribution</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {ssnitContributions.map(contribution => (
            <tr key={contribution.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{contribution.employee}</td>
              <td className="px-4 py-2">{contribution.salary.toLocaleString()}</td>
              <td className="px-4 py-2">{contribution.employeeContribution.toLocaleString()}</td>
              <td className="px-4 py-2">{contribution.employerContribution.toLocaleString()}</td>
              <td className="px-4 py-2">{contribution.total.toLocaleString()}</td>
              <td className="px-4 py-2">{contribution.due}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${contribution.status === 'Paid' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'}`}>{contribution.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}