import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientCommunicationView from './ClientCommunicationView';
import ClientViewingsView from './ClientViewingsView';
import ClientPreferencesView from './ClientPreferencesView';
import ClientDocumentsView from './ClientDocumentsView';
import ClientReferralsView from './ClientReferralsView';
import ClientBudgetView from './ClientBudgetView';

interface ClientsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ClientsContent({ activeView, onViewChange }: ClientsContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="communication" className="text-sm">
            Communication
          </TabsTrigger>
          <TabsTrigger value="viewings" className="text-sm">
            Viewings
          </TabsTrigger>
          <TabsTrigger value="preferences" className="text-sm">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="documents" className="text-sm">
            Documents
          </TabsTrigger>
          <TabsTrigger value="referrals" className="text-sm">
            Referrals
          </TabsTrigger>
          <TabsTrigger value="budget" className="text-sm">
            Budget Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="communication" className="space-y-4">
          <ClientCommunicationView />
        </TabsContent>

        <TabsContent value="viewings" className="space-y-4">
          <ClientViewingsView />
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <ClientPreferencesView />
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <ClientDocumentsView />
        </TabsContent>

        <TabsContent value="referrals" className="space-y-4">
          <ClientReferralsView />
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <ClientBudgetView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 