interface PipelineStage {
  stage: string;
  count: number;
}

interface CandidatePipelineViewProps {
  pipeline: PipelineStage[];
}

export default function CandidatePipelineView({ pipeline }: CandidatePipelineViewProps) {
  // Mock analytics
  const totalCandidates = pipeline.reduce((sum, s) => sum + s.count, 0);
  const avgTimeToHire = '18 days'; // Mock value
  const conversionRate = ((pipeline.find(s => s.stage === 'Hired')?.count || 0) / (pipeline[0]?.count || 1) * 100).toFixed(1) + '%';

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Candidate Pipeline</h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-stretch">
        {pipeline.map((stage, idx) => (
          <div
            key={stage.stage}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow p-4 min-w-[120px] border border-gray-100 dark:border-gray-800"
          >
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">{stage.count}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stage.stage}</span>
            {idx < pipeline.length - 1 && (
              <span className="hidden md:block w-8 h-1 bg-blue-400 my-2 rounded-full"></span>
            )}
          </div>
        ))}
      </div>
      {/* Analytics Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalCandidates}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Total Candidates</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{avgTimeToHire}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Avg. Time to Hire</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{conversionRate}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Offer Conversion Rate</div>
        </div>
      </div>
    </div>
  );
} 