"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useUser } from "@clerk/nextjs";
import { Archive, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemePaletteSwitcher } from "@/components/landing/ThemePaletteSwitcher";
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
 * Header for test pages. Matches PublicHeader: Products and Resources dropdowns,
 * language, account / Log In. Same link structure as public header and footer.
 */
export function TestHeader() {
  const t = useTranslations("test.header");
  const tc = useTranslations("common");
  const tNav = useTranslations("landing.navbar");
  const tFooter = useTranslations("landing.footer");
  const { isSignedIn } = useUser();
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Archive className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground font-serif">
            {tc("theVault")}
          </span>
        </Link>

        {/* Desktop nav: Products + Resources dropdowns (aligned with PublicHeader) */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
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

        {/* Right: theme, language, account, Log In */}
        <div className="flex shrink-0 items-center gap-3">
          <ThemePaletteSwitcher />
          <LanguageSwitcher className="rounded-xl" />
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
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-xl">
                {t("logIn")}
              </Button>
            </Link>
          )}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? tNav("closeMenu") : tNav("openMenu")}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: Products + Resources (aligned with PublicHeader) */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[80vh] py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4">
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
        </nav>
      </div>
    </header>
  );
}
