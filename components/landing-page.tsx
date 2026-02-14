"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FrameworkWheel } from "@/components/landing/FrameworkWheel";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Star,
  Check,
  FlaskConical,
  Eye,
} from "lucide-react";
import { ConsentDialog } from "@/components/features/consent/ConsentDialog";
import { HERO_TEST_ID } from "@/lib/products";

/* ── Hero ─────────────────────────────────────────────────────────── */

function Hero() {
  const t = useTranslations("landing.hero");
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [showConsentDialog, setShowConsentDialog] = useState(false);

  const handlePrimaryCta = () => {
    router.push(`/test/${HERO_TEST_ID}`);
  };

  const handlePreSignupConsent = () => {
    setShowConsentDialog(false);
    router.push("/sign-up");
  };

  const heroTestHref = `/test/${HERO_TEST_ID}`;

  return (
    <section className="relative overflow-hidden py-24 lg:py-40">
      {/* Subtle radial glow behind the hero */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-[#328181]/[0.04] blur-3xl dark:bg-[#328181]/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <AnimateOnScroll variant="fade-in" duration={600}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#328181]/20 bg-[#328181]/[0.06] px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#328181]" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#328181]">
              {t("badge")}
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={100}>
          <h1 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={250}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={350}>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground/70 italic">
            Named for Jung&apos;s discovery of the inner personality &mdash; the
            bridge between what you know about yourself and what you
            haven&apos;t figured out yet.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={450}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {isSignedIn ? (
              <Button
                size="lg"
                className="h-13 rounded-full px-10 text-base font-medium gap-2"
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
                className="h-13 rounded-full px-10 text-base font-medium gap-2"
                onClick={handlePrimaryCta}
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          <p className="mt-5 text-xs text-muted-foreground/60">
            {t("disclaimer")}
          </p>
        </AnimateOnScroll>
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
    <section className="border-t border-border/50 py-14 lg:py-18">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll variant="fade-in">
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
            {t("headline")}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} variant="fade-up" delay={i * 100}>
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Framework Wheel + Journey Narrative ──────────────────────────── */

function JourneySection() {
  const t = useTranslations("landing.journey");

  const chapters = [
    {
      num: "01",
      label: t("chapterMeasure"),
      title: t("chapterMeasureTitle"),
      body: t("chapterMeasureBody"),
      icon: FlaskConical,
      color: "var(--palette-teal)",
    },
    {
      num: "02",
      label: t("chapterInterpret"),
      title: t("chapterInterpretTitle"),
      body: t("chapterInterpretBody"),
      icon: Eye,
      color: "var(--palette-gold)",
    },
    {
      num: "03",
      label: t("chapterConverse"),
      title: t("chapterConverseTitle"),
      body: t("chapterConverseBody"),
      icon: MessageSquare,
      color: "var(--palette-rose)",
    },
  ];

  return (
    <section className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header + wheel on one row for desktop */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <AnimateOnScroll variant="fade-up">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
                {t("wheelLabel")}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground text-balance lg:text-4xl">
                {t("wheelTitle")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("wheelDescription")}
              </p>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="rounded-full font-medium gap-2"
                  asChild
                >
                  <Link href="/our-framework">
                    {t("wheelCta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right — wheel diagram */}
          <AnimateOnScroll variant="scale-in" delay={200}>
            <FrameworkWheel className="mx-auto w-full max-w-[380px]" />
          </AnimateOnScroll>
        </div>

        {/* Three narrative chapters below */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-28">
          {chapters.map((ch, i) => (
            <AnimateOnScroll key={ch.num} variant="fade-up" delay={i * 150}>
              <div className="group relative rounded-2xl border border-border/50 bg-muted/20 p-8 transition-colors hover:bg-muted/40 dark:bg-muted/5 dark:hover:bg-muted/10">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${ch.color} 12%, transparent)` }}
                  >
                    <ch.icon className="h-4.5 w-4.5" style={{ color: ch.color }} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
                    {ch.num} &mdash; {ch.label}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {ch.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ch.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Feature Showcase (editorial two-panel) ──────────────────────── */

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
      <p className="mb-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {t("big5Results")}
      </p>
      <div className="flex flex-col gap-4">
        {traits.map((trait) => (
          <div key={trait.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {trait.name}
              </span>
              <span className="font-serif text-sm font-medium text-foreground">
                {trait.score}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-muted">
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
      <p className="mb-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
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
            <p className="text-sm leading-relaxed text-foreground">
              {t("sampleAnswer1")}
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground">
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
    <section className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Personality Tests showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll variant="fade-right">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
                  {t("personalityTestsLabel")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-foreground text-balance lg:text-3xl">
                  {t("personalityTestsTitle")}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground lg:text-base">
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
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={150}>
              <div className="overflow-hidden rounded-2xl border border-border/50">
                <PersonalityPreview />
              </div>
            </AnimateOnScroll>
          </div>

          {/* AI Chat showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll variant="fade-right" delay={150} className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-border/50">
                <ChatPreview />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" className="order-1 lg:order-2">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
                  {t("aiChatLabel")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-foreground text-balance lg:text-3xl">
                  {t("aiChatTitle")}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground lg:text-base">
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
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Methodology Trust Bar ────────────────────────────────────── */

function MethodologyTrustBar() {
  const sources = [
    { name: "IPIP", desc: "International Personality Item Pool" },
    { name: "Big Five", desc: "Gold-standard trait model" },
    { name: "Swiss Ephemeris", desc: "Astronomical precision" },
    { name: "Enneagram", desc: "Motivational framework" },
    { name: "Human Design", desc: "Modern synthesis" },
    { name: "Vedic / Jyotish", desc: "Sidereal astrology" },
  ];

  return (
    <section className="border-t border-border/50 py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll variant="fade-in">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
            Built on established methodologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {sources.map((s) => (
              <div key={s.name} className="flex items-center gap-2 text-center">
                <span className="text-sm font-semibold text-foreground">{s.name}</span>
                <span className="hidden text-xs text-muted-foreground sm:inline">{s.desc}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── Testimonials (editorial pull-quote style) ───────────────────── */

const testimonials = [
  {
    name: "Benny N.",
    type: "Architect (INTJ-A)",
    initials: "BN",
    tests: "Big Five + Personality Type",
    text: "Incredibly thorough and scary. It is like someone putting a mirror to your face and you seeing your true self whether you like it or not. The way the Big Five and type results weave together gave me language for things I have always felt but never articulated.",
  },
  {
    name: "Nicole C.",
    type: "Advocate (INFJ-T)",
    initials: "NC",
    tests: "Personality Type + Enneagram",
    text: "This site is just AMAZING! I took the test and the results were so spot on, I felt like I had been vindicated. Like someone finally gets me. The Enneagram result made me cry — in a good way.",
  },
  {
    name: "Caroline R.",
    type: "Defender (ISFJ-A)",
    initials: "CR",
    tests: "Full Portrait (all frameworks)",
    text: "Reading this profile is comforting, exciting, inspiring, and a little bit freaky. It is great to have my strengths and weaknesses so clearly articulated. Seeing my Big Five alongside my natal chart was genuinely illuminating.",
  },
  {
    name: "Marcus T.",
    type: "Entrepreneur (ESTP-A)",
    initials: "MT",
    tests: "Big Five + Work Style",
    text: "I have done personality tests before and always felt boxed in. Anima is different — it shows the spectrum, not just the label. My Work Style profile helped me understand why I clash with certain colleagues.",
  },
  {
    name: "Priya S.",
    type: "Mediator (INFP-T)",
    initials: "PS",
    tests: "Personality Type + Vedic Astrology",
    text: "The AI chat is what sets this apart. I asked why I always lose interest halfway through projects and it pulled from my Big Five, Enneagram, AND natal chart to give me an answer that felt profoundly true.",
  },
  {
    name: "James W.",
    type: "Logician (INTP-A)",
    initials: "JW",
    tests: "Big Five + Enneagram + Human Design",
    text: "As a skeptic, I appreciate that they are transparent about what is scientifically validated and what is symbolic. The multiple-lens approach actually works — each framework reveals something the others miss.",
  },
];

function Testimonials() {
  const t = useTranslations("landing.testimonials");

  // Featured = first testimonial shown as pull-quote
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section id="testimonials" className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
              {t("sectionLabel")}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground text-balance lg:text-4xl">
              {t("title")}
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Featured pull quote */}
        <AnimateOnScroll variant="fade-up" delay={100}>
          <blockquote className="mb-14 border-l-2 border-[#328181]/40 pl-8 lg:pl-12">
            <p className="font-serif text-xl leading-relaxed text-foreground lg:text-2xl">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-[#328181]/10 text-[#328181] text-xs font-medium">
                  {featured.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{featured.name}</p>
                <p className="text-xs text-muted-foreground">{featured.type}</p>
              </div>
            </footer>
          </blockquote>
        </AnimateOnScroll>

        {/* Grid of remaining testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <AnimateOnScroll key={item.name} variant="fade-up" delay={i * 100}>
              <Card className="h-full border border-border/50 rounded-2xl bg-transparent">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs font-medium text-primary">{item.type}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-3 w-3 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {item.tests}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
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
    <section id="pricing" className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
              {t("sectionLabel")}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground text-balance lg:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground lg:text-lg">
              {t("description")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, planIndex) => (
            <AnimateOnScroll key={plan.name} variant="fade-up" delay={planIndex * 150}>
              <Card
                className={cn(
                  "h-full rounded-2xl bg-transparent",
                  plan.highlighted
                    ? "border-2 border-[#328181] relative"
                    : "border border-border/50"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-6">
                    <span className="rounded-full bg-[#328181] px-4 py-1 text-xs font-medium text-white">
                      {t("recommended")}
                    </span>
                  </div>
                )}
                <CardContent className="flex h-full flex-col p-6 lg:p-8">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-medium text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
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
                      "mt-8 h-11 w-full rounded-full font-medium",
                      plan.highlighted ? "" : "bg-transparent"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href={planIndex === 0 ? `/test/${HERO_TEST_ID}` : "/sign-up"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
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
    <section className="border-t border-border/50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <h2 className="font-serif text-3xl font-medium text-foreground text-balance lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground lg:text-lg">
            {t("description")}
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="h-13 rounded-full px-10 text-base font-medium gap-2"
              asChild
            >
              <Link href={`/test/${HERO_TEST_ID}`}>
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
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
      <MethodologyTrustBar />
      <JourneySection />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <FinalCta />
    </>
  );
}
