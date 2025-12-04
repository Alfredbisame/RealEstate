interface CashFlowItemProps {
  label: string;
  amount: string;
  type: 'inflow' | 'outflow' | 'net';
}

function CashFlowItem({ label, amount, type }: CashFlowItemProps) {
  const getStyles = () => {
    switch (type) {
      case 'inflow':
        return {
          container: 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800',
          label: 'text-green-700 dark:text-green-400',
          amount: 'text-green-600 dark:text-green-300'
        };
      case 'outflow':
        return {
          container: 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800',
          label: 'text-red-700 dark:text-red-400',
          amount: 'text-red-600 dark:text-red-300'
        };
      case 'net':
        return {
          container: 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          amount: 'text-blue-600 dark:text-blue-300'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`flex justify-between items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${styles.container}`}>
      <span className={`font-medium ${styles.label}`}>{label}</span>
      <span className={`font-semibold text-lg ${styles.amount}`}>{amount}</span>
    </div>
  );
}

export default function CashFlowStats() {
  const cashFlowData = [
    { label: 'Total Inflow', amount: 'GHS 195,000', type: 'inflow' as const },
    { label: 'Total Outflow', amount: 'GHS 135,000', type: 'outflow' as const },
    { label: 'Net Cash Flow', amount: 'GHS 60,000', type: 'net' as const }
  ];

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        Cash Flow Summary
      </h3>
      <div className="space-y-4">
        {cashFlowData.map((item, index) => (
          <CashFlowItem
            key={index}
            label={item.label}
            amount={item.amount}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
} 