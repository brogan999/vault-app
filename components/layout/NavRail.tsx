"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  Store,
  Settings,
  Lock,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePrivacyStore } from "@/store/privacy-store";
import { UserButton } from "@clerk/nextjs";
import { NotificationBell } from "@/components/features/notifications/NotificationBell";
import { useState } from "react";

const navItems = [
  { href: "/mirror", label: "Mirror", icon: LayoutDashboard },
  { href: "/vault", label: "Vault", icon: FolderOpen },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/store", label: "Store", icon: Store },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function NavRail() {
  const pathname = usePathname();
  const { privacyShieldEnabled, togglePrivacyShield } = usePrivacyStore();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 h-screen border-r bg-card transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!collapsed && (
            <h1 className="text-lg font-semibold">The Vault</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>

        {/* Privacy Shield Toggle */}
        <div className="border-b p-4">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start gap-2",
              collapsed && "px-2"
            )}
            onClick={togglePrivacyShield}
          >
            <Lock
              className={cn(
                "h-4 w-4",
                privacyShieldEnabled && "fill-current"
              )}
            />
            {!collapsed && (
              <span className="text-sm">
                {privacyShieldEnabled ? "Shield On" : "Shield Off"}
              </span>
            )}
          </Button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                      collapsed && "px-2 justify-center"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {!collapsed && <span>{item.label}</span>}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Notifications & User Profile */}
        <div className="border-t p-4 space-y-3">
          <div className={cn("flex items-center", collapsed ? "justify-center" : "justify-start")}>
            <NotificationBell />
          </div>
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <UserButton afterSignOutUrl="/" />
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium">Account</p>
                <p className="text-xs text-muted-foreground">Manage settings</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}