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
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <img 
            src={employee.avatar} 
            alt={employee.name}
            className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-300 dark:group-hover:ring-blue-600 transition-all duration-300"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
            employee.status === 'Active' ? 'bg-blue-500' : 'bg-gray-400'
          }`}></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
          <span className="text-gray-600 dark:text-gray-400">Join Date:</span>
          <span className="text-gray-900 dark:text-white font-medium">{employee.joinDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Status:</span>
          <span className={`font-medium ${
            employee.status === 'Active' 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            {employee.status}
          </span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => onViewProfile?.(employee)}
          className="flex-1 py-2 px-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
        >
          View Profile
        </button>
        <button 
          onClick={() => onEdit?.(employee)}
          className="flex-1 py-2 px-3 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
}