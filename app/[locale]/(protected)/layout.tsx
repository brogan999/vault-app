import { ProtectedLayoutChrome } from "@/components/layout/ProtectedLayoutChrome";
import { SyncUserPreferences } from "@/components/providers/sync-user-preferences";
import { ConsentGate } from "@/components/features/consent/ConsentGate";
import { getSupabaseUser } from "@/lib/clerk/utils";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSupabaseUser();

  return (
    <>
      {user && <SyncUserPreferences />}
      {user && <ConsentGate />}
      <ProtectedLayoutChrome hasUser={!!user}>
        {children}
      </ProtectedLayoutChrome>
    </>
  );
}