const entries = [
  { id: 1, date: '2024-07-01', description: 'Property Sale', debit: 120000, credit: 0 },
  { id: 2, date: '2024-07-02', description: 'Salary Payment', debit: 0, credit: 30000 },
  { id: 3, date: '2024-07-03', description: 'Rent Received', debit: 45000, credit: 0 },
];

export default function JournalEntriesView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Journal Entries</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Debit (GHS)</th>
            <th className="px-4 py-2 text-left">Credit (GHS)</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{entry.date}</td>
              <td className="px-4 py-2">{entry.description}</td>
              <td className="px-4 py-2">{entry.debit ? entry.debit.toLocaleString() : '-'}</td>
              <td className="px-4 py-2">{entry.credit ? entry.credit.toLocaleString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 