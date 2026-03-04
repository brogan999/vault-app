const fs = require('fs');
const path = require('path');

const CHARACTERS_DIR = path.join(__dirname, '..', 'public', 'characters');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'character-gallery.html');

const ASSET_ORDER = ['avatar', 'reveal', 'strengths', 'relationships', 'career', 'growth'];

const MBTI_TYPES = [
  { id: 'intj', name: 'The Mastermind', code: 'INTJ' },
  { id: 'intp', name: 'The Philosopher', code: 'INTP' },
  { id: 'entj', name: 'The Executive', code: 'ENTJ' },
  { id: 'entp', name: 'The Visionary', code: 'ENTP' },
  { id: 'infj', name: 'The Champion', code: 'INFJ' },
  { id: 'infp', name: 'The Harmonizer', code: 'INFP' },
  { id: 'enfj', name: 'The Hero', code: 'ENFJ' },
  { id: 'enfp', name: 'The Inspirer', code: 'ENFP' },
  { id: 'istj', name: 'The Director', code: 'ISTJ' },
  { id: 'isfj', name: 'The Guardian', code: 'ISFJ' },
  { id: 'estj', name: 'The Governor', code: 'ESTJ' },
  { id: 'esfj', name: 'The Anchor', code: 'ESFJ' },
  { id: 'istp', name: 'The Master', code: 'ISTP' },
  { id: 'isfp', name: 'The Trailblazer', code: 'ISFP' },
  { id: 'estp', name: 'The Dynamo', code: 'ESTP' },
  { id: 'esfp', name: 'The Muse', code: 'ESFP' },
];

const frameworkConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'framework-characters.json'), 'utf8')
);

const FRAMEWORK_LABELS = {
  mbti: 'MBTI',
  big5: 'Big Five',
  enneagram: 'Enneagram',
  disc: 'DISC',
  humandesign: 'Human Design',
  'western-astro': 'Western Astrology',
  'chinese-zodiac': 'Chinese Zodiac',
  numerology: 'Numerology',
  vedic: 'Vedic Astrology',
  mayan: 'Mayan Astrology',
};

function readSvg(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch {
    return null;
  }
}

function buildFrameworkSection(frameworkId, label, types) {
  let typeCards = '';
  let totalAssets = 0;
  let existingAssets = 0;

  for (const t of types) {
    let assetsHtml = '';
    for (const asset of ASSET_ORDER) {
      totalAssets++;
      let svgPath;
      if (frameworkId === 'mbti') {
        svgPath = path.join(CHARACTERS_DIR, t.id, `${t.id}-${asset}.svg`);
      } else {
        svgPath = path.join(CHARACTERS_DIR, frameworkId, t.id, `${t.id}-${asset}.svg`);
      }

      const svg = readSvg(svgPath);
      if (svg) {
        existingAssets++;
        assetsHtml += `
          <div class="asset-card" data-exists="true">
            <div class="svg-container">${svg}</div>
            <div class="asset-label">${asset}</div>
          </div>`;
      } else {
        assetsHtml += `
          <div class="asset-card" data-exists="false">
            <div class="svg-container"><span class="placeholder">missing</span></div>
            <div class="asset-label">${asset}</div>
          </div>`;
      }
    }

    typeCards += `
      <div class="type-row">
        <div class="type-header">
          <span class="type-code">${t.code || t.id}</span>
          <span class="type-name">${t.name}</span>
        </div>
        <div class="assets-grid">${assetsHtml}</div>
      </div>`;
  }

  return `
    <section class="framework">
      <div class="fw-header">
        <h2>${label}</h2>
        <span class="count">${types.length} types &middot; ${existingAssets}/${totalAssets} assets</span>
      </div>
      ${typeCards}
    </section>`;
}

