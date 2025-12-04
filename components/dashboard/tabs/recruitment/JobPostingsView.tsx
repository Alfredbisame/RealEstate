import { Plus } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  status: string;
  posted: string;
}

interface JobPostingsViewProps {
  jobPostings: JobPosting[];
}

export default function JobPostingsView({ jobPostings }: JobPostingsViewProps) {
  const handleAddJob = () => {
    // TODO: Implement add job posting functionality
    alert('Add Job Posting clicked');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Job Postings</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          onClick={handleAddJob}
        >
          <Plus className="w-4 h-4" /> Add Job
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Posted</th>
            </tr>
          </thead>
          <tbody>
            {jobPostings.map((job) => (
              <tr key={job.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{job.title}</td>
                <td className="px-4 py-2">{job.department}</td>
                <td className="px-4 py-2">
                  <span className={
                    job.status === 'Open' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                  }>
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-2">{job.posted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
