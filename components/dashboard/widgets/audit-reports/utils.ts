export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': 
      return 'text-green-600 bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800';
    case 'in progress': 
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    case 'pending': 
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
    default: 
      return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
  }
};

export const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'financial': return 'text-green-600 bg-green-50 dark:bg-green-900/10';
    case 'project': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/10';
    case 'compliance': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/10';
    case 'tax': return 'text-purple-600 bg-purple-50 dark:bg-purple-900/10';
    default: return 'text-gray-600 bg-gray-50 dark:bg-gray-900/10';
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}; 