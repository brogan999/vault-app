import { NextResponse } from "next/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { getProductById } from "@/lib/products";
import JSZip from "jszip";
import { jsPDF } from "jspdf";
import type { TestResultRow } from "@/lib/tests/types";

/**
 * GET /api/export
 *
 * Generates a ZIP archive containing all of the authenticated user's data:
 *   - profile/        User profile, psych profile, esoteric profiles
 *   - test-results/   One JSON file per test attempt
 *   - reports/        Premium report PDFs (for any premium test results)
 *   - chat-history/   One JSON file per chat session
 *   - documents/      Document metadata
 *   - README.txt      Explains the export
 */
export async function GET() {
  const user = await getSupabaseUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();

  try {
    // Fetch all data in parallel
    const [
      userResult,
      psychProfileResult,
      esotericProfilesResult,
      testResultsResult,
      chatSessionsResult,
      documentsResult,
    ] = await Promise.all([
      supabase
        .from("users")
        .select("id, email, subscriptionTier, themePreference, personaPreference, birthDate, birthTime, birthLocationName, createdAt, updatedAt")
        .eq("id", user.id)
        .single(),
      supabase
        .from("psychProfile")
        .select("big5Scores, astrologyMeta, iqScore, createdAt, updatedAt")
        .eq("userId", user.id)
        .maybeSingle(),
      supabase
        .from("esoteric_profiles")
        .select("framework, profile_json, computed_at")
        .eq("user_id", user.id),
      supabase
        .from("testResults")
        .select("*")
        .eq("userId", user.id)
        .order("completedAt", { ascending: false }),
      supabase
        .from("chatSessions")
        .select("id, title, createdAt, updatedAt")
        .eq("userId", user.id)
        .order("createdAt", { ascending: false }),
      supabase
        .from("documents")
        .select("id, fileName, type, category, status, contentText, metadata, createdAt")
        .eq("userId", user.id)
        .order("createdAt", { ascending: false }),
    ]);

    const zip = new JSZip();
    const dateStr = new Date().toISOString().split("T")[0];
    const rootFolder = zip.folder(`my-vault-export-${dateStr}`)!;

    // ---------- README ----------
    rootFolder.file(
      "README.txt",
      [
        "The Vault — Data Export",
        `Generated: ${new Date().toISOString()}`,
        "",
        "This archive contains all of your data from The Vault.",
        "",
        "Contents:",
        "  profile/",
        "    user-profile.json       — Your account info and preferences",
        "    psych-profile.json      — Big 5 scores, astrology meta, IQ",
        "    esoteric-profiles.json  — Esoteric framework profiles",
        "  test-results/",
        "    <testId>-<date>.json    — One file per completed assessment",
        "  reports/",
        "    <framework>-report.pdf  — Premium report PDFs",
        "  chat-history/",
        "    session-<id>.json       — One file per chat session with messages",
        "  documents/",
        "    metadata.json           — Metadata for your uploaded documents",
        "",
        "All dates are in ISO 8601 format (UTC).",
        "For questions, contact support@personalityco.com",
      ].join("\n"),
    );

    // ---------- PROFILE ----------
    const profileFolder = rootFolder.folder("profile")!;

    // User profile (strip sensitive internal fields)
    if (userResult.data) {
      const { id: _id, ...profileData } = userResult.data;
      profileFolder.file(
        "user-profile.json",
        JSON.stringify(profileData, null, 2),
      );
    }

    // Psych profile
    if (psychProfileResult.data) {
      profileFolder.file(
        "psych-profile.json",
        JSON.stringify(psychProfileResult.data, null, 2),
      );
    }

    // Esoteric profiles
    if (esotericProfilesResult.data && esotericProfilesResult.data.length > 0) {
      profileFolder.file(
        "esoteric-profiles.json",
        JSON.stringify(esotericProfilesResult.data, null, 2),
      );
    }

    // ---------- TEST RESULTS ----------
    const testResults = (testResultsResult.data ?? []) as TestResultRow[];
    if (testResults.length > 0) {
      const resultsFolder = rootFolder.folder("test-results")!;
      for (const result of testResults) {
        const completedDate = result.completedAt
          ? new Date(result.completedAt).toISOString().split("T")[0]
          : "unknown";
        const fileName = `${result.testId}-${completedDate}-${result.id.slice(0, 8)}.json`;

        // Export clean result data (omit internal fields)
        const exportResult = {
          testId: result.testId,
          completedAt: result.completedAt,
          scores: result.scores,
          interpretation: result.interpretation,
          isPremium: result.isPremium,
          isValid: result.is_valid,
        };
        resultsFolder.file(fileName, JSON.stringify(exportResult, null, 2));
      }
    }

    // ---------- PREMIUM REPORT PDFs ----------
    const premiumResults = testResults.filter((r) => r.isPremium);
    if (premiumResults.length > 0) {
      const reportsFolder = rootFolder.folder("reports")!;
      for (const result of premiumResults) {
        try {
          const product = getProductById(result.testId);
          const testTitle = product?.title ?? result.testId;
          const pdf = generateExportReport(result, testTitle);
          const pdfBuffer = pdf.output("arraybuffer");
          reportsFolder.file(`${result.testId}-report.pdf`, pdfBuffer);
        } catch (err) {
          console.error(`[Export] Failed to generate PDF for ${result.testId}:`, err);
        }
      }
    }

    // ---------- CHAT HISTORY ----------
    const chatSessions = chatSessionsResult.data ?? [];
    if (chatSessions.length > 0) {
      const chatFolder = rootFolder.folder("chat-history")!;

      // Fetch messages for all sessions
      const sessionIds = chatSessions.map((s: { id: string }) => s.id);
      const { data: allMessages } = await supabase
        .from("messages")
        .select("sessionId, role, content, createdAt")
        .in("sessionId", sessionIds)
        .order("createdAt", { ascending: true });

      const messagesBySession = new Map<string, typeof allMessages>();
      for (const msg of allMessages ?? []) {
        const sessionId = msg.sessionId as string;
        if (!messagesBySession.has(sessionId)) {
          messagesBySession.set(sessionId, []);
        }
        messagesBySession.get(sessionId)!.push(msg);
      }

      for (const session of chatSessions) {
        const s = session as { id: string; title: string; createdAt: string };
        const messages = messagesBySession.get(s.id) ?? [];
        const exportSession = {
          title: s.title,
          createdAt: s.createdAt,
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
            createdAt: m.createdAt,
          })),
        };
        chatFolder.file(
          `session-${s.id.slice(0, 8)}.json`,
          JSON.stringify(exportSession, null, 2),
        );
      }
    }

    // ---------- DOCUMENTS ----------
    const documents = documentsResult.data ?? [];
    if (documents.length > 0) {
      const docsFolder = rootFolder.folder("documents")!;
      const exportDocs = documents.map((d) => ({
        fileName: d.fileName,
        type: d.type,
        category: d.category,
        status: d.status,
        createdAt: d.createdAt,
        hasContent: !!d.contentText,
      }));
      docsFolder.file("metadata.json", JSON.stringify(exportDocs, null, 2));
    }

    // ---------- GENERATE ZIP ----------
    const zipBuffer = await zip.generateAsync({
      type: "arraybuffer",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    });

    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="vault-export-${dateStr}.zip"`,
      },
    });
  } catch (err) {
    console.error("[Export] Failed:", err);
    return NextResponse.json(
      { error: "Export failed. Please try again." },
      { status: 500 },
    );
  }
}

// ---------- PDF generation (reused from /api/reports, self-contained for export) ----------

function generateExportReport(result: TestResultRow, testTitle: string): jsPDF {
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

  const scores = result.scores ?? ({} as Record<string, unknown>);
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
    ? new Date(result.completedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
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
      doc.roundedRect(
        margin,
        y,
        (contentWidth * Math.min(100, Math.max(0, score))) / 100,
        4,
        2,
        2,
        "F",
      );
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
      "Generated by The Vault — Know Yourself Deeper",
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
