'use client';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  salary: string;
  status: string;
  joinDate: string;
  avatar: string;
}

interface EmployeeCardProps {
  employee: Employee;
  onViewProfile?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
}

export default function EmployeeCard({ employee, onViewProfile, onEdit }: EmployeeCardProps) {
  return (
    <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group backdrop-blur-sm">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <img 
            src={employee.avatar} 
            alt={employee.name}
            className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-pink-300 dark:group-hover:ring-pink-600 transition-all duration-300"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
            employee.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
            {employee.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{employee.position}</p>
        </div>
      </div>
      
      <div className="space-y-2 text-sm mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Department:</span>
          <span className="text-gray-900 dark:text-white font-medium">{employee.department}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Salary:</span>
          <span className="text-gray-900 dark:text-white font-medium">{employee.salary}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Status:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            employee.status === 'Active' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
          }`}>
            {employee.status}
          </span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={() => onViewProfile?.(employee)}
          className="flex-1 px-3 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium hover:shadow-md transform hover:scale-105"
        >
          View Profile
        </button>
        <button 
          onClick={() => onEdit?.(employee)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm hover:border-pink-300 dark:hover:border-pink-600 hover:text-pink-600 dark:hover:text-pink-400"
        >
          Edit
        </button>
      </div>
    </div>
  );
} 