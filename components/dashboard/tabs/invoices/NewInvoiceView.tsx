import { useState } from 'react';

export default function NewInvoiceView({ user }: { user: any }) {
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Outstanding');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">New Invoice</h3>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block font-medium mb-1">Client</label>
          <input type="text" value={client} onChange={e => setClient(e.target.value)} className="px-3 py-2 rounded border w-full" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Project</label>
          <input type="text" value={project} onChange={e => setProject(e.target.value)} className="px-3 py-2 rounded border w-full" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Amount (GHS)</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="px-3 py-2 rounded border w-full" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="px-3 py-2 rounded border w-full" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} className="px-3 py-2 rounded border w-full">
            <option value="Paid">Paid</option>
            <option value="Outstanding">Outstanding</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded font-semibold">Create Invoice</button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-bold text-lg mb-2">Invoice Created (not saved)</div>
          <div className="text-sm text-green-700 dark:text-green-200">This is a demo. No backend integration.</div>
        </div>
      )}
    </div>
  );
} 