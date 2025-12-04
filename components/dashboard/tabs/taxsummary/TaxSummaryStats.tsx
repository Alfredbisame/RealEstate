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
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'paid':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'due':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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