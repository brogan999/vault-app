# Character asset pipeline

## Midjourney vs “Midjourney API”

**Midjourney does not offer an official public API.** You can only generate images via:

- **Discord** (bot in a server or DMs)
- **The Midjourney website** (create page)

So “use the Midjourney API” means using a **third-party API** that talks to Midjourney (or a similar service) on your behalf.

## Option 1: Manual (Discord / website)

1. Run the prompt generator and paste prompts into Discord or the website:
   ```bash
   npx tsx scripts/generate-prompts.ts
   ```
2. Copy prompts from `scripts/output/prompts/` (e.g. `phase-1-style.md`, then `phase-2-portraits.md`).
3. After you have a style you like, re-run with your style ref URL so later prompts include it:
   ```bash
   npx tsx scripts/generate-prompts.ts --sref "https://cdn.midjourney.com/..."
   ```
4. Download finished images and put them in `public/characters/{type}/{type}-{asset}.png` (e.g. `public/characters/intj/intj-portrait.png`).

## Option 2: MidAPI (third-party HTTP API)

[MidAPI](https://midapi.ai) is a paid third-party service that exposes an HTTP API for Midjourney-style image generation. We provide a script that uses it to generate and save assets into the repo.

1. **Get an API key** from [midapi.ai/api-key](https://midapi.ai/api-key).
2. **Set the key** in your environment:
   ```bash
   export MIDAPI_KEY=your_key
   ```
   (Or `MIDJOURNEY_API_KEY`.)
3. **Dry run** (no API calls):
   ```bash
   npx tsx scripts/generate-via-midapi.ts --type INTJ --asset portrait --dry-run
   ```
4. **Generate one asset**:
   ```bash
   npx tsx scripts/generate-via-midapi.ts --type INTJ --asset portrait
   ```
5. **Generate a whole phase** (with optional limit):
   ```bash
   npx tsx scripts/generate-via-midapi.ts --phase portraits
   npx tsx scripts/generate-via-midapi.ts --phase portraits --limit 2
   ```

Generated images are written to `public/characters/{type}/{type}-{asset}.png`. The script polls until each job completes, then downloads the first result image.

**Caveats:**

- **Style / character reference:** The style guide relies on `--sref` and `--cref` in Discord. MidAPI supports style and “omni” reference via different task types and parameters; the current script uses plain text-to-image (`mj_txt2img`). For strict style consistency you may still want to lock the look in Discord first, then use MidAPI for bulk runs, or check MidAPI docs for `mj_style_reference` / `mj_omni_reference`.
- **Cost and limits:** MidAPI uses its own credits and rate limits; see their pricing and docs.
- **Other providers:** You can swap in another “Midjourney API” provider (e.g. MidjAPI, ImagineAPI, Apify) by changing the request logic in `generate-via-midapi.ts`; the prompt building and file layout stay the same.

## Tracking progress

```bash
npx tsx scripts/track-progress.ts           # summary
npx tsx scripts/track-progress.ts --status  # full table
npx tsx scripts/track-progress.ts --set intj-portrait complete "https://..."
npx tsx scripts/track-progress.ts --set-sref "https://..."
npx tsx scripts/track-progress.ts --set-cref INTJ "https://..."
```

## Asset layout

- **Per type:** `public/characters/{intj|intp|...}/{type}-{portrait|reveal|avatar|hero-banner|strengths|...}.png`
- **Social cards** are usually composited in Figma from the portrait, not generated as a separate image.
