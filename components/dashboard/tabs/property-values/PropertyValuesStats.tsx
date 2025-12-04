interface PropertyValueStatItemProps {
  label: string;
  value: string;
  type: 'total' | 'appreciation' | 'average' | 'count';
}

function PropertyValueStatItem({ label, value, type }: PropertyValueStatItemProps) {
  const getStyles = () => {
    switch (type) {
      case 'total':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'appreciation':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'average':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'count':
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

export default function PropertyValuesStats() {
  const stats = [
    { label: 'Total Portfolio Value', value: 'GHS 5,200,000', type: 'total' as const },
    { label: 'Avg. Appreciation', value: '+12.5%', type: 'appreciation' as const },
    { label: 'Avg. Property Value', value: 'GHS 1,040,000', type: 'average' as const },
    { label: 'Properties Count', value: '5', type: 'count' as const }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        Property Value Stats
      </h3>
      <div className="space-y-4">
        {stats.map((item, index) => (
          <PropertyValueStatItem
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