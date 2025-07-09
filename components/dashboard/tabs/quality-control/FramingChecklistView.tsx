export default function FramingChecklistView() {
  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
      <h3 className="text-lg font-bold mb-2">Framing Stage Checklist</h3>
      <ul className="list-disc pl-6 text-sm">
        <li>Wall layout verified</li>
        <li>Structural framing inspected</li>
        <li>Openings for doors/windows checked</li>
        <li>Anchoring and bracing confirmed</li>
        <li>Roof trusses installed</li>
        <li>Sheathing and nailing checked</li>
      </ul>
    </div>
  );
} 