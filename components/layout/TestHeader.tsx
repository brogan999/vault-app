"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useUser } from "@clerk/nextjs";
import { Archive, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { HERO_TEST_ID } from "@/lib/products";

/**
 * 16personalities-style top header for test pages: logo, nav links, language, Log In.
 */
export function TestHeader() {
  const t = useTranslations("test.header");
  const { isSignedIn } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainNav = [
    { label: t("personalityTest"), href: `/test/${HERO_TEST_ID}` },
    { label: t("personalityTypes"), href: "/store" },
    { label: t("store"), href: "/store" },
  ];

  const resourcesLinks = [
    { label: t("ourFramework"), href: "/our-framework" },
    { label: t("faq"), href: "/faq" },
    { label: t("knowledgeBase"), href: "/knowledge-base" },
    { label: t("privacyPolicy"), href: "/privacy" },
    { label: t("termsAndConditions"), href: "/terms" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Archive className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-bold tracking-tight text-foreground font-serif">
            The Vault
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("resources")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {resourcesLinks.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right: language, account, Log In */}
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher className="rounded-lg" />
          {isSignedIn ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          ) : (
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-lg">
                {t("logIn")}
              </Button>
            </Link>
          )}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-[80vh] py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("resources")}
          </p>
          {resourcesLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
