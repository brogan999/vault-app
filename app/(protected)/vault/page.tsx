import { DropZone } from "@/components/features/vault/DropZone";
import { FileTree } from "@/components/features/vault/FileTree";
import { IntegrationsPanel } from "@/components/features/vault/IntegrationsPanel";
import { ContextSidebar } from "@/components/layout/ContextSidebar";

export default function VaultPage() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Vault</h1>
          <p className="text-muted-foreground">
            Upload and manage your psychological data
          </p>
        </div>

        <DropZone />

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Files</h2>
          <FileTree />
        </div>
      </div>

      <ContextSidebar title="Integrations">
        <IntegrationsPanel />
      </ContextSidebar>
    </div>
  );
}