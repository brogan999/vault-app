import { writeFileSync } from "fs";
import { fromTestScores } from "@/lib/personality/scoring/big5";
import { generateBig5FreeResults, generateBig5PremiumReport } from "@/lib/personality/generators/big5";
import type { TestScores, DimensionScore } from "@/lib/tests/types";

const BIG5_1 = { O: 82, C: 28, E: 45, A: 60, N: 35 };

function dim(id: string, label: string, score: number): DimensionScore {
  return { dimensionId: id, label, score, rawScore: score / 100 * 6 + 1, description: "" };
}

const scores: TestScores = {
  dimensions: [
    dim("openness", "Openness", BIG5_1.O),
    dim("conscientiousness", "Conscientiousness", BIG5_1.C),
    dim("extraversion", "Extraversion", BIG5_1.E),
    dim("agreeableness", "Agreeableness", BIG5_1.A),
    dim("neuroticism", "Neuroticism", BIG5_1.N),
  ],
};

const scored = fromTestScores(scores);
const free = generateBig5FreeResults(scored);
const premium = generateBig5PremiumReport(scored);

function md(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '</p><h3>$1</h3><p>')
    .replace(/^## (.+)$/gm, '</p><h3>$1</h3><p>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, "</p><li>")
    .replace(/^- /gm, "<li>");
}

function renderBar(name: string, score: number, lowLabel: string, highLabel: string, color: string): string {
  return `
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px">
        <span style="font-weight:600;color:${color}">${score}% ${name}</span>
      </div>
      <div style="height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden">
        <div style="height:100%;width:${score}%;background:${color};border-radius:4px"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-top:2px">
        <span>${lowLabel}</span><span>${highLabel}</span>
      </div>
    </div>`;
}

const COLORS: Record<string, string> = {
  Openness: "#328181",
  Conscientiousness: "#315E36",
  Extraversion: "#C97A30",
  Agreeableness: "#818D59",
  Neuroticism: "#916368",
};

