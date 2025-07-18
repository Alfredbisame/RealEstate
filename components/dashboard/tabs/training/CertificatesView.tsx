import { Download } from 'lucide-react';

interface Certificate {
  id: string;
  employee: string;
  program: string;
  date: string;
  certificate: string;
}

interface CertificatesViewProps {
  certificates: Certificate[];
}

export default function CertificatesView({ certificates }: CertificatesViewProps) {
  const handleDownload = (cert: Certificate) => {
    // TODO: Implement certificate download
    alert(`Download certificate for ${cert.employee}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Certificates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Employee</th>
              <th className="px-4 py-2 text-left">Program</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Certificate</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{cert.employee}</td>
                <td className="px-4 py-2">{cert.program}</td>
                <td className="px-4 py-2">{cert.date}</td>
                <td className="px-4 py-2">{cert.certificate}</td>
                <td className="px-4 py-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
                    onClick={() => handleDownload(cert)}
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
