import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { getProductById } from "@/lib/products";
import { canAccessPremiumReport } from "@/lib/access";
import type { TestResultRow } from "@/lib/tests/types";
import { jsPDF } from "jspdf";

const GUEST_COOKIE_NAME = "vault_guest_id";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  const { attemptId } = await params;
  const user = await getSupabaseUser();
  const supabase = createAdminClient();

  let data: unknown = null;
  if (user) {
    const res = await supabase
      .from("testResults")
      .select("*")
      .eq("id", attemptId)
      .eq("userId", user.id)
      .single();
    data = res.data;
  } else {
    const guestId = (await cookies()).get(GUEST_COOKIE_NAME)?.value;
    if (!guestId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const res = await supabase
      .from("testResults")
      .select("*")
      .eq("id", attemptId)
      .eq("guest_id", guestId)
      .single();
    data = res.data;
  }

  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const result = data as TestResultRow;

  const tier = user?.subscriptionTier ?? "free";
  const hasAccess =
    result.isPremium ||
    (user && (await canAccessPremiumReport(supabase, user.id, result.testId, tier)));
  if (!hasAccess) {
    return NextResponse.json(
      { error: "Premium report not purchased" },
      { status: 403 },
    );
  }

  const product = getProductById(result.testId);
  const testTitle = product?.title ?? result.testId;

  try {
    const pdf = generateReport(result, testTitle);
    const buffer = pdf.output("arraybuffer");

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${result.testId}-report.pdf"`,
    },
  });
  } catch (err) {
    console.error("[Report PDF] Generation failed:", err);
    return NextResponse.json(
      { error: "Report generation failed. Please try again." },
      { status: 500 },
    );
  }
}

function generateReport(result: TestResultRow, testTitle: string): jsPDF {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const safeText = (s: unknown): string =>
    typeof s === "string" ? s : s != null ? String(s) : "";

  const addPage = () => {
    doc.addPage();
    y = margin;
  };

  const checkPageBreak = (needed: number) => {
    if (y + needed > doc.internal.pageSize.getHeight() - margin) {
      addPage();
    }
  };

  const scores = result.scores ?? {};
  const dimensions = Array.isArray(scores.dimensions) ? scores.dimensions : [];
  const interpretation = result.interpretation ?? null;

  // --- Cover ---
  y = 60;
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(safeText(testTitle), pageWidth / 2, y, { align: "center" });

  y += 12;
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("Premium Assessment Report", pageWidth / 2, y, { align: "center" });

  y += 10;
  doc.setFontSize(10);
  const completedDate = result.completedAt
    ? new Date(result.completedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "—";
  doc.text(`Completed: ${completedDate}`, pageWidth / 2, y, { align: "center" });

  if (scores.typeLabel) {
    y += 20;
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(safeText(scores.typeLabel), pageWidth / 2, y, { align: "center" });
  }

  if (scores.overall !== undefined && scores.overall !== null) {
    y += 10;
    doc.setFontSize(24);
    doc.text(`${scores.overall}%`, pageWidth / 2, y, { align: "center" });
  }

  // --- Page 2: Summary ---
  addPage();

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Executive Summary", margin, y);
  y += 10;

  const summary = interpretation?.summary;
  if (summary) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize(safeText(summary), contentWidth);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 5 + 10;
  }

  // --- Dimension Scores ---
  if (dimensions.length > 0) {
    checkPageBreak(30);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Dimension Scores", margin, y);
    y += 8;

    for (const dim of dimensions) {
      checkPageBreak(20);
      const label = safeText(dim.label);
      const score = typeof dim.score === "number" ? dim.score : 0;
      const desc = safeText(dim.description);

      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(`${label}: ${score}%`, margin, y);
      y += 5;

      doc.setFillColor(230, 230, 230);
      doc.roundedRect(margin, y, contentWidth, 4, 2, 2, "F");
      doc.setFillColor(79, 70, 229);
      doc.roundedRect(margin, y, (contentWidth * Math.min(100, Math.max(0, score))) / 100, 4, 2, 2, "F");
      y += 7;

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      const descLines = doc.splitTextToSize(desc, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 4 + 6;
    }
  }

  // --- Detailed Interpretation ---
  const dimensionDetails = interpretation?.dimensionDetails;
  if (Array.isArray(dimensionDetails) && dimensionDetails.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Detailed Interpretation", margin, y);
    y += 10;

    for (const detail of dimensionDetails) {
      checkPageBreak(20);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const text = safeText(detail?.text);
      const lines = doc.splitTextToSize(text, contentWidth);
      doc.text(lines, margin, y);
      y += lines.length * 5 + 6;
    }
  }

  // --- Tips ---
  const tips = interpretation?.tips;
  if (Array.isArray(tips) && tips.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Growth Recommendations", margin, y);
    y += 10;

    for (const tip of tips) {
      checkPageBreak(15);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize(`• ${safeText(tip)}`, contentWidth - 5);
      doc.text(lines, margin + 2, y);
      y += lines.length * 5 + 4;
    }
  }

  // --- Footer on all pages ---
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 150, 150);
    doc.text(
      "Generated by Anima — Know Yourself Deeper",
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" },
    );
    doc.text(
      `Page ${i} of ${pageCount}`,
      pageWidth - margin,
      doc.internal.pageSize.getHeight() - 10,
      { align: "right" },
    );
  }

  return doc;
}
