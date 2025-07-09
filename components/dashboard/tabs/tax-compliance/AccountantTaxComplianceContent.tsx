import GRATaxComplianceView from './GRATaxComplianceView';
import NHILGETFLView from './NHILGETFLView';
import WithholdingTaxView from './WithholdingTaxView';
import SocialSecurityView from './SocialSecurityView';
import AuditTrailView from './AuditTrailView';

interface AccountantTaxComplianceContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantTaxComplianceContent({ activeView, onViewChange, user }: AccountantTaxComplianceContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'gra' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('gra')}
        >
          GRA Tax Compliance
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'nhil' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('nhil')}
        >
          NHIL & GETFL
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'withholding' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('withholding')}
        >
          Withholding Tax
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'ssnit' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('ssnit')}
        >
          Social Security
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'audit' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('audit')}
        >
          Audit Trail
        </button>
      </div>
      {activeView === 'gra' && <GRATaxComplianceView user={user} />}
      {activeView === 'nhil' && <NHILGETFLView user={user} />}
      {activeView === 'withholding' && <WithholdingTaxView user={user} />}
      {activeView === 'ssnit' && <SocialSecurityView user={user} />}
      {activeView === 'audit' && <AuditTrailView user={user} />}
    </div>
  );
} 