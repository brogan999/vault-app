import { NavRail } from "@/components/layout/NavRail";
import { MainStage } from "@/components/layout/MainStage";
import { SyncUserPreferences } from "@/components/providers/sync-user-preferences";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SyncUserPreferences />
      <NavRail />
      <MainStage>{children}</MainStage>
    </div>
  );
}