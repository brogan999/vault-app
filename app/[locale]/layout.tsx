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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
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
        <QueryProvider>
          <ThemeProvider>
            <KeyboardShortcutsProvider>
              {children}
              <CommandPalette />
              <Toaster position="top-right" />
            </KeyboardShortcutsProvider>
          </ThemeProvider>
        </QueryProvider>
      </NextIntlClientProvider>
    </ClerkProvider>
  );
}
