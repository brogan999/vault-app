"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Archive } from "lucide-react";
import { HERO_TEST_ID } from "@/lib/products";

/**
 * Footer for the app (protected and test pages). Matches landing footer content
 * so navigation and footer are retained across test and app.
 */
export function AppFooter() {
  const t = useTranslations("landing.footer");
  const tc = useTranslations("common");

  const footerColumns = [
    {
      title: t("products"),
      links: [
        { label: t("premiumAssessments"), href: "/pricing" },
        { label: t("aiChat"), href: "/sign-up" },
        { label: t("voiceJournals"), href: "/sign-up" },
        { label: t("testimonials"), href: "/#testimonials" },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("personalityTest"), href: `/test/${HERO_TEST_ID}` },
        { label: t("personalityTypes"), href: "/store" },
        { label: t("ourFramework"), href: "/our-framework" },
      ],
    },
    {
      title: t("help"),
      links: [
        { label: t("contactUs"), href: "/contact" },
        { label: t("faq"), href: "/faq" },
        { label: t("knowledgeBase"), href: "/knowledge-base" },
        { label: t("privacyPolicy"), href: "/privacy" },
        { label: t("termsAndConditions"), href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/60 bg-card shrink-0">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Archive className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground font-serif">
                {tc("theVault")}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              {t("tagline")}
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground">{col.title}</p>
              <nav className="mt-3 flex flex-col gap-2.5" aria-label={col.title}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">{t("copyright")}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("termsAndConditions")}
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
