import { z } from 'zod'

export const GenerateSchema = z.object({
  modelUrl: z.string().url(),
  outfitUrl: z.string().url().optional(),
  scene: z.string(),
  firearm: z.string(),
  resolution: z.enum(['1024','1536','2048']).default('1024')
})

export type GenerateInput = z.infer<typeof GenerateSchema>;

export async function generateMilitaryTryOn(input: GenerateInput): Promise<string> {
  const { modelUrl, outfitUrl, scene, firearm, resolution } = GenerateSchema.parse(input);

  // TODO: Replace this with your provider call (fal.ai, OpenAI images, Replicate, etc.)
  // Example pseudo-call:
  // const res = await fetch('https://api.fal.ai/generate', { ... })

  // The prompt we send to the image model
  const prompt = `${scene}, holding ${firearm}. Style: realistic military photography, cinematic lighting, high detail.` +
    (outfitUrl ? ' Use outfit reference image provided.' : '');

  console.log('Prompt preview:', prompt);
  console.log('Model image:', modelUrl, 'Outfit:', outfitUrl);

  // Placeholder: return the original model URL (so UI still shows something in dev)
  return modelUrl;
}
