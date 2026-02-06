"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArrowRight,
  Brain,
  MessageSquare,
  Mic,
  BarChart3,
  Shield,
  Sparkles,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";
import { ConsentDialog } from "@/components/features/consent/ConsentDialog";

/* ── Navbar ──────────────────────────────────────────────────────── */

function Navbar() {
  const t = useTranslations("landing.navbar");
  const tc = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("features"), href: "#features" },
    { label: t("testimonials"), href: "#testimonials" },
    { label: t("pricing"), href: "#pricing" },
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
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            className="rounded-xl text-sm font-medium"
            asChild
          >
            <Link href="/sign-in">{t("logIn")}</Link>
          </Button>
          <Button className="rounded-xl font-semibold" asChild>
            <Link href="/sign-up">{t("getStartedFree")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-72 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full rounded-xl bg-transparent"
              asChild
            >
              <Link href="/sign-in">{t("logIn")}</Link>
            </Button>
            <Button className="w-full rounded-xl font-semibold" asChild>
              <Link href="/sign-up">{t("getStartedFree")}</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */

function Hero() {
  const t = useTranslations("landing.hero");
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [showConsentDialog, setShowConsentDialog] = useState(false);

  const handlePrimaryCta = () => {
    if (isSignedIn) {
      router.push("/sign-up");
    } else {
      setShowConsentDialog(true);
    }
  };

  const handlePreSignupConsent = () => {
    setShowConsentDialog(false);
    router.push("/sign-up");
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
          style={{ backgroundColor: "hsl(160, 84%, 30%)" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {t("badge")}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-serif leading-tight text-balance md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isSignedIn ? (
              <Button
                size="lg"
                className="h-12 rounded-xl px-8 text-base font-semibold gap-2"
                asChild
              >
                <Link href="/sign-up">
                  {t("cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="h-12 rounded-xl px-8 text-base font-semibold gap-2"
                onClick={handlePrimaryCta}
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl px-8 text-base font-semibold bg-transparent"
              asChild
            >
              <a href="#features">{t("secondaryCta")}</a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            {t("disclaimer")}
          </p>
        </div>
      </div>

      <ConsentDialog
        open={showConsentDialog}
        mode="preSignup"
        onPreSignupConsent={handlePreSignupConsent}
      />
    </section>
  );
}

/* ── Social Proof ────────────────────────────────────────────────── */

function SocialProof() {
  const t = useTranslations("landing.socialProof");

  const stats = [
    { value: "91K+", label: t("testsToday") },
    { value: "192M+", label: t("testsUS") },
    { value: "1.4B+", label: t("totalTests") },
    { value: "91.2%", label: t("ratedAccurate") },
  ];

  return (
    <section className="border-y border-border/60 bg-card py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary font-serif lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features ────────────────────────────────────────────────────── */

function Features() {
  const t = useTranslations("landing.features");

  const features = [
    {
      icon: Brain,
      title: t("personalityTests"),
      description: t("personalityTestsDesc"),
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.08)",
    },
    {
      icon: MessageSquare,
      title: t("aiTherapistChat"),
      description: t("aiTherapistChatDesc"),
      color: "#0d9488",
      bgColor: "rgba(13, 148, 136, 0.08)",
    },
    {
      icon: Archive,
      title: t("secureFileVault"),
      description: t("secureFileVaultDesc"),
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.08)",
    },
    {
      icon: Mic,
      title: t("voiceJournals"),
      description: t("voiceJournalsDesc"),
      color: "#d97706",
      bgColor: "rgba(217, 119, 6, 0.08)",
    },
    {
      icon: BarChart3,
      title: t("growthTracking"),
      description: t("growthTrackingDesc"),
      color: "#e11d48",
      bgColor: "rgba(225, 29, 72, 0.08)",
    },
    {
      icon: Shield,
      title: t("privateByDefault"),
      description: t("privateByDefaultDesc"),
      color: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.08)",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-0 shadow-sm rounded-2xl transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <feature.icon
                    className="h-6 w-6"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground font-serif">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Feature Showcase ────────────────────────────────────────────── */

function PersonalityPreview() {
  const t = useTranslations("landing.showcase");

  const traits = [
    { name: t("openness"), score: 82, color: "#8b5cf6" },
    { name: t("conscientiousness"), score: 68, color: "#0d9488" },
    { name: t("extraversion"), score: 45, color: "#d97706" },
    { name: t("agreeableness"), score: 74, color: "#059669" },
    { name: t("neuroticism"), score: 38, color: "#e11d48" },
  ];

  return (
    <div className="bg-card p-6 lg:p-8">
      <p className="text-sm font-semibold text-muted-foreground mb-5">
        {t("big5Results")}
      </p>
      <div className="flex flex-col gap-4">
        {traits.map((trait) => (
          <div key={trait.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">
                {trait.name}
              </span>
              <span
                className="text-sm font-bold font-serif"
                style={{ color: trait.color }}
              >
                {trait.score}%
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${trait.score}%`,
                  backgroundColor: trait.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatPreview() {
  const t = useTranslations("landing.showcase");

  return (
    <div className="bg-card p-6 lg:p-8">
      <p className="text-sm font-semibold text-muted-foreground mb-5">
        {t("aiConversation")}
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-br-md bg-primary px-4 py-3">
            <p className="text-sm text-primary-foreground">
              {t("sampleQuestion")}
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-3">
            <p className="text-sm text-foreground leading-relaxed">
              {t("sampleAnswer1")}
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-3">
            <p className="text-sm text-foreground leading-relaxed">
              {t("sampleAnswer2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureShowcase() {
  const t = useTranslations("landing.showcase");

  return (
    <section className="bg-card py-20 lg:py-28 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col gap-20 lg:gap-28">
          {/* Personality Tests showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("personalityTestsLabel")}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-foreground font-serif text-balance lg:text-3xl">
                {t("personalityTestsTitle")}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed lg:text-base">
                {t("personalityTestsDescription")}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button className="rounded-xl font-semibold gap-2" asChild>
                  <Link href="/sign-up">
                    {t("takeTheTest")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-0 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <PersonalityPreview />
              </CardContent>
            </Card>
          </div>

          {/* AI Chat showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Card className="border-0 shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <ChatPreview />
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("aiChatLabel")}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-foreground font-serif text-balance lg:text-3xl">
                {t("aiChatTitle")}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed lg:text-base">
                {t("aiChatDescription")}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button className="rounded-xl font-semibold gap-2" asChild>
                  <Link href="/sign-up">
                    {t("startConversation")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────────────────────────── */

const testimonials = [
  {
    name: "Benny",
    type: "Architect (INTJ-A)",
    initials: "BN",
    text: "Incredibly thorough and scary. It is like someone putting a mirror to your face and you seeing your true self whether you like it or not.",
  },
  {
    name: "Nicole",
    type: "Advocate (INFJ-T)",
    initials: "NC",
    text: "This site is just AMAZING! I took the test and the results were so spot on, I felt like I had been vindicated. Like someone finally gets me.",
  },
  {
    name: "Caroline",
    type: "Defender (ISFJ-A)",
    initials: "CR",
    text: "Reading this profile is comforting, exciting, inspiring, and a little bit freaky. It is great to have my strengths and weaknesses so clearly articulated.",
  },
];

function Testimonials() {
  const t = useTranslations("landing.testimonials");

  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {t.type}
                    </p>
                  </div>
                </div>
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ─────────────────────────────────────────────────────── */

function Pricing() {
  const t = useTranslations("landing.pricing");

  const plans = [
    {
      name: t("freePlan"),
      price: t("freePrice"),
      period: t("freePeriod"),
      description: t("freeDescription"),
      features: [
        t("freeFeature1"),
        t("freeFeature2"),
        t("freeFeature3"),
        t("freeFeature4"),
        t("freeFeature5"),
      ],
      cta: t("freeCta"),
      highlighted: false,
    },
    {
      name: t("proPlan"),
      price: t("proPrice"),
      period: t("proPeriod"),
      description: t("proDescription"),
      features: [
        t("proFeature1"),
        t("proFeature2"),
        t("proFeature3"),
        t("proFeature4"),
        t("proFeature5"),
        t("proFeature6"),
        t("proFeature7"),
        t("proFeature8"),
      ],
      cta: t("proCta"),
      highlighted: true,
    },
    {
      name: t("lifetimePlan"),
      price: t("lifetimePrice"),
      period: t("lifetimePeriod"),
      description: t("lifetimeDescription"),
      features: [
        t("lifetimeFeature1"),
        t("lifetimeFeature2"),
        t("lifetimeFeature3"),
        t("lifetimeFeature4"),
        t("lifetimeFeature5"),
        t("lifetimeFeature6"),
      ],
      cta: t("lifetimeCta"),
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-card py-20 lg:py-28 border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "rounded-2xl transition-shadow",
                plan.highlighted
                  ? "border-2 border-primary shadow-md relative"
                  : "border-0 shadow-sm"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    {t("recommended")}
                  </span>
                </div>
              )}
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-serif">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground font-serif">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "mt-8 w-full rounded-xl h-11 font-semibold",
                    plan.highlighted ? "" : "bg-transparent"
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="/sign-up">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────────── */

function FinalCta() {
  const t = useTranslations("landing.finalCta");

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 rounded-xl px-8 text-base font-semibold gap-2"
              asChild
            >
              <Link href="/sign-up">
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  const t = useTranslations("landing.footer");
  const tc = useTranslations("common");

  const footerColumns = [
    {
      title: t("products"),
      links: [
        { label: t("premiumAssessments"), href: "/pricing" },
        { label: t("aiChat"), href: "/sign-up" },
        { label: t("voiceJournals"), href: "/sign-up" },
        { label: t("testimonials"), href: "#testimonials" },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("personalityTest"), href: "/sign-up" },
        { label: t("personalityTypes"), href: "#" },
        { label: t("articles"), href: "#" },
        { label: t("ourFramework"), href: "#" },
      ],
    },
    {
      title: t("help"),
      links: [
        { label: t("contactUs"), href: "#" },
        { label: t("faq"), href: "#" },
        { label: t("privacyPolicy"), href: "/privacy" },
        { label: t("termsAndConditions"), href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
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
              <p className="text-sm font-semibold text-foreground">
                {col.title}
              </p>
              <nav className="mt-3 flex flex-col gap-2.5">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
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

/* ── Assembled Landing Page ──────────────────────────────────────── */

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <FeatureShowcase />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
