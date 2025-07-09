import { useState } from 'react';

export default function NewPaymentView({ user }: { user: any }) {
  const [payer, setPayer] = useState('');
  const [method, setMethod] = useState('PayStack');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Successful');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">New Payment</h3>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block font-medium mb-1">Payer</label>
          <input type="text" value={payer} onChange={e => setPayer(e.target.value)} className="px-3 py-2 rounded border w-full" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Method</label>
          <select value={method} onChange={e => setMethod(e.target.value)} className="px-3 py-2 rounded border w-full">
            <option value="PayStack">PayStack</option>
            <option value="MTN MoMo">MTN MoMo</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
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
            <option value="Successful">Successful</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded font-semibold">Create Payment</button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-bold text-lg mb-2">Payment Created (not saved)</div>
          <div className="text-sm text-green-700 dark:text-green-200">This is a demo. No backend integration.</div>
        </div>
      )}
    </div>
  );
} 