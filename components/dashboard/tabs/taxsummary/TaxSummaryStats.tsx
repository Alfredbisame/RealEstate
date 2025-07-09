interface TaxStatItemProps {
  label: string;
  value: string;
  type: 'total' | 'paid' | 'due' | 'compliance';
}

function TaxStatItem({ label, value, type }: TaxStatItemProps) {
  const getStyles = () => {
    switch (type) {
      case 'total':
        return {
          container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
          label: 'text-yellow-700 dark:text-yellow-400',
          value: 'text-yellow-600 dark:text-yellow-300'
        };
      case 'paid':
        return {
          container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
          label: 'text-green-700 dark:text-green-400',
          value: 'text-green-600 dark:text-green-300'
        };
      case 'due':
        return {
          container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
          label: 'text-red-700 dark:text-red-400',
          value: 'text-red-600 dark:text-red-300'
        };
      case 'compliance':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`flex justify-between items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${styles.container}`}>
      <span className={`font-medium ${styles.label}`}>{label}</span>
      <span className={`font-semibold text-lg ${styles.value}`}>{value}</span>
    </div>
  );
}

export default function TaxSummaryStats() {
  const taxStats = [
    { label: 'Total Tax Owed', value: 'GHS 45,000', type: 'total' as const },
    { label: 'Tax Paid', value: 'GHS 30,000', type: 'paid' as const },
    { label: 'Tax Due', value: 'GHS 15,000', type: 'due' as const },
    { label: 'Compliance Status', value: 'Compliant', type: 'compliance' as const }
  ];

  return (
    <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
        Tax Summary Stats
      </h3>
      <div className="space-y-4">
        {taxStats.map((item, index) => (
          <TaxStatItem
            key={index}
            label={item.label}
            value={item.value}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
} 