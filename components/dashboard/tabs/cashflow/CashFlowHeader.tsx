export default function CashFlowHeader() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Cash Flow Analysis</h2>
        <p className="text-white/80 text-sm">Track your quarterly and monthly cash flow performance</p>
      </div>
      <div className="mt-4 md:mt-0">
        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm">Last updated: Q2 2024</span>
      </div>
    </div>
  );
} 