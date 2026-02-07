"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Crown, Download, Loader2 } from "lucide-react";
import type { PremiumReportItem } from "@/app/actions/vault";
import { toast } from "sonner";

/** Badges for how the report was unlocked. */
const UNLOCK_VIA_LABELS: Record<string, string> = {
  purchase: "Purchased",
  subscription: "Pro",
  bundle: "Bundle",
};

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export function ReportCard({ report }: { report: PremiumReportItem }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!report.attemptId) {
      toast.error("No test result available to generate this report.");
      return;
    }

    setDownloading(true);
    try {
      const res = await fetch(`/api/reports/${report.attemptId}`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to download report");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${report.framework}-report.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Download failed");
    } finally {
      setDownloading(false);
    }
  };

  const unlockLabel = UNLOCK_VIA_LABELS[report.unlockedVia] ?? "Unlocked";
  const cardBg = report.cardBg ?? report.bgColor;

  const cardContent = (
    <Card
      className="group h-full border-0 shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer overflow-hidden"
      style={{ backgroundColor: cardBg }}
    >
      <CardContent className="p-4 flex flex-col h-full min-h-[140px]">
        {/* Top row: report name + chevron */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
            {report.displayName}
          </p>
          <ChevronRight className="h-4 w-4 shrink-0 text-white/50 group-hover:text-white/80 transition-opacity" />
        </div>

        {/* Main: result label */}
        <div className="mt-3 flex-1">
          {report.resultLabel && (
            <p className="text-2xl md:text-3xl font-bold font-serif leading-tight text-white">
              {report.resultLabel}
            </p>
          )}
          {!report.resultLabel && (
            <p className="text-sm text-white/70 mt-1">Premium Report</p>
          )}
        </div>

        {/* Footer: date, badges, download */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[10px] text-white/70">
            <Calendar className="h-3 w-3 shrink-0" />
            <span>{formatDate(report.unlockedAt)}</span>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white">
              <Crown className="h-3 w-3" />
              {unlockLabel}
            </span>
            {report.attemptId && (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center gap-1 rounded-full bg-white/20 hover:bg-white/30 px-2.5 py-0.5 text-[10px] font-medium text-white transition-colors disabled:opacity-50"
                title="Download PDF Report"
              >
                {downloading ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <Download className="h-3 w-3" />
                )}
                PDF
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Link to results page if we have the test ID and attempt
  if (report.testId && report.attemptId) {
    return (
      <Link href={`/test/${report.testId}/results/${report.attemptId}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
