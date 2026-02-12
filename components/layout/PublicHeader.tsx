"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Archive, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemePaletteSwitcher } from "@/components/landing/ThemePaletteSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HERO_TEST_ID } from "@/lib/products";

/**
 * Header for public pages. Includes Products and Resources dropdowns, theme/language, auth.
 */
export function PublicHeader() {
  const tNav = useTranslations("landing.navbar");
  const tFooter = useTranslations("landing.footer");
  const tc = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const productsLinks = [
    { label: tFooter("personalityTest"), href: `/test/${HERO_TEST_ID}` },
    { label: tFooter("premiumAssessments"), href: "/pricing" },
    { label: tFooter("aiChat"), href: "/sign-up" },
  ];

  const resourcesLinks = [
    { label: tNav("ourFramework"), href: "/our-framework" },
    { label: tFooter("knowledgeBase"), href: "/knowledge-base" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Archive className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground font-serif">
            {tc("theVault")}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {tFooter("products")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {productsLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {tFooter("resources")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {resourcesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemePaletteSwitcher />
          <LanguageSwitcher className="rounded-xl" />
          <Button variant="ghost" className="rounded-xl text-sm font-medium" asChild>
            <Link href="/sign-in">{tNav("logIn")}</Link>
          </Button>
          <Button className="rounded-xl font-semibold" asChild>
            <Link href="/sign-up">{tNav("getStartedFree")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? tNav("closeMenu") : tNav("openMenu")}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[320px] py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4" aria-label="Main navigation">
          <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {tFooter("products")}
          </p>
          {productsLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {tFooter("resources")}
          </p>
          {resourcesLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2">
              <span className="text-sm font-medium text-muted-foreground">
                {tNav("language")}
              </span>
              <LanguageSwitcher className="rounded-xl" />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2">
              <span className="text-sm font-medium text-muted-foreground">
                {tNav("themeAndColour")}
              </span>
              <ThemePaletteSwitcher />
            </div>
            <Button variant="outline" className="w-full rounded-xl bg-transparent" asChild>
              <Link href="/sign-in">{tNav("logIn")}</Link>
            </Button>
            <Button className="w-full rounded-xl font-semibold" asChild>
              <Link href="/sign-up">{tNav("getStartedFree")}</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