function buildHtml() {
  const sections = [];

  // MBTI
  sections.push(buildFrameworkSection('mbti', 'MBTI', MBTI_TYPES));

  // Other frameworks
  for (const [fwId, fwData] of Object.entries(frameworkConfig.frameworks)) {
    const types = Object.entries(fwData.types).map(([typeId, info]) => ({
      id: typeId,
      name: info.name,
      code: typeId.toUpperCase(),
    }));
    sections.push(buildFrameworkSection(fwId, FRAMEWORK_LABELS[fwId] || fwId, types));
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Character Illustrations — Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #fafafa; color: #1a1a1a; padding: 40px 24px;
      transition: background 0.3s, color 0.3s;
    }
    body.dark { background: #111; color: #f0f0f0; }

    .header {
      max-width: 1400px; margin: 0 auto 40px;
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
    }
    h1 { font-size: 28px; font-weight: 600; }
    .stats { font-size: 14px; color: #999; }

    .controls { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .toggle, .filter-btn {
      padding: 8px 16px; border: 1px solid #ddd; border-radius: 6px;
      background: white; cursor: pointer; font-size: 13px; transition: all 0.2s;
    }
    body.dark .toggle, body.dark .filter-btn { background: #222; border-color: #444; color: #f0f0f0; }
    .toggle:hover, .filter-btn:hover { background: #f0f0f0; }
    body.dark .toggle:hover, body.dark .filter-btn:hover { background: #333; }
    .filter-btn.active { background: #1a1a1a; color: white; border-color: #1a1a1a; }
    body.dark .filter-btn.active { background: #f0f0f0; color: #111; border-color: #f0f0f0; }

    .framework { max-width: 1400px; margin: 0 auto 60px; }
    .fw-header {
      display: flex; align-items: baseline; gap: 12px;
      margin-bottom: 20px; padding-bottom: 12px;
      border-bottom: 1px solid #e0e0e0;
    }
    body.dark .fw-header { border-bottom-color: #333; }
    h2 { font-size: 22px; font-weight: 600; }
    .count { font-size: 13px; color: #999; }

    .type-row { margin-bottom: 32px; }
    .type-header { margin-bottom: 12px; display: flex; align-items: baseline; gap: 10px; }
    .type-code { font-size: 15px; font-weight: 700; text-transform: uppercase; }
    .type-name { font-size: 14px; color: #888; }

    .assets-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
    }
    @media (max-width: 900px) { .assets-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 500px) { .assets-grid { grid-template-columns: repeat(2, 1fr); } }

    .asset-card {
      background: white; border: 1px solid #e8e8e8; border-radius: 10px;
      padding: 12px; text-align: center; transition: all 0.2s;
      overflow: hidden;
    }
    body.dark .asset-card { background: #1a1a1a; border-color: #2a2a2a; }
    .asset-card:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
    .asset-card[data-exists="false"] { opacity: 0.25; }

    .svg-container {
      width: 100%; aspect-ratio: 1; display: flex;
      align-items: center; justify-content: center;
      margin-bottom: 8px; overflow: hidden;
    }
    .svg-container svg {
      width: 100%; height: 100%; display: block;
    }
    body.dark .svg-container svg { filter: invert(1); }
    .placeholder { font-size: 11px; color: #ccc; }

    .asset-label {
      font-size: 11px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.5px; color: #999;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>Character Illustrations</h1>
      <div class="stats">648 SVG line-art illustrations across 10 frameworks</div>
    </div>
    <div class="controls">
      <button class="toggle" onclick="document.body.classList.toggle('dark')">Toggle Dark Mode</button>
      <button class="filter-btn active" data-filter="all" onclick="filterAssets('all', this)">All</button>
      <button class="filter-btn" data-filter="avatar" onclick="filterAssets('avatar', this)">Avatar</button>
      <button class="filter-btn" data-filter="reveal" onclick="filterAssets('reveal', this)">Reveal</button>
      <button class="filter-btn" data-filter="strengths" onclick="filterAssets('strengths', this)">Strengths</button>
      <button class="filter-btn" data-filter="relationships" onclick="filterAssets('relationships', this)">Relationships</button>
      <button class="filter-btn" data-filter="career" onclick="filterAssets('career', this)">Career</button>
      <button class="filter-btn" data-filter="growth" onclick="filterAssets('growth', this)">Growth</button>
    </div>
  </div>
  ${sections.join('\n')}
  <script>
    function filterAssets(type, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.asset-card').forEach(card => {
        const label = card.querySelector('.asset-label').textContent.trim().toLowerCase();
        card.style.display = (type === 'all' || label === type) ? '' : 'none';
      });
      const cols = type === 'all' ? 'repeat(6, 1fr)' : 'repeat(auto-fill, minmax(180px, 1fr))';
      document.querySelectorAll('.assets-grid').forEach(g => g.style.gridTemplateColumns = cols);
    }
  </script>
</body>
</html>`;
}

const html = buildHtml();
fs.writeFileSync(OUTPUT_FILE, html, 'utf8');
const sizeMB = (Buffer.byteLength(html, 'utf8') / 1024 / 1024).toFixed(1);
console.log(`Gallery written to ${OUTPUT_FILE} (${sizeMB} MB)`);
