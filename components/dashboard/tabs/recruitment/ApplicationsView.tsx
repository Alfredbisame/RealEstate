import { Eye, UploadCloud, FileText, Download } from 'lucide-react';
import { useState } from 'react';

interface Application {
  id: string;
  name: string;
  position: string;
  status: string;
  applied: string;
}

interface ApplicationsViewProps {
  applications: Application[];
}

interface UploadedDoc {
  name: string;
  url: string;
}

export default function ApplicationsView({ applications }: ApplicationsViewProps) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, UploadedDoc[]>>({});
  const [offerLetters, setOfferLetters] = useState<Record<string, { name: string; url: string }>>({});

  const handleReview = (application: Application) => {
    // TODO: Implement review application functionality
    alert(`Reviewing application for ${application.name}`);
  };

  const handleFileChange = (appId: string, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setUploadedDocs((prev) => ({
      ...prev,
      [appId]: [...(prev[appId] || []), { name: file.name, url }],
    }));
  };

  const handleGenerateOffer = (app: Application) => {
    // Simulate offer letter generation as a text file
    const content = `Dear ${app.name},

We are pleased to offer you the position of ${app.position} at our company.

Best regards,
HR Department`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    setOfferLetters((prev) => ({ ...prev, [app.id]: { name: `${app.name}-OfferLetter.txt`, url } }));
    alert(`Offer letter generated for ${app.name}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Candidate</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Applied</th>
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">Documents</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t border-gray-200 dark:border-gray-700 align-top">
                <td className="px-4 py-2 font-medium">{app.name}</td>
                <td className="px-4 py-2">{app.position}</td>
                <td className="px-4 py-2">
                  <span className={
                    app.status === 'Interview Scheduled' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                  }>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-2">{app.applied}</td>
                <td className="px-4 py-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all mb-2"
                    onClick={() => handleReview(app)}
                  >
                    <Eye className="w-4 h-4" /> Review
                  </button>
                  <label className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all cursor-pointer mb-2">
                    <UploadCloud className="w-4 h-4" /> Upload
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg"
                      className="hidden"
                      onChange={e => handleFileChange(app.id, e.target.files)}
                    />
                  </label>
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                    onClick={() => handleGenerateOffer(app)}
                  >
                    <FileText className="w-4 h-4" /> Generate Offer
                  </button>
                  {offerLetters[app.id] && (
                    <a
                      href={offerLetters[app.id].url}
                      download={offerLetters[app.id].name}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-all mt-2"
                    >
                      <Download className="w-4 h-4" /> Download Offer
                    </a>
                  )}
                </td>
                <td className="px-4 py-2">
                  <ul className="space-y-1">
                    {(uploadedDocs[app.id] || []).map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span>{doc.name}</span>
                        <a href={doc.url} download={doc.name} className="ml-1 text-blue-600 hover:underline" title="Download">
                          <Download className="w-4 h-4 inline" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 