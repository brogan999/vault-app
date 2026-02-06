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
import { useRouter } from "next/navigation";
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

const commands = [
  {
    group: "Navigation",
    items: [
      { label: "Go to Mirror", icon: LayoutDashboard, href: "/mirror" },
      { label: "Go to Vault", icon: FolderOpen, href: "/vault" },
      { label: "Go to Chat", icon: MessageSquare, href: "/chat" },
      { label: "Go to Store", icon: Store, href: "/store" },
      { label: "Go to Settings", icon: Settings, href: "/settings" },
    ],
  },
  {
    group: "Actions",
    items: [
      { label: "Upload File", icon: Upload, action: "upload" },
      { label: "Toggle Dark Mode", icon: Sun, action: "toggle-theme" },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useThemeStore();

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

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
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