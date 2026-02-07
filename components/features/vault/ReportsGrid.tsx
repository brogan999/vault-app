"use client";

import { useEffect, useState } from "react";
import { ReportCard } from "./ReportCard";
import { getUserPremiumReports } from "@/app/actions/vault";
import type { PremiumReportItem } from "@/app/actions/vault";
import { Crown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function ReportsGrid() {
  const [reports, setReports] = useState<PremiumReportItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserPremiumReports()
      .then(setReports)
      .catch((e) => {
        console.error("ReportsGrid fetch error:", e);
        setReports([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-2xl bg-muted/60"
          />
        ))}
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Crown className="h-6 w-6 text-primary" />
        </div>
        <p className="text-sm font-semibold text-foreground">
          No premium reports yet
        </p>
        <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto leading-relaxed">
          Complete an assessment and unlock the premium report to get detailed
          insights, growth recommendations, and a downloadable PDF.
        </p>
        <Link
          href="/store"
          className="mt-4 inline-block rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Browse Tests
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}
