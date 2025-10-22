import React, { useState } from 'react'
import { Loader2, Shirt, Sword } from 'lucide-react'
import { ImageUploader } from './components/ImageUploader'
import { ResultDisplay } from './components/ResultDisplay'
import { SCENE_PRESETS, FIREARM_STYLES, SceneKey } from './prompts/militaryPresets'
import { generateMilitaryTryOn } from './services/tryonService'

export default function App() {
  const [modelUrl, setModelUrl] = useState<string>('')
  const [outfitUrl, setOutfitUrl] = useState<string>('')
  const [scene, setScene] = useState<SceneKey>('Forest')
  const [firearm, setFirearm] = useState<string>(FIREARM_STYLES[0])
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<string>('')

  const handleGenerate = async () => {
    if (!modelUrl) return alert('Please upload a model image')
    setIsProcessing(true)
    try {
      const res = await generateMilitaryTryOn({
        modelUrl,
        outfitUrl: outfitUrl || undefined,
        scene: SCENE_PRESETS[scene],
        firearm,
        resolution: '1024'
      })
      setResult(res)
    } catch (e) {
      console.error(e)
      alert('Generation failed. Check console for details.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">CombatFit-AI</h1>
        <p className="opacity-80 mb-6">Military & firearm themed virtual try-on generator</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ImageUploader label='Model image' onChange={setModelUrl} />
            <ImageUploader label='Outfit (optional)' onChange={setOutfitUrl} />

            <div className="space-y-2">
              <label className="text-sm opacity-80">Scene</label>
              <select
                value={scene}
                onChange={(e) => setScene(e.target.value as SceneKey)}
                className="w-full p-2 rounded border"
              >
                {Object.keys(SCENE_PRESETS).map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm opacity-80">Firearm style</label>
              <select
                value={firearm}
                onChange={(e) => setFirearm(e.target.value)}
                className="w-full p-2 rounded border"
              >
                {FIREARM_STYLES.map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isProcessing}
              className="px-4 py-2 rounded bg-black text-white flex items-center gap-2 disabled:opacity-60"
            >
              {isProcessing ? <Loader2 className="animate-spin" /> : <Sword />}
              {isProcessing ? 'Generating...' : 'Generate Combat Scene'}
            </button>
          </div>

          <div>
            {!result && <div className="opacity-70 text-sm">Your result will appear here after generation.</div>}
            {result && <ResultDisplay imageUrl={result} />}
          </div>
        </div>
      </div>
    </div>
  )
}
