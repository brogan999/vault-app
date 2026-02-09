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
  LogOut,
  UserCircle,
} from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";
import { NotificationBell } from "@/components/features/notifications/NotificationBell";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemePaletteSwitcher } from "@/components/landing/ThemePaletteSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function AccountMenu() {
  const t = useTranslations("nav");
  const { user } = useUser();
  const { signOut } = useClerk();
  const emailChar = user?.primaryEmailAddress?.emailAddress?.[0]?.toUpperCase();
  const initials = user?.firstName && user?.lastName
    ? `${user.firstName[0]}${user.lastName[0]}`
    : emailChar ?? "?";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-2 py-2 w-full min-w-0 hover:bg-sidebar-accent/50 transition-colors lg:px-3 text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={t("account")}
        >
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarImage src={user?.imageUrl} alt="" />
            <AvatarFallback className="bg-muted text-muted-foreground text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden lg:flex flex-col min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">
              {t("account")}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {t("manageSettings")}
            </span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="right" className="min-w-[11rem]">
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
            <UserCircle className="h-4 w-4" />
            {t("manageAccount")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          variant="destructive"
          onClick={() => signOut({ redirectUrl: "/" })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          {t("signOut")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function NavRail() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  // Defer Clerk to avoid hydration mismatch (server renders placeholder that differs from client).
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

      {/* Bottom: Theme + Language + Notifications + User */}
      <div className="flex flex-col items-center gap-3 lg:w-full lg:px-4">
        <div className="flex items-center justify-center lg:w-full lg:justify-start lg:px-2">
          <ThemePaletteSwitcher />
        </div>
        <div className="flex items-center justify-center lg:w-full lg:justify-start lg:px-2">
          <LanguageSwitcher compact />
        </div>
        <div className="flex items-center justify-center lg:w-full lg:justify-start lg:px-2">
          <NotificationBell />
        </div>
        <div className="flex items-center gap-3 rounded-xl px-2 py-2 lg:w-full">
          {mounted ? (
            <AccountMenu />
          ) : (
            /* Placeholder matching the avatar size to avoid layout shift */
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
          )}
        </div>
      </div>
    </aside>
  );
}
