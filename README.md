# CombatFit-AI (Bolt template)

AI-powered virtual try-on for **military & firearm themed** scenes. Generates social-media-ready visuals with outdoor/winter/battle backdrops.

> ⚠️ Safety: Only generate lawful, non-violent-incitement content meant for apparel/gear visualization and marketing imagery. Do **not** depict illegal activity or instructions for weapon use.

## Stack
- React + Vite + TypeScript
- Provider-agnostic `generateMilitaryTryOn()` with a prompt pipeline
- Preset prompts for Forest / Winter / Desert / Urban / Battle
- Simple uploader + result viewer

## Quick start
```bash
npm install
npm run dev
```

Open http://localhost:5173

## Wiring a real image provider
Replace the placeholder logic inside `src/services/tryonService.ts` with your provider (fal.ai / OpenAI / Replicate). Example:

```ts
const res = await fetch('https://api.your-provider.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.PROVIDER_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt, // build from presets + firearm
    image: modelUrl,
    refs: outfitUrl ? [outfitUrl] : []
  })
})
const data = await res.json()
return data.output[0].url
```

## Export sizes
- 1080x1080 (IG post)
- 1080x1350 (4:5 IG feed)
- 1920x1080 (Reels/YouTube)

Adjust in the provider call.

## Prompt presets
See `src/prompts/militaryPresets.ts` and adjust wording for your model.

## Brand fit for Varusteleka
- Add product SKUs to prompt (e.g., “Särmä TST L4 Field Jacket”) when available
- Style: realistic, gritty, cinematic; avoid cartoonish looks
- Outdoor: Finnish forest/snow environments
