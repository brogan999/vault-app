"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { PremiumReportContent, FreeResultsContent } from "@/lib/personality";
import { BookOpen, Calendar, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PremiumReportClientProps {
  report: PremiumReportContent;
  identity: FreeResultsContent["identity"];
}

interface ReportSection {
  id: string;
  number: number;
  title: string;
  content?: string;
  extra?: React.ReactNode;
}

export function PremiumReportClient({ report, identity }: PremiumReportClientProps) {
  const sections: ReportSection[] = [
    {
      id: "executive-summary",
      number: 1,
      title: report.executiveSummary.title,
      content: report.executiveSummary.content,
    },
    {
      id: "full-analysis",
      number: 2,
      title: report.fullAnalysis.title,
      content: report.fullAnalysis.content,
    },
    {
      id: "cognition",
      number: 3,
      title: report.cognition.title,
      content: report.cognition.content,
    },
    {
      id: "emotions",
      number: 4,
      title: report.emotions.title,
      content: report.emotions.content,
    },
    {
      id: "relationships",
      number: 5,
      title: report.relationships.title,
      content: report.relationships.content,
      extra: (
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
          <p className="text-sm font-medium text-primary">
            {report.relationships.compatibilityNote}
          </p>
        </div>
      ),
    },
    {
      id: "career",
      number: 6,
      title: report.career.title,
      content: report.career.content,
    },
    {
      id: "growth",
      number: 7,
      title: report.growth.title,
      content: report.growth.content,
    },
    {
      id: "toolkit",
      number: 8,
      title: report.toolkit.title,
      extra: <ToolkitCards actions={report.toolkit.actions} />,
    },
    {
      id: "compatibility",
      number: 9,
      title: report.compatibility.title,
      content: report.compatibility.content,
      extra: (
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
          <p className="text-sm font-medium text-primary">
            {report.compatibility.viralCTA}
          </p>
        </div>
      ),
    },
    {
      id: "resources",
      number: 10,
      title: report.resources.title,
      content: report.resources.content,
    },
  ];

  const generatedDate = new Date(report.meta.generatedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/test/preview/${identity.typeCode}`}
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to results page
        </Link>

        {/* Report header */}
        <header
          className="relative overflow-hidden rounded-2xl"
          style={{ backgroundColor: identity.color }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          <div className="relative z-10 flex flex-col items-start justify-end px-6 pb-8 pt-10 sm:px-10 md:flex-row md:items-end md:justify-between md:pb-0 md:pt-0">
            <div className="md:py-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Premium Report
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {identity.typeName}
              </h1>
              <p className="mt-1 text-lg font-semibold text-white/90">
                {identity.typeCode}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {report.meta.wordCount.toLocaleString()} words
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {generatedDate}
                </span>
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {Math.ceil(report.meta.wordCount / 250)} min read
                </span>
              </div>
            </div>

            {identity.heroImage && (
              <div className="mt-6 flex-shrink-0 md:mt-0">
                <Image
                  src={identity.heroImage}
                  alt={`${identity.typeName} illustration`}
                  width={280}
                  height={240}
                  className="h-auto w-40 object-contain sm:w-48 md:w-60"
                  priority
                />
              </div>
            )}
          </div>
        </header>

        {/* Table of contents */}
        <nav className="mt-10 rounded-xl border border-border bg-card px-6 py-5">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contents
          </h2>
          <ol className="columns-1 gap-x-8 space-y-1.5 sm:columns-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group inline-flex items-baseline gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <span className="w-5 text-right font-mono text-xs text-muted-foreground group-hover:text-primary">
                    {s.number}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Report sections */}
        <div className="mt-12 space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-7 min-w-7 items-center justify-center rounded-md bg-primary px-2 text-xs font-bold text-primary-foreground">
                  {section.number}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <div className="premium-report">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              )}

              {section.extra}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-border pt-8 pb-12 text-center">
          <p className="text-xs text-muted-foreground">
            Generated by Anima &mdash; Know Yourself Deeper
          </p>
        </footer>
      </div>
    </div>
  );
}

function ToolkitCards({
  actions,
}: {
  actions: Array<{ title: string; context: string; action: string }>;
}) {
  return (
    <div className="space-y-4">
      {actions.map((a) => (
        <div
          key={a.title}
          className="rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-foreground">
            {a.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/70">When:</span>{" "}
            {a.context}
          </p>
          <div className="mt-3 rounded-lg bg-primary/5 px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground/90">
              {a.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
