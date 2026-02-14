import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { KeyboardShortcutsProvider } from "@/components/providers/keyboard-shortcuts";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Toaster } from "sonner";
import { routing } from "@/i18n/routing";
import { getClerkLocalization } from "@/i18n/clerk";
import { JsonLd, organizationSchema } from "@/components/seo/json-ld";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { CookieBanner } from "@/components/features/consent/CookieBanner";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("title");
  const description = t("description");

  // Build canonical + locale alternate URLs
  const isDefault = locale === routing.defaultLocale;
  const canonical = isDefault ? BASE_URL : `${BASE_URL}/${locale}`;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] =
      loc === routing.defaultLocale ? BASE_URL : `${BASE_URL}/${loc}`;
  }
  languages["x-default"] = BASE_URL;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Anima by Bald Labs, Inc",
      type: "website",
      locale: locale.replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const clerkLocalization = await getClerkLocalization(locale);

  return (
    <ClerkProvider localization={clerkLocalization}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <PostHogProvider>
          <QueryProvider>
            <ThemeProvider>
              <KeyboardShortcutsProvider>
                <JsonLd data={organizationSchema()} />
                {children}
                <CookieBanner />
                <CommandPalette />
                <Toaster position="top-right" />
              </KeyboardShortcutsProvider>
            </ThemeProvider>
          </QueryProvider>
        </PostHogProvider>
      </NextIntlClientProvider>
    </ClerkProvider>
  );
}
