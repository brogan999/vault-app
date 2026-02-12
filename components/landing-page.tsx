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
} from "lucide-react";
import { ConsentDialog } from "@/components/features/consent/ConsentDialog";
import { HERO_TEST_ID } from "@/lib/products";

/* ── Hero ─────────────────────────────────────────────────────────── */

function Hero() {
  const t = useTranslations("landing.hero");
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [showConsentDialog, setShowConsentDialog] = useState(false);

  // Take the test with or without an account; sign-up is only needed for chat, vault, etc.
  const handlePrimaryCta = () => {
    router.push(`/test/${HERO_TEST_ID}`);
  };

  const handlePreSignupConsent = () => {
    setShowConsentDialog(false);
    router.push("/sign-up");
  };

  const heroTestHref = `/test/${HERO_TEST_ID}`;

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#328181]/30 bg-[#328181]/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-[#328181]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[#328181]">
              {t("badge")}
            </span>
          </div>

          <h1 className="text-3xl font-medium tracking-tight text-foreground font-serif leading-tight text-balance lg:text-4xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {t("description")}
          </p>

          <div className="mt-10 flex">
            {isSignedIn ? (
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-base font-medium gap-2"
                asChild
              >
                <Link href={heroTestHref}>
                  {t("cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-base font-medium gap-2"
                onClick={handlePrimaryCta}
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
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
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section className="border-t border-border py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <p className="mb-10 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t("headline")}
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-medium text-foreground font-serif lg:text-4xl">
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
    { icon: Brain, title: t("personalityTests"), description: t("personalityTestsDesc") },
    { icon: MessageSquare, title: t("aiTherapistChat"), description: t("aiTherapistChatDesc") },
    { icon: Archive, title: t("secureFileVault"), description: t("secureFileVaultDesc") },
    { icon: Mic, title: t("voiceJournals"), description: t("voiceJournalsDesc") },
    { icon: BarChart3, title: t("growthTracking"), description: t("growthTrackingDesc") },
    { icon: Shield, title: t("privateByDefault"), description: t("privateByDefaultDesc") },
  ];

  return (
    <section id="features" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border border-border rounded-2xl bg-transparent"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#328181]/10">
                  <feature.icon className="h-6 w-6 text-[#328181]" />
                </div>
                <h3 className="text-lg font-medium text-foreground font-serif">
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
    { name: t("openness"), score: 82 },
    { name: t("conscientiousness"), score: 68 },
    { name: t("extraversion"), score: 45 },
    { name: t("agreeableness"), score: 74 },
    { name: t("neuroticism"), score: 38 },
  ];

  return (
    <div className="p-6 lg:p-8">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
        {t("big5Results")}
      </p>
      <div className="flex flex-col gap-4">
        {traits.map((trait) => (
          <div key={trait.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">
                {trait.name}
              </span>
              <span className="text-sm font-medium font-serif text-foreground">
                {trait.score}%
              </span>
            </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-[#328181] transition-all duration-700"
                style={{ width: `${trait.score}%` }}
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
    <div className="p-6 lg:p-8">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
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
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col gap-20 lg:gap-28">
          {/* Personality Tests showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("personalityTestsLabel")}
              </p>
              <h3 className="mt-3 text-2xl font-medium text-foreground font-serif text-balance lg:text-3xl">
                {t("personalityTestsTitle")}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed lg:text-base">
                {t("personalityTestsDescription")}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button className="rounded-full font-medium gap-2" asChild>
                  <Link href={`/test/${HERO_TEST_ID}`}>
                    {t("takeTheTest")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden">
              <PersonalityPreview />
            </div>
          </div>

          {/* AI Chat showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border overflow-hidden">
                <ChatPreview />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("aiChatLabel")}
              </p>
              <h3 className="mt-3 text-2xl font-medium text-foreground font-serif text-balance lg:text-3xl">
                {t("aiChatTitle")}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed lg:text-base">
                {t("aiChatDescription")}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button className="rounded-full font-medium gap-2" asChild>
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
    <section id="testimonials" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border border-border rounded-2xl bg-transparent">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">
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
                      className="h-4 w-4 fill-primary text-primary"
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
  ];

  return (
    <section
      id="pricing"
      className="border-t border-border py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl">
          {plans.map((plan, planIndex) => (
            <Card
              key={plan.name}
              className={cn(
                "rounded-2xl bg-transparent",
                plan.highlighted
                  ? "border-2 border-[#328181] relative"
                  : "border border-border"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-6">
                  <span className="rounded-full bg-[#328181] px-4 py-1 text-xs font-medium text-white">
                    {t("recommended")}
                  </span>
                </div>
              )}
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-lg font-medium text-foreground font-serif">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-medium text-foreground font-serif">
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
                            ? "text-[#328181]"
                            : "text-muted-foreground"
                        )}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "mt-8 w-full rounded-full h-11 font-medium",
                    plan.highlighted ? "" : "bg-transparent"
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={planIndex === 0 ? `/test/${HERO_TEST_ID}` : "/sign-up"}>{plan.cta}</Link>
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
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div>
          <h2 className="text-3xl font-medium text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium gap-2"
              asChild
            >
              <Link href={`/test/${HERO_TEST_ID}`}>
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

/* ── Assembled Landing Page ──────────────────────────────────────── */

export function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <FinalCta />
    </>
  );
}
