export const SCENE_PRESETS = {
  Forest: 'male soldier in forest wearing camouflage uniform, tactical vest and helmet, cinematic lighting, realistic textures',
  Winter: 'soldier in snow camouflage with rifle, kneeling in snowy forest, cold breath visible, photorealistic winter warfare scene',
  Desert: 'soldier in desert tactical gear, sandstorm in background, harsh sunlight, cinematic photo',
  Urban: 'operator in urban ruins with assault rifle, dust and debris in air, shallow depth of field',
  Battle: 'combat scene with explosion in the background, soldier shouting victory, smoke and fire, dramatic lighting',
} as const;

export type SceneKey = keyof typeof SCENE_PRESETS;

export const FIREARM_STYLES = [
  'Sniper rifle',
  'Assault rifle',
  'Shotgun',
  'Sidearm',
  'No firearm (gear only)'
] as const;