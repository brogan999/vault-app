import { Link } from "@/i18n/navigation";
import { Mail, Bug, Handshake, Newspaper, FlaskConical } from "lucide-react";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us — Bald Labs, Inc",
    description:
      "Get in touch with Bald Labs, Inc for support, bug reports, partnerships, press, or research collaboration.",
  };
}

/* ------------------------------------------------------------------ */
/*  Contact categories                                                */
/* ------------------------------------------------------------------ */

interface ContactCategory {
  icon: typeof Mail;
  title: string;
  description: string;
  email: string;
  details?: string[];
}

const CATEGORIES: ContactCategory[] = [
  {
    icon: Mail,
    title: "General support",
    description:
      "For questions about your account, your results, the assessments, or anything else about the platform.",
    email: "support@theanima.ai",
    details: [
      "We typically respond within 24 hours on business days.",
      "Sometimes faster, sometimes a bit longer during busy periods \u2014 but we read every message, and we don\u2019t use canned responses. A real person will get back to you.",
    ],
  },
  {
    icon: Bug,
    title: "Bug reports & technical issues",
    description:
      "Something broken? A chart not loading, a calculation that looks off, or a page behaving strangely?",
    email: "bugs@theanima.ai",
    details: [
      "When reporting a bug, it helps us if you include:",
      "\u2022 What you were doing when it happened",
      "\u2022 What device and browser you\u2019re using",
      "\u2022 A screenshot if you can grab one",
      "\u2022 Whether it happens every time or just occasionally",
      "The more detail you give us, the faster we can track it down.",
    ],
  },
  {
    icon: Handshake,
    title: "Business & partnership inquiries",
    description:
      "Interested in working with us? Whether you\u2019re a coach, therapist, organizational consultant, educator, or someone else who sees value in what we\u2019re building \u2014 we\u2019d like to hear about it.",
    email: "partnerships@theanima.ai",
    details: [
      "We\u2019re especially interested in conversations about integrating our assessments into coaching practices, team development programs, and educational settings.",
    ],
  },
  {
    icon: Newspaper,
    title: "Press & media",
    description: "For press inquiries, interviews, or media-related requests.",
    email: "press@theanima.ai",
    details: [
      "We\u2019re happy to discuss the science behind our psychometric assessments, the philosophy of multi-framework self-discovery, or the broader question of how personality tools are evolving.",
    ],
  },
  {
    icon: FlaskConical,
    title: "Research collaboration",
    description:
      "We take psychometric validity seriously, and we welcome collaboration with researchers in personality psychology, psychometrics, and related fields.",
    email: "research@theanima.ai",
    details: [
      "If you\u2019re interested in our data, our methodology, or conducting studies using our platform, we\u2019d love to hear from you.",
    ],
  },
];

/* ------------------------------------------------------------------ */

const SOCIAL_LINKS = [
  { label: "Twitter / X", handle: "@theanima" },
  { label: "Instagram", handle: "@theanima" },
  { label: "TikTok", handle: "@theanima" },
  { label: "LinkedIn", handle: "Anima" },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold font-serif text-foreground tracking-tight lg:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
          Bald Labs, Inc
        </p>
        <p className="mt-1 text-muted-foreground leading-relaxed">
          Get in Touch
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          We&rsquo;d love to hear from you &mdash; whether you&rsquo;ve spotted
          something that doesn&rsquo;t look right, have an idea for making the
          platform better, or just want to tell us about the moment one of your
          results made you stop and think.
        </p>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Before reaching out, you might find your answer in our{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ
          </Link>{" "}
          or{" "}
          <Link href="/knowledge-base" className="text-primary hover:underline">
            Knowledge Base
          </Link>
          . We&rsquo;ve covered a lot of ground there, and you may be up and
          running faster than waiting for a reply.
        </p>

        {/* Contact categories */}
        <div className="mt-12 space-y-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {cat.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                    <a
                      href={`mailto:${cat.email}`}
                      className="mt-3 inline-block font-semibold text-primary hover:underline"
                    >
                      {cat.email}
                    </a>
                    {cat.details && (
                      <div className="mt-3 space-y-1">
                        {cat.details.map((line, i) => (
                          <p
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-14">
          <h2 className="text-xl font-bold font-serif text-foreground">
            Connect With Us
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Follow along for insights, personality deep-dives, and the
            occasional moment of self-recognition:
          </p>
          <ul className="mt-4 space-y-1.5">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                <span>
                  <strong className="font-semibold text-foreground">
                    {s.label}:
                  </strong>{" "}
                  {s.handle}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing note */}
        <div className="mt-14 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-foreground">A Quick Note</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Bald Labs, Inc is a small team that cares deeply about getting this right
            &mdash; both the science and the soul of it. We may not have a call
            center or a chatbot army, but we do have real humans who genuinely
            want to help.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If something about your experience wasn&rsquo;t what you hoped, tell
            us. That&rsquo;s how we get better.
          </p>
        </div>
    </main>
  );
}
