"use client";

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

/**
 * Bottom tab navigation for mobile screens (< lg breakpoint).
 * Replaces the 72px NavRail sidebar on small devices, preserving full content width.
 */
export function MobileBottomNav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navItems = [
    { href: "/mirror" as const, label: t("mirror"), icon: LayoutDashboard },
    { href: "/vault" as const, label: t("vault"), icon: Archive },
    { href: "/chat" as const, label: t("chat"), icon: MessageSquare },
    { href: "/store" as const, label: t("store"), icon: ShoppingBag },
    { href: "/settings" as const, label: t("settings"), icon: Settings },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      aria-label="Main navigation"
    >
      {/* Safe-area bottom padding for iOS */}
      <div className="flex items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] pt-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/mirror"
              ? pathname === "/mirror"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-[10px] font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
