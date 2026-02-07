import { NavRail } from "@/components/layout/NavRail";
import { MainStage } from "@/components/layout/MainStage";
import { SyncUserPreferences } from "@/components/providers/sync-user-preferences";
import { ConsentGate } from "@/components/features/consent/ConsentGate";
import { getSupabaseUser } from "@/lib/clerk/utils";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSupabaseUser();

  if (!user) {
    return (
      <div className="flex h-screen">
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="px-4 py-6 lg:px-8 lg:py-8 max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <SyncUserPreferences />
      <ConsentGate />
      <NavRail />
      <MainStage>{children}</MainStage>
    </div>
  );
}