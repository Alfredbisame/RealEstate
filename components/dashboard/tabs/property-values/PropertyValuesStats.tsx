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
          container: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
          label: 'text-purple-700 dark:text-purple-400',
          value: 'text-purple-600 dark:text-purple-300'
        };
      case 'appreciation':
        return {
          container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
          label: 'text-green-700 dark:text-green-400',
          value: 'text-green-600 dark:text-green-300'
        };
      case 'average':
        return {
          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
          label: 'text-blue-700 dark:text-blue-400',
          value: 'text-blue-600 dark:text-blue-300'
        };
      case 'count':
        return {
          container: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
          label: 'text-pink-700 dark:text-pink-400',
          value: 'text-pink-600 dark:text-pink-300'
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
    <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
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