"use client";

import { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  Store,
  Settings,
  Sun,
  Upload,
} from "lucide-react";
import { useThemeStore } from "@/store/theme-store";

export function CommandPalette() {
  const t = useTranslations("commands");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useThemeStore();

  // Defer rendering until client-side to avoid hydration mismatch from Radix IDs
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands = [
    {
      group: t("navigation"),
      items: [
        { label: t("goToMirror"), icon: LayoutDashboard, href: "/mirror" },
        { label: t("goToVault"), icon: FolderOpen, href: "/vault" },
        { label: t("goToChat"), icon: MessageSquare, href: "/chat" },
        { label: t("goToStore"), icon: Store, href: "/store" },
        { label: t("goToSettings"), icon: Settings, href: "/settings" },
      ],
    },
    {
      group: t("actions"),
      items: [
        { label: t("uploadFile"), icon: Upload, action: "upload" },
        { label: t("toggleDarkMode"), icon: Sun, action: "toggle-theme" },
      ],
    },
  ];

  const handleSelect = (item: any) => {
    if (item.action === "toggle-theme") {
      setTheme(theme === "light" ? "dark" : "light");
    } else if (item.action === "upload") {
      router.push("/vault");
      // Trigger upload dialog would go here
    } else if (item.href) {
      router.push(item.href);
    }
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t("searchPlaceholder")} />
      <CommandList>
        <CommandEmpty>{t("noResults")}</CommandEmpty>
        {commands.map((group) => (
          <CommandGroup key={group.group} heading={group.group}>
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.label}
                  onSelect={() => handleSelect(item)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}