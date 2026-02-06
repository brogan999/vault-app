"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, localeLabels, localeFlags } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  /** Show a compact icon-only trigger (for NavRail) vs full button */
  compact?: boolean;
  className?: string;
}

export function LanguageSwitcher({
  compact = false,
  className,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={compact ? "icon" : "sm"}
          className={cn(
            "gap-2",
            isPending && "opacity-50 pointer-events-none",
            className
          )}
          aria-label="Change language"
        >
          {compact ? (
            <Globe className="h-4 w-4" />
          ) : (
            <>
              <Globe className="h-4 w-4" />
              <span className="text-xs">
                {localeFlags[locale]} {localeLabels[locale]}
              </span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              "gap-2 cursor-pointer",
              loc === locale && "bg-accent font-medium"
            )}
          >
            <span>{localeFlags[loc]}</span>
            <span>{localeLabels[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
