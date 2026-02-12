# Phase 1: Nail the Style

## Step 1: Generate the first image

Start with The Harmonizer (INFP) — the cozy attic room gives Midjourney a lot to work with.

/imagine Miniature diorama scene rendered in a warm claymation style. Soft, tactile textures like sculpted clay and painted wood. Warm golden-hour lighting with soft shadows. Slightly tilt-shifted perspective looking into a detailed miniature world. Character has gently stylized proportions — slightly oversized head, soft rounded features, warm expressive eyes, simple but charming clothing. Rich but slightly muted color palette with pops of one signature accent color. Cozy, handcrafted feeling like a Wes Anderson set crossed with a Laika stop-motion film. No text, no watermarks. Shallow depth of field with the character in sharp focus. A gentle figure in an oversized sweater sits in a cozy attic room. Rain streams down a round window. The walls are covered in watercolor paintings and pinned poems. A sleeping cat curls on a stack of well-loved books. A mug of tea steams on the windowsill. Fairy lights are strung along the ceiling beams. A half-written letter sits on the desk. Accent color: dusty rose. The mood is tender, imaginative, intimate. --ar 3:4 --v 6.1

---

## Step 2: Iterate

If the result isn't right:

- **Too photorealistic?** Add: `handcrafted clay texture, visible sculpting marks, matte painted surfaces`
- **Too flat/cartoony?** Add: `volumetric lighting, subsurface scattering, detailed material textures`
- **Wrong vibe?** Adjust mood words in the character prompt
- **Wrong proportions?** Add: `chibi proportions` (more exaggerated) or `slightly stylized proportions` (more realistic)

## Step 3: Save the winner

Upscale your favorite (U button), save the URL — this becomes your `--sref` for everything.

Then re-run this script with: `npx tsx scripts/generate-prompts.ts --sref <YOUR_URL>`
