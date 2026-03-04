import { jsPDF } from "jspdf";
import { writeFileSync } from "fs";

const mockResult = {
  testId: "mbti",
  completedAt: new Date().toISOString(),
  scores: {
    typeLabel: "The Architect",
    typeCode: "INTJ-A",
    overall: 87,
    dimensions: [
      { label: "Extraversion vs. Introversion", score: 28, description: "You draw energy from your inner world of ideas, preferring deep focus and solitary reflection over social stimulation. While you can engage socially when needed, you recharge through quiet contemplation." },
      { label: "Sensing vs. Intuition", score: 82, description: "You naturally gravitate toward abstract patterns, future possibilities, and theoretical frameworks. You trust your intuition and enjoy connecting disparate ideas into cohesive mental models." },
      { label: "Thinking vs. Feeling", score: 76, description: "You prioritize logical consistency and objective analysis when making decisions. You value truth over harmony and are comfortable making tough calls based on evidence rather than emotional appeal." },
      { label: "Judging vs. Perceiving", score: 71, description: "You prefer structure, planning, and decisive action. You like to have things settled and organized, and you work systematically toward your goals with clear milestones." },
      { label: "Assertive vs. Turbulent", score: 65, description: "You maintain a steady confidence in your abilities and decisions. While self-aware, you don't dwell excessively on past mistakes or worry about others' perceptions." },
    ],
  },
  interpretation: {
    summary:
      "You are a strategic and independent thinker with a rare combination of imagination and reliability. INTJs are known for their ability to see the big picture while maintaining the discipline to execute on their vision. You approach life with a natural skepticism and a drive to understand the systems underlying everything around you.\n\nYour mind works like an architect's — constantly designing, optimizing, and refining. You set high standards for yourself and others, and you have little patience for inefficiency or illogical processes. While this can make you seem demanding, it also means that the people and projects you invest in receive your full intellectual commitment.",
    dimensionDetails: [
      { text: "Your strong introversion preference (28%) indicates that you are most productive and creative when working independently. You likely have a small circle of close relationships rather than a large social network, and you prefer meaningful one-on-one conversations over group gatherings. This is a core strength — it allows you to achieve the deep focus that complex problems demand." },
      { text: "With a high intuition score (82%), you excel at pattern recognition and strategic thinking. You naturally look beyond surface-level information to understand underlying principles and future implications. This makes you particularly effective in roles that require long-term planning, innovation, and systems-level thinking." },
      { text: "Your thinking preference (76%) means you value objective analysis and logical frameworks. You are skilled at identifying flaws in reasoning and can make difficult decisions without being swayed by emotional pressure. This analytical approach serves you well in complex problem-solving but may sometimes create friction in relationships where empathy is valued over logic." },
      { text: "A judging score of 71% reflects your preference for structure and completion. You are goal-oriented and methodical, typically preferring to make decisions and move forward rather than keeping options open indefinitely. You likely use systems — calendars, lists, frameworks — to organize your life and work." },
    ],
    tips: [
      "Practice active listening in conversations — focus on understanding others' perspectives before formulating your response.",
      "Schedule regular breaks during deep work sessions to prevent burnout and maintain long-term productivity.",
      "Seek out a trusted friend or mentor who can provide honest feedback on your blind spots, particularly around interpersonal dynamics.",
      "When presenting ideas, lead with the 'why' before the 'how' — not everyone processes information the same way you do.",
      "Embrace imperfection in early-stage projects. Your drive for optimization is powerful, but premature perfectionism can stall progress.",
      "Invest time in relationships even when it feels inefficient — social capital compounds over time and opens unexpected doors.",
    ],
  },
};

function generateReport(result, testTitle) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const safeText = (s) => (typeof s === "string" ? s : s != null ? String(s) : "");

  const addPage = () => {
    doc.addPage();
    y = margin;
  };

  const checkPageBreak = (needed) => {
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
    doc.text("Generated by Anima — Know Yourself Deeper", pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
      align: "center",
    });
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, doc.internal.pageSize.getHeight() - 10, {
      align: "right",
    });
  }

  return doc;
}

const pdf = generateReport(mockResult, "Myers-Briggs Type Indicator (MBTI)");
const buffer = Buffer.from(pdf.output("arraybuffer"));
const outPath = "sample-report.pdf";
writeFileSync(outPath, buffer);
console.log(`Sample report written to ${outPath}`);
