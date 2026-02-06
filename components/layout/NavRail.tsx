"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Archive,
  MessageSquare,
  ShoppingBag,
  Settings,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { NotificationBell } from "@/components/features/notifications/NotificationBell";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function NavRail() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  // Defer Clerk UserButton to avoid hydration mismatch (server renders
  // placeholder HTML that differs from Clerk's client-side widget).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { href: "/mirror" as const, label: t("mirror"), icon: LayoutDashboard },
    { href: "/vault" as const, label: t("vault"), icon: Archive },
    { href: "/chat" as const, label: t("chat"), icon: MessageSquare },
    { href: "/store" as const, label: t("store"), icon: ShoppingBag },
    { href: "/settings" as const, label: t("settings"), icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[72px] flex-col items-center justify-between border-r border-sidebar-border bg-sidebar py-6 lg:w-[220px]">
      {/* Top: Logo + Nav */}
      <div className="flex flex-col items-center gap-8 lg:items-start lg:px-4">
        {/* Logo */}
        <Link href="/mirror" className="flex items-center gap-2 px-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Archive className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden text-lg font-bold tracking-tight text-foreground font-serif lg:block">
            {tc("theVault")}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-1 lg:w-full lg:items-stretch">
          {navItems.map((item) => {
            const isActive =
              item.href === "/mirror"
                ? pathname === "/mirror"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group flex items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors lg:justify-start",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    isActive ? "text-primary" : ""
                  )}
                />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Language + Notifications + User */}
      <div className="flex flex-col items-center gap-3 lg:w-full lg:px-4">
        <div className="flex items-center justify-center lg:w-full lg:justify-start lg:px-2">
          <LanguageSwitcher compact />
        </div>
        <div className="flex items-center justify-center lg:w-full lg:justify-start lg:px-2">
          <NotificationBell />
        </div>
        <div className="flex items-center gap-3 rounded-xl px-2 py-2 lg:w-full">
          {mounted ? (
            <>
              <UserButton afterSignOutUrl="/" />
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-foreground">
                  {t("account")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("manageSettings")}
                </p>
              </div>
            </>
          ) : (
            /* Placeholder matching the UserButton's size to avoid layout shift */
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
          )}
        </div>
      </div>
    </aside>
  );
}
