import { PublicHeader } from "@/components/layout/PublicHeader";
import { AppFooter } from "@/components/layout/AppFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}