// --- FREE RESULTS HTML ---
const freeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Big Five Free Results — ${free.identity.typeName}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#1f2937;line-height:1.7;background:#f9fafb}
    .wrap{max-width:720px;margin:0 auto;padding:24px 20px}
    .hero{background:${free.identity.color};border-radius:16px;padding:40px 32px;margin-bottom:32px;color:#fff}
    .hero .label{font-size:13px;text-transform:uppercase;letter-spacing:1px;opacity:.8}
    .hero h1{font-size:32px;font-weight:700;margin:8px 0 4px;line-height:1.2}
    .hero .code{font-size:16px;font-weight:600;opacity:.9}
    h2{font-size:22px;font-weight:700;margin:32px 0 12px;padding-bottom:8px;border-bottom:2px solid #e5e7eb;display:flex;align-items:center;gap:10px}
    h2 .num{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;background:${free.identity.color};color:#fff;font-size:13px;font-weight:700;flex-shrink:0}
    h3{font-size:17px;font-weight:600;margin:20px 0 8px;color:#374151}
    p{margin:0 0 12px}
    .insight{background:#fef3c7;border-left:4px solid #f59e0b;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;font-style:italic}
    .strength{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px 20px;margin-bottom:12px}
    .strength .st{font-weight:700;color:#374151;margin-bottom:4px}
    .bars{margin:16px 0}
    .cta{background:linear-gradient(135deg,${free.identity.color}22,${free.identity.color}11);border:1px solid ${free.identity.color}33;border-radius:12px;padding:24px;margin:24px 0}
    .cta h3{margin-top:0;color:${free.identity.color}}
    ul{margin:8px 0;padding-left:24px}
    li{margin-bottom:6px}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <div class="label">You are:</div>
      <h1>${free.identity.typeName}</h1>
      <div class="code">${free.identity.typeCode}</div>
    </div>

    ${free.identity.overview.split("\n\n").map(p => `<p>${md(p)}</p>`).join("")}

    ${free.structured?.descriptionInsight ? `<div class="insight">${md(free.structured.descriptionInsight)}</div>` : ""}

    <h2><span class="num">1</span> Personality Traits</h2>
    <div class="bars">
      ${free.traits.dimensions.map(d => renderBar(d.name, d.score, d.lowLabel, d.highLabel, COLORS[d.name] ?? "#6b7280")).join("")}
    </div>

    <h2><span class="num">2</span> Strengths & Edges</h2>
    ${free.strengths.map(s => `<div class="strength"><div class="st">${s.title}</div><p>${md(s.description)}</p></div>`).join("")}
    ${free.growthEdge.teaser ? `<div class="insight"><strong>${free.growthEdge.title}:</strong> ${md(free.growthEdge.teaser)}</div>` : ""}

    <h2><span class="num">3</span> How You Connect</h2>
    <p>${md(free.relationships.preview)}</p>

    <h2><span class="num">4</span> Career & Purpose</h2>
    <p><strong>${free.career.headline}</strong></p>
    <p>${md(free.career.preview)}</p>
    <h3>Directions</h3>
    <ul>${free.career.directions.map(d => `<li>${d}</li>`).join("")}</ul>

    <div class="cta">
      <h3>${free.premiumCTA.headline}</h3>
      <ul>${free.premiumCTA.bullets.map(b => `<li>${md(b)}</li>`).join("")}</ul>
    </div>
  </div>
</body>
</html>`;

// --- PREMIUM REPORT HTML ---
const sections = [
  { n: 1, t: premium.executiveSummary.title, c: premium.executiveSummary.content },
  { n: 2, t: premium.fullAnalysis.title, c: premium.fullAnalysis.content },
  { n: 3, t: premium.cognition.title, c: premium.cognition.content },
  { n: 4, t: premium.emotions.title, c: premium.emotions.content },
  { n: 5, t: premium.relationships.title, c: premium.relationships.content + "\n\n" + premium.relationships.compatibilityNote },
  { n: 6, t: premium.career.title, c: premium.career.content },
  { n: 7, t: premium.growth.title, c: premium.growth.content },
  { n: 8, t: "Toolkit", c: premium.toolkit.actions.map(a => `**${a.title}**\n${a.context}\n*Action:* ${a.action}`).join("\n\n") },
  { n: 9, t: premium.compatibility.title, c: premium.compatibility.content + "\n\n" + premium.compatibility.viralCTA },
  { n: 10, t: premium.resources.title, c: premium.resources.content },
];

const premiumHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Big Five Premium Report — ${free.identity.typeName}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#1f2937;line-height:1.7;background:#fff}
    .wrap{max-width:720px;margin:0 auto;padding:32px 20px}
    .cover{background:${free.identity.color};border-radius:16px;padding:48px 32px;margin-bottom:40px;color:#fff;text-align:center}
    .cover .label{font-size:12px;text-transform:uppercase;letter-spacing:2px;opacity:.7;margin-bottom:8px}
    .cover h1{font-size:28px;font-weight:700;margin:8px 0 4px;line-height:1.3}
    .cover .sub{font-size:15px;opacity:.85;margin-top:12px}
    .toc{background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:24px 28px;margin-bottom:40px}
    .toc h2{font-size:18px;margin:0 0 12px;border:none;padding:0}
    .toc ol{padding-left:20px}
    .toc li{margin-bottom:6px;color:#4b5563}
    .toc a{color:${free.identity.color};text-decoration:none;font-weight:500}
    .toc a:hover{text-decoration:underline}
    h2{font-size:22px;font-weight:700;margin:40px 0 16px;padding-bottom:8px;border-bottom:2px solid #e5e7eb;display:flex;align-items:center;gap:10px}
    h2 .num{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;background:${free.identity.color};color:#fff;font-size:13px;font-weight:700;flex-shrink:0}
    h3{font-size:17px;font-weight:600;margin:20px 0 8px;color:#374151}
    p{margin:0 0 14px}
    strong{color:#111827}
    .section{margin-bottom:32px}
    .meta{margin-top:48px;padding-top:24px;border-top:1px solid #e5e7eb;font-size:13px;color:#9ca3af;text-align:center}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="cover">
      <div class="label">Premium Personality Report</div>
      <h1>${free.identity.typeName}</h1>
      <div class="sub">${free.identity.typeCode} • ${free.identity.tagline}</div>
    </div>

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>${sections.map(s => `<li><a href="#s${s.n}">${s.t}</a></li>`).join("")}</ol>
    </div>

    ${sections.map(s => `
      <div class="section" id="s${s.n}">
        <h2><span class="num">${s.n}</span> ${s.t}</h2>
        ${s.c.split("\n\n").map(p => `<p>${md(p.trim())}</p>`).join("")}
      </div>`).join("")}

    <div class="meta">
      Generated ${premium.meta.generatedAt} • ${premium.meta.wordCount} words • v${premium.meta.version}
    </div>
  </div>
</body>
</html>`;

writeFileSync("big5-free-results.html", freeHtml, "utf-8");
writeFileSync("big5-premium-report.html", premiumHtml, "utf-8");

console.log("Generated big5-free-results.html");
console.log("Generated big5-premium-report.html");
console.log(`Free results: ${free.identity.typeName} (${free.identity.typeCode})`);
console.log(`Premium report: ${premium.meta.wordCount} words, ${sections.length} sections`);
