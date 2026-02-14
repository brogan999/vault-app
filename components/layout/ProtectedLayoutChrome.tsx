"use client";

import { usePathname } from "next/navigation";
import { NavRail } from "@/components/layout/NavRail";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { MainStage } from "@/components/layout/MainStage";
import { TestHeader } from "@/components/layout/TestHeader";
import { AppFooter } from "@/components/layout/AppFooter";

/**
 * Renders the correct chrome for protected routes:
 * - On /test/*: 16p-style header (TestHeader) + main + footer (no sidebar).
 * - On /chat when signed in: NavRail + main + AppFooter.
 * - Otherwise when signed in: NavRail + MainStage + footer.
 * - When not signed in: main + footer only.
 */
export function ProtectedLayoutChrome({
  children,
  hasUser,
}: {
  children: React.ReactNode;
  hasUser: boolean;
}) {
  const pathname = usePathname() ?? "";
  const isTestRoute = pathname.includes("/test");

  if (isTestRoute) {
    return (
      <div className="flex min-h-screen flex-col">
        <TestHeader />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="px-4 py-6 lg:px-8 lg:py-8 max-w-[1200px] mx-auto">
            {children}
          </div>
          <AppFooter />
        </main>
      </div>
    );
  }

  const isChatRoute = pathname.includes("/chat");

  if (hasUser && isChatRoute) {
    return (
      <div className="flex h-screen">
        <NavRail />
        <div className="flex flex-1 flex-col min-w-0 lg:ml-[220px] min-h-0">
          <main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-background pb-16 lg:pb-0">
            {children}
          </main>
          <AppFooter />
        </div>
        <MobileBottomNav />
      </div>
    );
  }

  if (hasUser) {
    return (
      <div className="flex h-screen">
        <NavRail />
        <div className="flex flex-1 flex-col min-w-0">
          <MainStage footer={<AppFooter />}>{children}</MainStage>
        </div>
        <MobileBottomNav />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="px-4 py-6 lg:px-8 lg:py-8 max-w-[1200px] mx-auto">
          {children}
        </div>
        <AppFooter />
      </main>
    </div>
  );
}
